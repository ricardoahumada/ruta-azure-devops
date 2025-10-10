# **E-Commerce Platform MVP Extendedd Requirements**

```text
├── Epic: User Management
│   └── Feature: User Authentication
│       ├── User Story: As a new user, I want to register with my email and password so that I can create an account and access personalized features.
│       │   ├── Task: Design registration UI mockup
│       │   ├── Task: Develop backend API for user registration (with validation and password hashing)
│       │   └── Bug: Login fails with valid credentials (relacionado)
│       ├── User Story: As a returning user, I want to log in securely using my email and password so that I can access my account and personal data.
│       │   ├── Task: Create frontend login form component
│       │   ├── Task: Set up JWT authentication middleware
│       │   └── Bug: Login fails with valid credentials
│       └── User Story: As a user who forgot my password, I want to request a password reset via email so that I can regain access to my account securely.
│           ├── Task: Implement "Forgot Password" frontend form
│           ├── Task: Develop backend password reset token generation and email service
│           └── Task: Create password reset confirmation page with token validation
│
├── Epic: Product Catalog
│   ├── Feature: Product Browsing
│   │   ├── User Story: As a shopper, I want to browse products by category so that I can easily find items that interest me.
│   │   │   ├── Task: Integrate product listing API with frontend
│   │   │   └── Task: Implement category filter UI and routing
│   │   └── User Story: As a shopper, I want to search for products by name or keyword so that I can quickly find specific items without browsing all categories.
│   │       ├── Task: Add search input to product listing UI
│   │       ├── Task: Extend product API with search query parameter
│   │       └── Task: Implement debounced search to improve performance
│   └── Feature: Admin Product Management
│       ├── User Story: As an admin, I want to add a new product with name, description, price, category, and image so that the product becomes available in the catalog.
│       │   ├── Task: Design admin product form
│       │   ├── Task: Implement product CRUD API endpoints
│       │   └── Bug: Product image upload fails over 2MB
│       ├── User Story: As an admin, I want to edit or delete existing products so that I can keep the catalog up to date.
│       │   ├── Task: Extend product CRUD API endpoints for update/delete
│       │   └── Task: Add edit/delete UI controls in admin panel
│       └── User Story: As an admin, I want to bulk upload multiple products via CSV so that I can efficiently populate the catalog without entering each item manually.
│           ├── Task: Design CSV upload interface in admin panel
│           ├── Task: Develop CSV parsing and validation service
│           └── Task: Map CSV fields to product schema and handle errors gracefully
│
├── Epic: Shopping & Checkout
│   ├── Feature: Cart Management
│   │   ├── User Story: As a user, I want to add products to my cart so that I can collect items I intend to purchase.
│   │   │   └── Task: Build cart context/provider in React
│   │   ├── User Story: As a user, I want to view and modify items in my cart (change quantity or remove items) so that I can adjust my order before checkout.
│   │   │   ├── Task: Save cart to localStorage on change
│   │   │   └── Bug: Cart total not updating after quantity change
│   │   └── User Story: As a user, I want my cart to persist across browser sessions so that I don’t lose my selected items if I close the browser or log out temporarily.
│   │       ├── Task: Sync cart state between localStorage and authenticated user profile on login
│   │       ├── Task: Implement backend cart persistence for logged-in users
│   │       └── Bug: Cart items disappear after page refresh for guest users
│   └── Feature: Secure Checkout
│       ├── User Story: As a buyer, I want to complete my purchase using Stripe so that I can pay securely without sharing card details with the site.
│       │   ├── Task: Integrate Stripe Elements on checkout page
│       │   ├── Task: Create order confirmation page
│       │   └── Bug: Stripe test payment succeeds but no order is created
│       ├── User Story: As a user, I want to see my order history so that I can track past purchases and re-order if needed.
│       │   └── Task: Develop GET /api/orders for logged-in user
│       └── User Story: As a buyer, I want to apply a valid promo code during checkout so that I can receive a discount on my order.
│           ├── Task: Add promo code input field to checkout UI
│           ├── Task: Create backend endpoint to validate and apply promo codes
│           └── Task: Update order total dynamically when a valid code is applied
│
├── Epic: Order Management
│   └── Feature: Order History
│       ├── User Story: As a user, I want to see my order history after logging in so that I can review past purchases, delivery status, and receipts.
│       │   └── Task: Reuse and enhance GET /api/orders endpoint (shared with Shopping & Checkout)
│       └── User Story: As a user, I want to view the detailed status of each order (e.g., “Processing”, “Shipped”, “Delivered”) so that I know when to expect my package.
│           ├── Task: Add order status field to order model and API response
│           ├── Task: Display status timeline in order history UI
│           └── Task: Simulate status updates via admin or mock webhook (for demo)
│
└── Epic: Customer Support & Feedback
    └── Feature: In-App Support Requests
        └── User Story: As a user, I want to submit a support ticket from within the app so that I can report issues, ask questions, or request help without leaving the platform.
            ├── Task: Design support ticket form (subject, message, optional order reference)
            ├── Task: Develop backend API to create and store support tickets
            └── Task: Add notification badge to user profile when admin replies
            └── Bug: Ticket submission fails when message exceeds 500 characters
```


