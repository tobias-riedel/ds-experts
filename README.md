## Development

Run development server:
`npm run dev`

## Production

A simple production server can be started by running `npm start`.

But a more sophisticated approach including automatic restarts is described in the sections below.

### GitHub Actions

See [main.yml](.github/workflows/main.yml) for all the steps of the CI/CD pipeline within the **GitHub Actions**.

### Workflow

#### Start

For the first production server startup run `npm run pm2:start`. This will implicitly call `next start` but keep the server running with re-runs, in case of NodeJs crashes.

#### Update/Rebuild

Upon updates run `npm run pm2:restart` after the bundle has been rebuilt.

#### Shut down

To shut the server down, run `npm run pm2:stop`.

## Environment variables

See [.env.example](.env.example) for examples and listings of the **environment variables**.
