# Lib

Third-party library integrations and configurations.

## Purpose

Contains wrappers and configurations for external libraries and utilities:

- Client instances (API clients, database clients)
- Library initializations and setup
- Environment-specific configurations
- Middleware setup
- Plugin configurations
- Auth provider setup
- Analytics or monitoring integrations

## Usage

The lib folder provides initialized instances and configured exports that are used by services and the application. It's where you configure how third-party libraries behave in your application.

## Examples

- `lib/axios.ts` - Configured Axios instance with interceptors
- `lib/supabase.ts` - Initialized Supabase client
- `lib/firebase.ts` - Firebase app initialization
