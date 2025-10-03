This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🎨 Sistema de Finanças

Front-end moderno construído com **Clean Architecture** e **Atomic Design**.

### 🚀 Rodar o projeto

```bash
npm run dev
```

Acesse: `http://localhost:3000/login`

### 📦 Gerar hooks da API

```bash
npm run generate:api
```

### 📁 Estrutura

```
src/
├── core/              # Domain (Clean Architecture)
├── infrastructure/    # API integration
├── presentation/      # UI (Atomic Design)
│   ├── atoms/        # Button, Input, Label...
│   ├── molecules/    # InputField, PasswordInput...
│   └── organisms/    # LoginForm, RegisterForm...
└── shared/           # Hooks, utils, types
```

### 🎨 Design System

- **Base:** `#171E25` (Dark)
- **Primary:** `#0D9C8B` (Teal)
- **Accent:** `#40FFC9` (Neon Green)

📖 **[Guia do Orval](./ORVAL_GUIDE.md)**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
