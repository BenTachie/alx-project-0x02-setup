# 🚀 Next.js Project Setup and Basics

A beginner-to-intermediate project for learning how to build modern web applications using **Next.js**, **TypeScript**, and **Tailwind CSS**. This repository covers foundational skills such as project scaffolding, routing, component reuse, API integration, and responsive UI development using best practices.

---

## 📚 Learning Objectives

By working through this project, you will:

- Scaffold a Next.js app with **TypeScript** and **Tailwind CSS**
- Understand basic routing using the **Pages Router**
- Create **reusable components** with TypeScript interfaces
- Build interactive UI elements (buttons, modals, cards)
- Fetch and display data from external APIs (e.g., JSONPlaceholder)
- Organize your project following best practices
- Work with props, state, and layout
- Design responsive pages using Tailwind utilities

---

## ⚙️ Requirements

Before getting started, ensure you have the following:

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn
- Basic knowledge of **React**, **TypeScript**, and **HTML/CSS**
- Git & GitHub account
- Code editor (we recommend [VS Code](https://code.visualstudio.com/))

---

## 📁 Project Structure
```
alx-project-0x02/
├── components/
│ ├── common/ # Reusable UI components
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ ├── PostCard.tsx
│ │ ├── PostModal.tsx
│ │ └── UserCard.tsx
│ └── layout/
│ └── Header.tsx # Navigation header
├── interfaces/
│ └── index.ts # Shared TypeScript interfaces
├── pages/
│ ├── _app.tsx
│ ├── _document.tsx
│ ├── about.tsx
│ ├── home.tsx
│ ├── index.tsx
│ ├── posts.tsx
│ └── users.tsx
├── public/
│ └── assets/
│ └── images/
├── styles/
│ └── globals.css # Tailwind base styles
├── .eslintrc.json # Linting rules
├── next.config.js # Next.js configuration
├── package.json # Project metadata and dependencies
├── tsconfig.json # TypeScript configuration
└── README.md
```

---

## 🛠️ Implementation Guide

Follow this step-by-step guide to build the project:

1. **Initialize the project**  
   Set up a new Next.js app with TypeScript and Tailwind CSS.

2. **Create essential components**  
   - Start with `Card.tsx` and `Button.tsx`
   - Progress to `PostCard`, `UserCard`, and `PostModal`

3. **Add global layout**  
   - Implement `Header.tsx` for navigation
   - Use it across all pages via `_app.tsx`

4. **Setup routing**  
   - Create pages (`home.tsx`, `about.tsx`, `posts.tsx`, etc.) in the `/pages` directory.

5. **API Integration**  
   - Use `fetch` or `axios` to retrieve data from JSONPlaceholder
   - Display posts and user data with your reusable components

6. **Style with Tailwind CSS**  
   - Build responsive, mobile-first UIs
   - Use utility classes for layout, spacing, and typography

7. **Test and iterate**  
   - Test components and routing locally
   - Refactor for reusability and scalability

---

## 💡 Best Practices

### 🔧 Project Structure
- Organize components by domain (`common`, `layout`, etc.)
- Place all interfaces in the `/interfaces` folder
- Use meaningful file names and directory nesting

### 🎨 Component Design
- Use TypeScript interfaces for props
- Follow the **Single Responsibility Principle**
- Favor modular, composable component architecture

### ✨ Code Quality
- Use **ESLint** for linting and consistency
- Comment where necessary, especially in reusable logic
- Keep functions and components clean and testable

### ⚡ Performance
- Optimize API calls and limit re-renders
- Use lazy loading for modal content and large sections
- Minimize unused Tailwind styles

---

## 🌐 External APIs

This project fetches data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/), a free fake API for testing and prototyping.

---

## ✅ Expected Outcomes

By the end of this project, you will have:

- A fully functional and responsive Next.js application
- Modular, well-structured components using TypeScript
- Functional routing and navigation
- Data displayed from external APIs
- Codebase that reflects real-world best practices

---

## 📸 Screenshots

Coming soon...

---

## 📌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## 🧠 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- Inspired by real-world frontend architecture best practices

---

> “Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.” - Patrick McKenzie
