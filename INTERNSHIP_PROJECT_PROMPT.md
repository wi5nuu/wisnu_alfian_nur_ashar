# 🚀 Professional Web Application Development Prompt
## For PT Grahabuana Cikarang - Software Developer Intern Position

---

## 📋 Project Overview

**Objective**: Build a production-ready enterprise web application that demonstrates full-stack development capabilities aligned with PT Grahabuana Cikarang's Digital Operation Department requirements.

**Target Outcome**: A comprehensive, scalable, and maintainable system that showcases proficiency in PHP, Node.js, Vue.js, database management, system integration, and SDLC best practices.

---

## 🎯 Core Requirements & Technical Specifications

### 1. **Technology Stack** (Aligned with Position Requirements)

#### Backend Options (Choose One or Combine)
- **PHP Framework**: Laravel 10+ or Symfony 6+
  - RESTful API architecture
  - Eloquent ORM / Doctrine ORM
  - JWT authentication
  - Queue management for background jobs
  
- **Node.js Framework**: Express.js or NestJS
  - TypeScript support
  - REST/GraphQL API
  - Microservices architecture capability
  - Real-time features with Socket.io

#### Frontend
- **Vue.js 3** with Composition API
  - Vue Router for navigation
  - Pinia/Vuex for state management
  - Vite for build tooling
  - TypeScript integration
  - Component-based architecture

#### Database Architecture
- **Relational Database**: PostgreSQL 15+ or MySQL 8+
  - Normalized schema design
  - Foreign key constraints
  - Indexing strategies
  - Migration management
  
- **NoSQL Database**: MongoDB or Redis
  - Caching layer (Redis)
  - Session management
  - Document storage for flexible data

#### Cloud & Infrastructure
- **Cloud Platforms**: AWS, Google Cloud, or Azure
  - Cloud database hosting (AWS RDS, Cloud SQL)
  - Object storage (S3, Cloud Storage)
  - Container orchestration (optional: Docker, Kubernetes)
  
- **DevOps Tools**:
  - Git version control with branching strategy
  - CI/CD pipeline (GitHub Actions, GitLab CI)
  - Automated testing integration

---

## 🏗️ Recommended Project Ideas

### Option 1: **Property Management System (Grahabuana-Themed)**
**Description**: A comprehensive system for managing properties, units, tenants, and maintenance requests.

**Core Features**:
- 🏢 Property & Unit Management
  - Add/edit property listings with rich media
  - Unit availability tracking
  - Floor plan visualization
  
- 👥 Tenant Management Portal
  - Tenant registration & verification
  - Lease agreement digital signing
  - Payment history tracking
  
- 🔧 Maintenance Request System
  - Ticket creation with priority levels
  - Status tracking workflow
  - Real-time notifications
  
- 📊 Analytics Dashboard
  - Occupancy rate metrics
  - Revenue tracking
  - Maintenance cost analysis
  
- 🔐 Role-Based Access Control (RBAC)
  - Admin, Property Manager, Tenant roles
  - Granular permissions

**Technical Highlights**:
- Multi-tenant architecture
- Real-time WebSocket notifications
- File upload management
- PDF report generation
- Email/SMS integration

---

### Option 2: **Employee Management & HRMS System**
**Description**: Enterprise HR management system for employee lifecycle management.

**Core Features**:
- 👤 Employee Profile Management
  - Personal information & documents
  - Organization chart visualization
  - Skills & competency tracking
  
- 📅 Attendance & Leave Management
  - Clock in/out system
  - Leave request workflow
  - Attendance reports
  
- 💰 Payroll Processing
  - Salary calculation engine
  - Deduction management
  - Payslip generation
  
- 📈 Performance Evaluation
  - KPI tracking
  - Review cycles
  - 360-degree feedback
  
- 📚 Training & Development
  - Course catalog
  - Training enrollment
  - Certification tracking

**Technical Highlights**:
- Complex business logic
- Workflow automation
- Integration with third-party APIs
- Advanced reporting
- Data privacy compliance

---

### Option 3: **Inventory & Warehouse Management System**
**Description**: Full-featured inventory tracking and warehouse operations platform.

