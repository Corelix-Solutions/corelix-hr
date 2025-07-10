import { config } from '@dotenvx/dotenvx'
import * as z from 'zod'
import EnvVarValidator from './validators/EnvVarValidator'

// Initialize env vars
config()

type EnvVarTypes = z.infer<typeof EnvVarValidator>

let envVars: EnvVarTypes | null = null

const parseResult = EnvVarValidator.safeParse(process.env)

if (parseResult.success) {
  envVars = parseResult.data as EnvVarTypes
} else {
  throw new Error(
    `There was a problem initializing the environment variables: ${JSON.stringify(
      parseResult.error.flatten(),
    )}`,
  )
}

export default envVars
