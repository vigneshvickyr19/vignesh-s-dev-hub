import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PATHS } from "./paths";

// Lazy load the main page to keep the initial bundle small
const Index = lazy(() => import("@/pages/Index"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Basic route loading fallback
const RouteFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-background">
     <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

// Main app routing with code splitting on pages
const AppRouter = () => {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path={PATHS.HOME} element={<Index />} />
        
        {/* Default catch-all for unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
