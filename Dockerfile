# Build image
FROM node:16-alpine AS build

# OS Dependencies
RUN apk add --no-cache python3 make g++

# Build the app
WORKDIR /build
COPY . /build

RUN npm ci && npm run build && npm ci --omit=dev --ignore-scripts

# Runtime image
FROM node:16-alpine

WORKDIR /app

# Add your app
COPY --from=build /build/dist /app/dist
COPY --from=build /build/node_modules /app/node_modules
COPY --from=build /build/package.json /app/package.json

EXPOSE $PORT

CMD ["node", "--use-openssl-ca", "dist/main.js"]
