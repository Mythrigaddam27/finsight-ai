# Hooks

Custom React hooks for reusable state management and business logic.

## Purpose

Encapsulates React hooks that manage state, side effects, and data fetching:

- Data fetching hooks (useExpenses, useDashboard, etc.)
- Form handling hooks (useForm, useFormValidation)
- Authentication hooks (useAuth, useCurrentUser)
- Local state management hooks
- Custom behavioral hooks (useDebounce, usePagination, etc.)

## Guidelines

- Hooks should have a clear, single responsibility
- Use descriptive names starting with "use"
- Document dependencies and side effects
- Hooks should be composable with other hooks
- Consider performance implications (memoization, dependencies)

## Usage

Hooks are consumed by components to abstract complex state and effects logic, promoting code reuse and separation of concerns.
