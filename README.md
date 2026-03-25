# Vignesh R | Frontend Developer Portfolio

A premium, high-performance portfolio showcasing modern web applications and professional projects. Built with a focus on clean architecture, scalability, and exceptional user experience.


## 🛠️ Tech Stack

- **Framework**: React 18 (Vite + SWC)
- **Language**: TypeScript (Strictly typed)
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Architecture**: Modular "Views & Page" structure with centralized constants
- **Performance**: Route-level code splitting and lazy-loaded components
- **Routing**: React Router DOM v6
- **Data Fetching**: TanStack React Query

## 📂 Project Structure

```bash
src/
├── constants/     # Centralized hardcoded data (projects, bio, etc.)
├── theme/         # Design system tokens (palette, typography)
├── layouts/       # Shared layouts (Navbar, Footer, AppLayout)
├── routes/        # Router configuration and path constants
├── views/home/    # Feature-rich page sections (Hero, About, Projects)
├── components/    # Reusable shadcn/ui and shared components
└── pages/         # Page entry points with lazy-loading orchestration
```

## ⚙️ Development

```sh
# Install dependencies
bun install   # or npm install

# Start development server
bun dev       # or npm run dev

# Build for production
bun run build
```

## ✨ Key Features

- **Code Splitting**: Optimized bundle size using `React.lazy` and `Suspense`.
- **Dynamic Projects**: Data-driven project cards with interactive parallax hover effects.
- **Micro-Animations**: Smooth entrance and interaction states powered by Framer Motion.
- **Clean Architecture**: Separation of concerns between UI components, view logic, and static data.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.

---
Developed with ❤️ by **Vignesh R**
