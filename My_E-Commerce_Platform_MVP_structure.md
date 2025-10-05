#  E-Commerce Platform MVP

## Estructura

```text
├── Epic: User Management
│   └── Feature: User Authentication
│       ├── User Story: As a new user, I want to register with my email and password so that I can create an account and access personalized features.
│       │   ├── Task: Design registration UI mockup
│       │   ├── Task: Develop backend API for user registration (with validation and password hashing)
│       │   └── Bug: Login fails with valid credentials (relacionado)
│       └── User Story: As a returning user, I want to log in securely using my email and password so that I can access my account and personal data.
│           ├── Task: Create frontend login form component
│           ├── Task: Set up JWT authentication middleware
│           └── Bug: Login fails with valid credentials
│
├── Epic: Product Catalog
│   ├── Feature: Product Browsing
│   │   └── User Story: As a shopper, I want to browse products by category so that I can easily find items that interest me.
│   │       ├── Task: Integrate product listing API with frontend
│   │       └── Task: Implement category filter UI and routing
│   └── Feature: Admin Product Management
│       ├── User Story: As an admin, I want to add a new product with name, description, price, category, and image so that the product becomes available in the catalog.
│       │   ├── Task: Design admin product form
│       │   ├── Task: Implement product CRUD API endpoints
│       │   └── Bug: Product image upload fails over 2MB
│       └── User Story: As an admin, I want to edit or delete existing products so that I can keep the catalog up to date.
│           ├── Task: Extend product CRUD API endpoints for update/delete
│           └── Task: Add edit/delete UI controls in admin panel
│
├── Epic: Shopping & Checkout
│   ├── Feature: Cart Management
│   │   ├── User Story: As a user, I want to add products to my cart so that I can collect items I intend to purchase.
│   │   │   └── Task: Build cart context/provider in React
│   │   └── User Story: As a user, I want to view and modify items in my cart (change quantity or remove items) so that I can adjust my order before checkout.
│   │       ├── Task: Save cart to localStorage on change
│   │       └── Bug: Cart total not updating after quantity change
│   └── Feature: Secure Checkout
│       ├── User Story: As a buyer, I want to complete my purchase using Stripe so that I can pay securely without sharing card details with the site.
│       │   ├── Task: Integrate Stripe Elements on checkout page
│       │   ├── Task: Create order confirmation page
│       │   └── Bug: Stripe test payment succeeds but no order is created
│       └── User Story: As a user, I want to see my order history so that I can track past purchases and re-order if needed.
│           └── Task: Develop GET /api/orders for logged-in user
│
└── Epic: Order Management
    └── Feature: Order History
        └── User Story: As a user, I want to see my order history after logging in so that I can review past purchases, delivery status, and receipts.
            └── Task: Reuse and enhance GET /api/orders endpoint (shared with Shopping & Checkout)
```


## Areas

## Cloud solution
- CS-Dev-Team
- CS-Test-Team
## App Solution
- AS-Dev-Team
- AS-Test-Team
