# Services

API client and business logic services layer.

## Purpose

Provides HTTP clients and service abstractions for API communication:

- API client instances (Axios, fetch wrappers)
- Expense service (CRUD operations)
- Analytics/reporting service
- Authentication service
- User/profile service
- Category service
- Error handling and request/response interceptors

## Structure

Each service typically:
- Handles HTTP requests to specific API endpoints
- Implements retry logic and error handling
- Transforms API responses into domain models
- Provides type-safe methods for frontend consumption

## Usage

Services are consumed by hooks and components to fetch/mutate data. They act as the abstraction layer between the frontend and backend API.