**Core Features**:
- 📦 Inventory Management
  - Product catalog with variants
  - Stock level monitoring
  - Reorder point alerts
  
- 🏪 Warehouse Operations
  - Multi-warehouse support
  - Bin location tracking
  - Stock transfer management
  
- 📥 Purchase Order Management
  - Supplier management
  - PO creation & approval
  - Goods receipt verification
  
- 📤 Sales Order Processing
  - Order fulfillment workflow
  - Picking & packing
  - Shipping integration
  
- 📊 Reporting & Analytics
  - Stock movement reports
  - ABC analysis
  - Demand forecasting

**Technical Highlights**:
- Barcode/QR scanning integration
- Real-time stock updates
- Complex query optimization
- Data export capabilities
- Mobile-responsive design

---

### Option 4: **IT Support Ticketing System**
**Description**: Enterprise-grade helpdesk and IT service management platform.

**Core Features**:
- 🎫 Ticket Management
  - Create/assign/track tickets
  - Priority & SLA management
  - Automated routing rules
  
- 💬 Communication Hub
  - Internal notes & comments
  - Email integration
  - Real-time chat support
  
- 📚 Knowledge Base
  - Article management
  - Search functionality
  - User feedback & ratings
  
- 📈 Analytics & Reporting
  - Response time metrics
  - Resolution rate tracking
  - Agent performance dashboard
  
- 🔌 Integration Capabilities
  - REST API for third-party tools
  - Webhook support
  - SSO authentication

**Technical Highlights**:
- Email-to-ticket conversion
- Notification system
- Search engine optimization
- SLA monitoring
- Audit trail logging

---

## 🎨 System Architecture Requirements

### 1. **Frontend Architecture**
```
src/
├── components/
│   ├── common/         # Reusable UI components
│   ├── layouts/        # Page layouts
│   └── features/       # Feature-specific components
├── views/              # Page components
├── router/             # Vue Router configuration
├── store/              # State management
├── services/           # API service layer
├── utils/              # Helper functions
├── composables/        # Vue 3 composables
└── assets/             # Static assets
```

### 2. **Backend Architecture (MVC/Layered)**
```
app/ or src/
├── Controllers/        # HTTP request handlers
├── Models/             # Data models (ORM)
├── Services/           # Business logic layer
├── Repositories/       # Data access layer
├── Middleware/         # Request middleware
├── Validators/         # Input validation
├── Jobs/               # Background jobs
└── Events/             # Event handlers
```

### 3. **Database Design Principles**
- ✅ Normalized to 3NF (Third Normal Form)
- ✅ Proper indexing on foreign keys and frequently queried columns
- ✅ Soft deletes for audit trail
- ✅ Created_at, updated_at timestamps
- ✅ UUID or auto-increment primary keys
- ✅ Migration files with rollback capability

---

## 🔐 Security Best Practices

### Authentication & Authorization
- JWT token-based authentication
- Refresh token mechanism
- Password hashing (bcrypt, Argon2)
- RBAC (Role-Based Access Control)
- Permission-based access

### Data Security
- Input validation & sanitization
- SQL injection prevention (prepared statements)
- XSS (Cross-Site Scripting) protection
- CSRF token implementation
- Rate limiting on API endpoints
- HTTPS/SSL enforcement

### Code Security
- Environment variables for sensitive data
- Secure file upload validation
- API key management
- Session timeout handling
- Error logging without exposing sensitive info

---

## 📊 Key Features to Implement

### 1. **User Management Module**
- User registration with email verification
- Login/logout with session management
- Password reset functionality
- Profile management
- Role & permission assignment

### 2. **Dashboard & Analytics**
- Interactive charts (Chart.js, ApexCharts)
- Real-time data updates
- Customizable widgets
- Export to Excel/PDF
- Date range filtering

### 3. **CRUD Operations**
- Create, Read, Update, Delete for all entities
- Data validation on frontend & backend
- Pagination for large datasets
- Search & filter functionality
- Bulk operations

### 4. **Notification System**
- In-app notifications
- Email notifications
- Real-time WebSocket updates
- Notification preferences
- Notification history

### 5. **Reporting System**
- Pre-built report templates
- Custom report builder
- Scheduled reports
- PDF/Excel export
- Email report delivery

