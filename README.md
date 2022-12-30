# NestJS Boilerplate

Boilerplate repo for a [NestJS](https://github.com/nestjs/nest) service.

## Features

This boilerplate was generated with the [NestJS CLI](https://docs.nestjs.com/cli/overview) and is setup with these additional features for production-grade services:

- Commands to package as a docker image along with image scanning using [Snyk](https://snyk.io/docker/)
- Simple [Github Actions](https://github.com/features/actions) CI to build, lint, and test on every PR
- Folder layout to keep framework-level modules separate from feature modules
- Structured, high-performance, JSON logging via [Pino Logger](https://github.com/pinojs/pino)
- [NestJS Swagger](https://docs.nestjs.com/openapi/introduction) integration out of the box
- Health Checks via [Terminus](https://docs.nestjs.com/recipes/terminus)
- Unit, integration, and e2e tests through [Jest](https://jestjs.io/) and [supertest](https://www.npmjs.com/package/supertest)

### Todo

- [ ] Config abstraction using decorators

## Prerequisites

Please make sure you have the following before starting with this boilerplate:

- [NodeJS v18+](https://nodejs.org/en/)
- [NPM v8+](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Docker & Docker Compose](https://www.docker.com/)

## Setup

Install dependencies using NPM.

```bash
$ npm install
```

For managed service dependencies, add them to `docker-compose.yml` and then run the following to spin them up:

```bash
$ docker compose up -d
```

## Developer Workflow

These are some useful commands as part of your dev workflow:

```bash
# Run the app
$ npm start            # Same as below
$ npm run start:dev    # Run app and restart on save
$ npm run start:prod   # Run in production mode

# Tests
$ npm run test         # Run tests (unit & integration) once
$ npm run test:watch   # Auto-rerun tests on save
$ npm run test:cov     # Run with code coverage
$ npm run test:e2e     # Run e2e tests once
$ npm run test:e2e:cov # Run e2e tests with coverage

# Style/formatting
$ npm run lint         # Run eslint & fix lint errors
$ npm run format       # Run prettier & fix style errors

# Convenience
$ npm run precommit    # Convenience helper that runs build,
                       # format, lint, and test. NOT an actual
                       # precommit hook, but it's useful to run
                       # before committing

# Docker
$ npm run docker       # Build and then run the app in docker
$ npm run docker:check # Runs a build and a scan
$ npm run docker:build # Builds the service into a docker image
$ npm run docker:run   # Run the service as a docker container
$ npm run docker:scan  # Runs a docker scan using Snyk
                       # NOTE: These are rate limited unless you
                       # get an account with them
```

## Misc

- To check swagger while in dev mode, navigate to [http://localhost:3000/swagger](http://localhost:3000/swagger)
