# Bloom Reuse - Fullstack Challenge

This project implements a dynamic FAQ system for Bloom Reuse's recommerce platform, handling multiple brands with different configurations for shipping, payment, and special requirements.

## 🏗️ Architecture

### Backend (`/backend`)

The backend is built with Node.js and Express, implementing a RESTful API with the following key components:

- **BrandSettings Model**: Manages brand-specific configurations including:

  - Shipping options (home pickup, Blue Express)
  - Payment methods (bank transfer, store credit)
  - Special requirements (washing, review)
  - Additional fees
  - Coupon policies

- **Error Handling**: Custom error classes and middleware for consistent error responses
- **Configuration Management**: Environment-based configuration with proper TypeScript types
- **CORS Support**: Configured for secure cross-origin requests

### Frontend (`/frontend`)

Built with Next.js and TypeScript, featuring a clean component architecture:

- **Components**:

  - `BrandSelector`: Handles brand selection with proper TypeScript types
  - `FAQList`: Renders dynamic FAQs based on brand settings
  - `Home`: Main page component orchestrating the application flow

- **API Layer** (`/src/api`):

  - Clean separation of API calls
  - Proper error handling with custom `ApiError` class
  - Type-safe responses

- **Types** (`/src/types`):

  - `Brand`: Core brand information
  - `BrandSettings`: Comprehensive brand configuration
  - `FAQ`: Dynamic FAQ structure with conditional rendering

- **Constants** (`/src/constants`):
  - Predefined FAQs with dynamic answers based on brand settings

## 🎨 UI/UX Features

- Modern, clean interface using Tailwind CSS
- Responsive design
- Loading states and error handling
- Dynamic FAQ rendering based on brand configuration
- Clear brand selection interface

## 🔧 Technical Implementation

### Key Features

1. **Dynamic Configuration**: Each brand can have unique settings affecting:

   - Available shipping methods
   - Payment options
   - Special requirements (e.g., washing for Milú Rugs)
   - Fee structures

2. **Smart FAQ System**:

   - Conditional rendering based on brand settings
   - Dynamic answer generation using brand-specific logic
   - Support for both static and function-based answers

3. **Type Safety**:
   - Comprehensive TypeScript implementation
   - Proper error handling across the stack
   - Type-safe API responses

## 💭 Reflections

### What Worked Well

1. **Component Architecture**:

   - Clean separation of concerns
   - Reusable components
   - Type-safe props

2. **Error Handling**:

   - Consistent error responses
   - User-friendly error messages
   - Proper error propagation

3. **Configuration Management**:
   - Flexible brand settings
   - Easy to add new brands
   - Type-safe configuration

### Areas for Improvement

1. **State Management**:

   - Could implement Redux/Context for larger scale
   - Better caching of brand settings
   - More efficient data fetching

2. **Testing**:

   - Add unit tests for components
   - Integration tests for API
   - E2E testing for critical flows

3. **Performance**:
   - Implement server-side caching
   - Add pagination for brand listing
   - Optimize bundle size

### Scaling Considerations

1. **Database Integration**:

   - Move brand settings to a database
   - Implement proper migrations
   - Add caching layer

2. **Authentication/Authorization**:

   - Add user management
   - Role-based access control
   - API authentication

3. **Monitoring and Logging**:
   - Add proper logging
   - Implement monitoring
   - Error tracking

### Encountered Issues and Solutions

1. **CORS Configuration**:

   - Issue: Frontend couldn't access backend API
   - Solution: Proper CORS middleware configuration

2. **TypeScript Errors**:

   - Issue: Incorrect type definitions
   - Solution: Improved type definitions and proper interfaces

3. **Dynamic FAQ Rendering**:
   - Issue: Complex conditional logic in FAQs
   - Solution: Implemented function-based answers with proper typing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn or npm

### Installation

```bash
# Backend
cd backend
yarn installl # npm install
yarn dev # npm run dev

# Frontend
cd frontend
yarn install # npm install
yarn dev # npm run dev
```

### Environment Variables

```env
# Backend
PORT=3001

# Frontend
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

## 📝 License

This project is licensed under the MIT License.