### 6. **Audit Trail**
- Activity logging
- User action tracking
- Change history
- System logs
- Compliance reporting

---

## 🧪 Testing Requirements

### Unit Testing
- **Backend**: PHPUnit (PHP) or Jest (Node.js)
- **Frontend**: Vitest or Jest with Vue Test Utils
- Target: 80%+ code coverage

### Integration Testing
- API endpoint testing
- Database transaction testing
- Third-party service mocking

### End-to-End Testing
- Cypress or Playwright
- Critical user flows
- Cross-browser testing

### Performance Testing
- Load testing with JMeter or k6
- Database query optimization
- API response time < 200ms

---

## 📈 Performance Optimization

### Frontend Optimization
- Lazy loading components
- Code splitting
- Image optimization (WebP format)
- Caching strategies
- Minification & compression

### Backend Optimization
- Database query optimization
- Caching with Redis
- Queue for heavy operations
- API response compression
- Connection pooling

### Infrastructure Optimization
- CDN for static assets
- Database indexing
- Horizontal scaling capability
- Load balancing (if applicable)

---

## 📝 Documentation Requirements

### 1. **README.md**
- Project overview
- Technology stack
- Installation instructions
- Configuration guide
- Running the application
- Testing procedures

### 2. **API Documentation**
- Endpoint descriptions
- Request/response examples
- Authentication requirements
- Error code reference
- Postman collection

### 3. **Database Schema**
- ER diagram
- Table descriptions
- Relationship explanations
- Migration guide

### 4. **User Documentation**
- User guide with screenshots
- Feature tutorials
- FAQ section
- Troubleshooting guide

### 5. **Developer Documentation**
- Code structure explanation
- Naming conventions
- Design patterns used
- Setup guide for developers
- Contribution guidelines

---

## 🚀 Deployment Strategy

### Development Environment
- Local development setup
- Docker containerization
- Environment configuration

### Staging Environment
- Cloud-hosted staging
- Continuous deployment
- Testing automation

### Production Deployment
- Production server setup
- Database migration strategy
- Zero-downtime deployment
- Rollback procedures
- Monitoring & logging

### Monitoring & Maintenance
- Application performance monitoring
- Error tracking (Sentry, Rollbar)
- Log aggregation
- Backup strategy
- Security updates

---

## 🎯 Success Criteria

### Functionality
- ✅ All core features fully implemented
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Cross-browser compatibility
- ✅ Error handling & user feedback
- ✅ Data validation on all forms

