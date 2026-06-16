import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import AboutPreview from "@/components/AboutPreview";
import Projects from "@/components/Projects";
import BlogPreview from "@/components/BlogPreview";
import CoursePreview from "@/components/CoursePreview";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <section className="max-w-container-max mx-auto px-gutter pb-section-padding space-y-section-padding">
        <Stats />
        <AboutPreview />
        <Projects />
        <BlogPreview />
        <CoursePreview />
      </section>
    </PageTransition>
  );
}
