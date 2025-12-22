import { defineConfig } from 'checkly'

const config = defineConfig({
  logicalId: 'playwright-lamocha',
  projectName: 'playwright-lamocha',
  checks: {
    playwrightConfigPath: './playwright.config.ts',
    playwrightChecks: [
      {
        logicalId: 'playwright-lamocha',
        name: 'playwright-lamocha',
        frequency: 10,
        locations: [
          'us-east-1',
        ],
      },
    ],
    frequency: 10,
    locations: [
      'us-east-1',
    ],
  },
  cli: {
    runLocation: 'us-east-1',
  },
})

export default config