### Code Quality
- ✅ Clean, readable, maintainable code
- ✅ Consistent coding standards
- ✅ Proper commenting & documentation
- ✅ No security vulnerabilities
- ✅ DRY (Don't Repeat Yourself) principle

### Performance
- ✅ Page load time < 3 seconds
- ✅ API response time < 200ms
- ✅ Efficient database queries
- ✅ Optimized asset delivery
- ✅ Scalable architecture

### Testing
- ✅ 80%+ unit test coverage
- ✅ Integration tests for critical flows
- ✅ End-to-end test for main features
- ✅ Performance testing completed
- ✅ Security testing performed

### Documentation
- ✅ Complete README with setup guide
- ✅ API documentation
- ✅ Database schema documented
- ✅ User manual created
- ✅ Code comments on complex logic

---

## 🛠️ Development Workflow

### Phase 1: Planning & Design (Week 1)
- Define project scope
- Create database schema
- Design UI/UX wireframes
- Set up project structure
- Initialize Git repository

### Phase 2: Core Development (Week 2-3)
- Implement authentication system
- Build database models & migrations
- Develop CRUD operations
- Create API endpoints
- Build frontend components

### Phase 3: Feature Development (Week 4-6)
- Implement main features
- Integrate third-party services
- Add notification system
- Build dashboard & analytics
- Implement reporting

### Phase 4: Testing & Optimization (Week 7)
- Write unit tests
- Perform integration testing
- Conduct performance testing
- Security audit
- Bug fixing

### Phase 5: Documentation & Deployment (Week 8)
- Complete documentation
- Prepare deployment scripts
- Deploy to staging
- Final testing
- Production deployment

---

## 🎓 Learning Outcomes

By completing this project, you will demonstrate:

✅ **Full-Stack Development Proficiency**
- Frontend: Vue.js 3, TypeScript, modern UI/UX
- Backend: PHP/Node.js, RESTful API design
- Database: SQL & NoSQL management

✅ **Software Engineering Best Practices**
- SOLID principles
- Design patterns
- Clean architecture
- Version control (Git)
- CI/CD pipeline

✅ **System Integration Skills**
- Third-party API integration
- Cloud services utilization
- Email/SMS services
- Payment gateway (optional)

✅ **Database Expertise**
- Schema design
- Query optimization
- Migration management
- Data integrity

✅ **DevOps Knowledge**
- Containerization (Docker)
- Cloud deployment
- Monitoring & logging
- Backup strategies

✅ **Professional Skills**
- Project planning
- Documentation writing
- Problem-solving
- Code review
- Agile methodology

---

## 🤝 Collaboration & Code Review

### Git Workflow
- Feature branch workflow
- Pull request process
- Code review checklist
- Commit message conventions

### Communication
- Daily progress updates
- Technical documentation
- Issue tracking
- Knowledge sharing

---

## 📚 Recommended Resources

### Documentation
- Laravel: https://laravel.com/docs
- Vue.js: https://vuejs.org/guide
- Node.js: https://nodejs.org/docs
- PostgreSQL: https://www.postgresql.org/docs
- MongoDB: https://www.mongodb.com/docs

### Learning Platforms
- Laracasts (Laravel)
- Vue Mastery
- Node.js Best Practices
- Database Design Courses

### Tools
- Postman (API testing)
- DBeaver (Database management)
- VS Code (Code editor)
- GitKraken (Git GUI)
- Docker Desktop

---

## 🎉 Project Deliverables

1. ✅ **Source Code** (GitHub repository)
2. ✅ **Live Demo** (Deployed application URL)
3. ✅ **Documentation** (Complete docs folder)
4. ✅ **Presentation** (Project walkthrough slides)
5. ✅ **Video Demo** (5-10 minute screen recording)

---

## 💡 Additional Features (Optional - For Excellence)

- 🔍 **Advanced Search**: Elasticsearch integration
- 📱 **Mobile App**: Flutter or React Native companion
- 🤖 **AI Integration**: ChatGPT API for intelligent features
- 📧 **Email Templates**: Professional email design
- 📊 **Advanced Analytics**: Predictive analytics
- 🌐 **Multi-language**: i18n internationalization
- ♿ **Accessibility**: WCAG 2.1 compliance
- 🔔 **Push Notifications**: Web push notifications
- 💬 **Live Chat**: Real-time customer support
- 📱 **QR Code**: Generation & scanning features

---

## 🏆 Success Tips

1. **Start Simple, Iterate**: Build MVP first, then enhance
2. **Focus on Core Features**: Complete essential features before advanced ones
3. **Write Clean Code**: Readable > Clever
4. **Test Early, Test Often**: Catch bugs early
5. **Document as You Go**: Don't leave docs to the end
6. **Ask for Feedback**: Regular code reviews
7. **Stay Organized**: Use project management tools
8. **Commit Regularly**: Small, atomic commits
9. **Prioritize Security**: Security first, not an afterthought
10. **Learn from Mistakes**: Every bug is a learning opportunity

---

## 📞 Support & Mentorship

During your internship at PT Grahabuana Cikarang, leverage:
- Senior developer guidance
- Code review sessions
- Technical support team
- Digital Operation Department resources
- Company's development standards

---

## 🎯 Final Goal

Create a **production-ready, enterprise-grade web application** that:
- Solves a real business problem
- Demonstrates your technical expertise
- Follows industry best practices
- Can be showcased in your portfolio
- Makes a positive impact on the organization

---

**Good luck with your internship project! 🚀**

**Remember**: This is not just a project—it's an opportunity to showcase your skills, learn enterprise development, and make a lasting impression at PT Grahabuana Cikarang.

---

*Generated for: Wisnu Alfian Nur Ashar*  
*Position: Software Developer Intern*  
*Company: PT Grahabuana Cikarang*  
*Start Date: August 31, 2026*
