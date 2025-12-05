<p align="center">
  <a>
    <img src="./public/logo.png" height="96">
    <h3 align="center">مرصــاد - Mirsad</h3>
  </a>
</p>

<p align="center">
المنصة الوطنية المختصة بجمع، فرز، تحليل، وتوحيد جميع اللوائح والأنظمة والقرارات الصادرة من مختلف الجهات التشريعية في المملكة العربية السعودية.
</p>

<p align="center">
A unified national platform for collecting, organizing, analyzing, and consolidating all regulations, systems, and decisions issued by various legislative authorities in the Kingdom of Saudi Arabia.
</p>

<br/>

## About

**Mirsad (مرصاد)** enables establishments of all sizes and sectors to:

- Access regulatory information seamlessly
- Perform digital self-inspection to assess compliance
- Identify potential violations before they occur
- Receive actionable recommendations for improvement
- Support Saudi Vision 2030 governance goals

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 16
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) (email + password)
- **Database**: PostgreSQL with [Prisma](https://www.prisma.io/) ORM
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **SMS/Communications**: [Twilio](https://www.twilio.com/)

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- Docker (optional, for local PostgreSQL)

### 1. Clone the Repository

```bash
git clone <repository-url>
cd mirsad
```

### 2. Install Dependencies

```bash
pnpm install
# or
npm install
```

### 3. Configure the Database

#### Option A: Quick Setup with Docker Compose (Recommended)

Start the PostgreSQL database:

```bash
docker compose up -d
```

#### Option B: Use Your Own PostgreSQL Database

Ensure you have a PostgreSQL instance running and note the connection string.

### 4. Environment Variables

Create a `.env` file in the root of the project:

```env
# PostgreSQL Connection
POSTGRES_PRISMA_URL="postgresql://postgres:postgres@localhost:5432/mirsad"
POSTGRES_URL_NON_POOLING="postgresql://postgres:postgres@localhost:5432/mirsad"

# NextAuth Secret - Generate with: openssl rand -base64 32
NEXTAUTH_SECRET=your-secret-here

# Twilio Configuration (contact project maintainer for access)
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=
```

> **Note:** For Twilio environment variables, please contact the project maintainer.

### 5. Run Database Migrations

```bash
npx prisma migrate dev
```

### 6. Start the Development Server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.


---

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

---

## License

This project is private and proprietary.
