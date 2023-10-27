import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Header from "@/components/Header";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Header />
      <>{slice.primary.number}</>
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.heading0} />
      <>{slice.primary.description}</>
    </section>
  );
};

export default Hero;
