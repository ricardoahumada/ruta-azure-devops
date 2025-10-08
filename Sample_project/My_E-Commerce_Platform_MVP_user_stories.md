# User Stories for "E-Commerce Platform MVP"

### 1. **User Account Management**

#### US101: User Registration  
**As a** new visitor  
**I want to** create an account using my email and password  
**So that** I can securely access personalized features like order history and saved carts  

**Acceptance Criteria:**  
- Registration form has fields: Name, Email, Password (with confirmation)  
- Password must be at least 8 characters with one special character  
- On success, user receives confirmation email and is redirected to login  
- Duplicate emails are rejected with a clear error message  
- Data is stored securely (hashed password)  

**Priority:** High  
**Effort (Story Points):** 5  
**Tags:** Authentication, Security  

---

#### US102: User Login  
**As a** registered user  
**I want to** log in using my email and password  
**So that** I can access my personal account and shopping history  

**Acceptance Criteria:**  
- Login page accepts email and password  
- Invalid credentials show an error message without revealing which field is wrong  
- Successful login redirects to homepage with user session active  
- Session persists across pages until logout or timeout  
- JWT token is used for authentication  

**Priority:** High  
**Effort (Story Points):** 3  
**Tags:** Authentication, Frontend, API  

---

#### US103: View and Edit Profile  
**As a** logged-in user  
**I want to** view and edit my profile information  
**So that** I can keep my contact details up to date  

**Acceptance Criteria:**  
- Profile page displays current name, email, and password change option  
- User can update name and email (email change requires re-verification)  
- Option to change password (current + new) with validation  
- Success message appears after save  
- Changes are reflected immediately in the system  

**Priority:** Medium  
**Effort (Story Points):** 3  
**Tags:** Profile, UX  

---

### 2. **Product Catalog Browsing**

#### US201: Browse Products by Category  
**As a** shopper  
**I want to** browse products organized by category (e.g., Electronics, Clothing)  
**So that** I can easily find items relevant to my interests  

**Acceptance Criteria:**  
- Homepage shows category navigation menu or cards  
- Clicking a category displays a grid of products with image, name, price  
- Pagination or infinite scroll for large catalogs  
- Responsive layout works on mobile and desktop  

**Priority:** High  
**Effort (Story Points):** 5  
**Tags:** Catalog, UI, Mobile-Friendly  

---

#### US202: Search Products by Name  
**As a** shopper  
**I want to** search for products using keywords  
**So that** I can quickly locate specific items  

**Acceptance Criteria:**  
- Search bar visible on all pages (header)  
- Real-time suggestions appear as user types  
- Results page shows matching products (case-insensitive)  
- “No results” message if query returns nothing  
- Search supports partial matches (e.g., “lapt” → “Laptop”)  

**Priority:** High  
**Effort (Story Points):** 8  
**Tags:** Search, Backend, Performance  

---

### 3. **Shopping Cart & Checkout**

#### US301: Add Items to Cart  
**As a** user  
**I want to** add a product to my shopping cart  
**So that** I can collect items before purchasing  

**Acceptance Criteria:**  
- “Add to Cart” button on product detail page  
- Cart icon in header updates item count instantly  
- Item is added to session/cart (persistent if logged in)  
- Toast notification confirms addition  
- Duplicates increment quantity instead of adding new line  

**Priority:** High  
**Effort (Story Points):** 5  
**Tags:** Cart, Frontend, State Management  

---

#### US302: View Cart Summary  
**As a** user  
**I want to** review all items in my cart with totals  
**So that** I can confirm my selections before checkout  

**Acceptance Criteria:**  
- Cart page lists each item: image, name, price, quantity (editable), line total  
- Subtotal, tax (simulated), and estimated total displayed clearly  
- “Continue Shopping” and “Proceed to Checkout” buttons  
- Option to remove an item  

**Priority:** High  
**Effort (Story Points):** 3  
**Tags:** Cart, UX  

---

#### US303: Enter Shipping Information  
**As a** customer  
**I want to** enter my shipping address during checkout  
**So that** my order can be delivered to the correct location  

**Acceptance Criteria:**  
- Form collects: Full name, address, city, ZIP, country, phone  
- All required fields validated  
- Option to use saved address (if logged in)  
- Auto-detect country from IP (optional enhancement)  

**Priority:** High  
**Effort (Story Points):** 5  
**Tags:** Checkout, Form Validation  

---

#### US304: Enter Payment Information  
**As a** customer  
**I want to** securely input payment details  
**So that** I can complete my purchase  

**Acceptance Criteria:**  
- Form collects card number, expiry, CVV, name on card  
- Card number masked as user types  
- Basic validation (Luhn algorithm for card format)  
- No real payment processing — simulate success/failure  
- PCI compliance note in documentation  

**Priority:** High  
**Effort (Story Points):** 8  
**Tags:** Payment, Security, Simulation  

---

### 4. **Admin & Operations**

#### US401: View Orders Dashboard  
**As an** admin  
**I want to** see a list of recent orders with status  
**So that** I can monitor and manage fulfillment  

**Acceptance Criteria:**  
- Admin-only dashboard accessible via `/admin/orders`  
- Table columns: Order ID, Customer, Date, Total, Status (Pending, Shipped, etc.)  
- Filter by status  
- Click row to view order details (items, shipping info)  

**Priority:** High  
**Effort (Story Points):** 5  
**Tags:** Admin, Reporting  

---

#### US402: Update Order Status  
**As an** admin  
**I want to** update an order’s status (e.g., mark as shipped)  
**So that** customers receive accurate tracking information  

**Acceptance Criteria:**  
- Dropdown per order to change status  
- Status changes saved in database  
- Confirmation modal before update  
- Audit log entry created (timestamp, admin ID)  

**Priority:** Medium  
**Effort (Story Points):** 3  
**Tags:** Admin, Workflow  

---

#### US403: Add New Product  
**As an** admin  
**I want to** add a new product to the catalog  
**So that** it becomes available for customers to purchase  

**Acceptance Criteria:**  
- Form includes: Name, Description, Price, Category, Image upload (URL or file)  
- Required fields validated  
- On save, product appears in catalog  
- Success toast shown; redirect to product list  

**Priority:** Medium  
**Effort (Story Points):** 5  
**Tags:** Admin, CRUD, Media Upload  

---

### 5. **Security & Compliance**

#### US501: Role-Based Access Control  
**As a** system  
**I want to** restrict access based on user roles  
**So that** only authorized users can perform sensitive actions  

**Acceptance Criteria:**  
- Roles defined: `User`, `Admin`  
- Admin routes (`/admin/*`) require `Admin` role  
- Unauthorized access redirects to login or shows 403  
- Role assigned at registration (default: User) or manually by super-admin  

**Priority:** High  
**Effort (Story Points):** 8  
**Tags:** Security, RBAC, Middleware  

---

## ✅ Summary Table

| ID | Title | Priority | Effort (SP) |
|----|-------|----------|-------------|
| US101 | User Registration | High | 5 |
| US102 | User Login | High | 3 |
| US103 | View and Edit Profile | Medium | 3 |
| US201 | Browse Products by Category | High | 5 |
| US202 | Search Products by Name | High | 8 |
| US301 | Add Items to Cart | High | 5 |
| US302 | View Cart Summary | High | 3 |
| US303 | Enter Shipping Information | High | 5 |
| US304 | Enter Payment Information | High | 8 |
| US401 | View Orders Dashboard | High | 5 |
| US402 | Update Order Status | Medium | 3 |
| US403 | Add New Product | Medium | 5 |
| US501 | Role-Based Access Control | High | 8 |
