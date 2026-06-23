# Types

TypeScript type definitions and interfaces for the entire application.

## Purpose

Central location for all TypeScript interfaces, types, and enums:

- Domain models (Expense, User, Category, etc.)
- API response/request types
- UI state types
- Form data types
- Error types
- Enum definitions

## Structure

- **models**: Domain entity interfaces
- **api**: API request/response types
- **ui**: Component and UI state types
- **forms**: Form data and validation types

## Guidelines

- Use interfaces for object types (not type aliases)
- Export all types from index.ts for convenient imports
- Keep types close to where they're used when possible
- Document complex types with JSDoc comments
- Ensure type consistency across the codebase