## **Nuevas User Stories por Feature Existente**

#### **Epic: User Management**
- **Feature: User Authentication**  
  **User Story:**  
  *As a user who forgot my password, I want to request a password reset via email so that I can regain access to my account securely.*  
  - Task: Implement "Forgot Password" frontend form  
  - Task: Develop backend password reset token generation and email service  
  - Task: Create password reset confirmation page with token validation  

---

#### **Epic: Product Catalog**
- **Feature: Product Browsing**  
  **User Story:**  
  *As a shopper, I want to search for products by name or keyword so that I can quickly find specific items without browsing all categories.*  
  - Task: Add search input to product listing UI  
  - Task: Extend product API with search query parameter  
  - Task: Implement debounced search to improve performance  

- **Feature: Admin Product Management**  
  **User Story:**  
  *As an admin, I want to bulk upload multiple products via CSV so that I can efficiently populate the catalog without entering each item manually.*  
  - Task: Design CSV upload interface in admin panel  
  - Task: Develop CSV parsing and validation service  
  - Task: Map CSV fields to product schema and handle errors gracefully  

---

#### **Epic: Shopping & Checkout**
- **Feature: Cart Management**  
  **User Story:**  
  *As a user, I want my cart to persist across browser sessions so that I don’t lose my selected items if I close the browser or log out temporarily.*  
  - Task: Sync cart state between localStorage and authenticated user profile on login  
  - Task: Implement backend cart persistence for logged-in users  
  - Bug: Cart items disappear after page refresh for guest users  

- **Feature: Secure Checkout**  
  **User Story:**  
  *As a buyer, I want to apply a valid promo code during checkout so that I can receive a discount on my order.*  
  - Task: Add promo code input field to checkout UI  
  - Task: Create backend endpoint to validate and apply promo codes  
  - Task: Update order total dynamically when a valid code is applied  

---

#### **Epic: Order Management**
- **Feature: Order History**  
  **User Story:**  
  *As a user, I want to view the detailed status of each order (e.g., “Processing”, “Shipped”, “Delivered”) so that I know when to expect my package.*  
  - Task: Add order status field to order model and API response  
  - Task: Display status timeline in order history UI  
  - Task: Simulate status updates via admin or mock webhook (for demo)  

---

### **Nueva Epic, Feature y User Story**

#### **Epic: Customer Support & Feedback**
- **Feature: In-App Support Requests**  
  **User Story:**  
  *As a user, I want to submit a support ticket from within the app so that I can report issues, ask questions, or request help without leaving the platform.*  
  - Task: Design support ticket form (subject, message, optional order reference)  
  - Task: Develop backend API to create and store support tickets  
  - Task: Add notification badge to user profile when admin replies  
  - Bug: Ticket submission fails when message exceeds 500 characters  

