# Artillery Performance Testing

A NestJS project set up to demonstrate and run performance tests using Artillery.

## Prerequisites

- Node.js (v22 or later recommended)
- pnpm (or npm/yarn)

## Installation

```bash
pnpm install
```

## Running the Application

To start the NestJS application in development mode:

```bash
pnpm start:dev
```

## Running Performance Tests

This project uses [Artillery](https://www.artillery.io/) for performance testing. 

### Automated Testing

To automatically start the development server, wait for it to be ready, run the Artillery tests, and shut down the server:

```bash
pnpm test:perf
```

### Manual Testing

If you already have the server running (e.g., via `pnpm start:dev`), you can run the Artillery tests manually.

For the fast endpoint:

```bash
pnpm test:artillery
```

For the slow endpoint:

```bash
pnpm artillery run ./test/artillery-slow-end-point.yaml
```

## Test Configurations

The performance test configurations are located in the `test` directory:
- `artillery.yaml` - Default configuration targeting the root (`/`) endpoint (simulating fast requests).
- `artillery-slow-end-point.yaml` - Configuration targeting the `/slow` endpoint (simulating slow requests).
