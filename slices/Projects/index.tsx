import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>{slice.primary.number}</>
      <>{slice.primary.title}</>

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <>{item.heading}</>
            <>{item.year}</>
            <PrismicNextLink field={item.link}>
            <>{item.label}</>
            </PrismicNextLink>

            <div>
            <>{item.description}</>
            <PrismicRichText field={item.skills} />
            <PrismicNextLink field={item.gitlink}>
            <>{item.gittext}</>
            </PrismicNextLink>
            <PrismicNextImage field={item.image} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
