# Corelix Solutions HR System
Corelix Solutions is a modular, automation-first software suite tailored for startups to enterprises. We provide customizable systems for Accounting, ERP, CRM, POS, Inventory, and HR—designed for businesses that don’t want to settle for off-the-shelf limitations.

## 🚀 Vision
To empower companies with software that adapts to them—not the other way around. Corelix is built with deep customization, modern UI/UX, and workflow automation at its core.

## Development Resources and Prerequisites
Created using the following technologies and Deployed on ```Railway```
- Reactjs
- TailwindCSS
- ShadCN UI
- Node/ExpressJs
- Prisma ORM
- MySQL
- Postman

## 🚀 Quick Start
### Prerequisites
- NodeJs 16
- Git
- XAMPP or MySQL

### Installaton
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd corelix-hr
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   npm install

   # Backend dependencies
   cd backend && npm install
   ```

3. **Setup Environment Variables**
   
   Create `backend/.env` file:
   ```env
    HOST=
    PORT=
    DATABASE=your_database_name
    USER=your_database_user
    PASSWORD=your_database_password
    DATABASE_URL=
   ```

4. **Start the application**
   ```bash
   # Terminal 1: Start backend
   cd backend && npm run dev

   # Terminal 2: Start frontend
   npm run dev
   ```

## License (BUSL)
See [LICENSE_NOTICE.md](./LICENSE_NOTICE.md) for the full license description.
