import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import Styles from "@/styles/about.module.css";
import Slider from "@/components/Slider";

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
      id="about"
    >
      <div className={Styles.wrapper}>
      <div className={Styles.number}>
      <>{slice.primary.number}</>
      </div>

      <>{slice.primary.title}</>
  
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
      <PrismicRichText field={slice.primary.description} />
      <div className="pt-2"/>
      <>{slice.primary.description0}</>
      <div className="pt-2"/>
      <>{slice.primary.description1}</>
      </div>
      
      <Slider />
    </section>
  );
};

export default About;
