import SectionContainer from "../ui/SectionContainer";
import SectionHeading from "../ui/SectionHeading";
import FeaturedProjects from "../ui/FeaturedProject";
import OtherProjects from "../ui/OtherProjects";

export default function ProjectsSection() {
  return (
    <>
      {/* FEATURED PROJECTS SECTION */}
      <SectionContainer id="featured-projects" className="bg-neutral-900">
        <SectionHeading
          title="Featured Projects"
          subtitle="Selected work"
          className="w-full mb-12 pb-6 border-b border-neutral-800"
        />

        <div className="mt-16">
          <FeaturedProjects />
        </div>
      </SectionContainer>

      {/* OTHER PROJECTS SECTION */}
      <SectionContainer id="other-projects" className="bg-neutral-900">
        <SectionHeading title="Other Projects" subtitle="Additional projects" />

        <div className="mt-16">
          <OtherProjects />
        </div>
      </SectionContainer>
    </>
  );
}
