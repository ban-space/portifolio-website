import PageTransition from "@/components/PageTransition";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import ServicesGrid from "@/components/ServicesGrid";
import BlogPreview from "@/components/BlogPreview";
import CoursePreview from "@/components/CoursePreview";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <AboutPreview />
      <Projects />
      <ServicesGrid />
      <BlogPreview />
      <CoursePreview />
    </PageTransition>
  );
}
