import { lazy, Suspense } from "react";
import Layout from "@/layouts/Layout";

// Lazy load views for better initial bundle size and performance (Code Splitting)
const HeroView = lazy(() => import("@/views/home/HeroView"));
const AboutView = lazy(() => import("@/views/home/AboutView"));
const ProjectsView = lazy(() => import("@/views/home/ProjectsView"));
const TechStackView = lazy(() => import("@/views/home/TechStackView"));
const ExperienceView = lazy(() => import("@/views/home/ExperienceView"));
const ContactView = lazy(() => import("@/views/home/ContactView"));

/** Simple fallback loader for lazy-loaded components */
const ViewFallback = () => <div className="h-20 animate-pulse bg-secondary/20 rounded-xl m-4" />;

const Index = () => {
  return (
    <Layout>
      <Suspense fallback={<ViewFallback />}>
        <HeroView />
      </Suspense>
      
      <Suspense fallback={<ViewFallback />}>
        <AboutView />
      </Suspense>

      <Suspense fallback={<ViewFallback />}>
        <ProjectsView />
      </Suspense>

      <Suspense fallback={<ViewFallback />}>
        <TechStackView />
      </Suspense>

      <Suspense fallback={<ViewFallback />}>
        <ExperienceView />
      </Suspense>

      <Suspense fallback={<ViewFallback />}>
        <ContactView />
      </Suspense>
    </Layout>
  );
};

export default Index;
