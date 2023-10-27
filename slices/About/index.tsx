import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
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
            <PrismicNextLink field={item.link}>
            <>{item.label}</>
            </PrismicNextLink>        
          </div>
        ))}
      </div>

      <PrismicNextImage field={slice.primary.image} />
      <PrismicRichText field={slice.primary.description} />
    </section>
  );
};

export default About;
