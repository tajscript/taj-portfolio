import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FreelanceAbout`.
 */
export type FreelanceAboutProps =
  SliceComponentProps<Content.FreelanceAboutSlice>;

/**
 * Component for "FreelanceAbout" Slices.
 */
const FreelanceAbout = ({ slice }: FreelanceAboutProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicRichText field={slice.primary.description} />
      <PrismicNextImage field={slice.primary.image} />
      <PrismicNextLink field={slice.primary.link}>
      <>{slice.primary.label}</>
      </PrismicNextLink>
    </section>
  );
};

export default FreelanceAbout;
