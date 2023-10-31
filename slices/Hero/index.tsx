import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Header from "@/components/Header";
import Styles from "@/styles/hero.module.css";

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
      className={Styles.hero}
    >
      <Header />

    <div className={Styles.wrapper}>
        <div className={Styles.number}>
          <>{slice.primary.number}</>
        </div>

      <div className={Styles.container}>
      <div className={Styles.heading__container}>
        <div className={Styles.heading}>
          <PrismicRichText field={slice.primary.heading} />
          <PrismicRichText field={slice.primary.heading0} />
        </div>

        <div className={Styles.description}>
        <div>
        <>{slice.primary.description}</>
        </div>
        </div>

        </div>
        </div>

        <div className={Styles.scroll}>
        <PrismicRichText field={slice.primary.scroll} />
        </div>

    
     </div>

    </section>
  );
};

export default Hero;
