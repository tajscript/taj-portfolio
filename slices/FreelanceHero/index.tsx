import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Header from "@/components/FreelanceHeader";

import Styles from "@/styles/freelanceHero.module.css";

/**
 * Props for `FreelanceHero`.
 */
export type FreelanceHeroProps =
  SliceComponentProps<Content.FreelanceHeroSlice>;

/**
 * Component for "FreelanceHero" Slices.
 */
const FreelanceHero = ({ slice }: FreelanceHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.hero}
    >
      <Header />
      <PrismicRichText field={slice.primary.description} />
      <>{slice.primary.label}</>
      <PrismicRichText field={slice.primary.heading} />
      <>{slice.primary.scroll}</>
    </section>
  );
};

export default FreelanceHero;
