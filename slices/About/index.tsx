import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Styles from "@/styles/about.module.css";

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
      className={Styles.about}
    >
      <div className={Styles.wrapper}>
      <div className={Styles.number}>
      <>{slice.primary.number}</>
      </div>

      <div className={Styles.number}>
      <>{slice.primary.title}</>
      </div>

      <div className={Styles.socials}>
        {slice.items.map((item, index) => (
          <div key={index} className={Styles.social}>
            <PrismicNextLink field={item.link}>
            <>{item.label}</>
            </PrismicNextLink>        
          </div>
        ))}
      </div>
      </div>

      <div className={Styles.container}>
      <div className={Styles.image__wrapper}>
      <div className={Styles.image}>
      <PrismicNextImage field={slice.primary.image} />
      </div>
      </div>
      <div className={Styles.description}>
      <PrismicRichText field={slice.primary.description} />
      </div>
      </div>
      
    </section>
  );
};

export default About;
