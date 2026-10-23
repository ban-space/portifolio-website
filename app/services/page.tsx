import PageTransition from "@/components/PageTransition";
import PageHeader from "@/components/PageHeader";
import ServicesGrid from "@/components/ServicesGrid";

export default function Services() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Expertise"
        title="Our Services"
        description="We provide end-to-end digital solutions to help businesses and individuals grow, innovate, and succeed. Our focus is on functional elegance and technical mastery."
        currentPage="Services"
        variant="services"
      />
      <ServicesGrid showHeading={false} />
    </PageTransition>
  );
}
