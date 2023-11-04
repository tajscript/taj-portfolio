import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Link from "next/link";

import Styles from "@/styles/contact.module.css";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = ({ slice }: ContactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.contact}
      id="contact"
    >
      <div className={Styles.wrapper}>
        <div className={Styles.number}>
          <>{slice.primary.number}</>
        </div>
        <div><>{slice.primary.title}</></div>
      </div>

      <div className={Styles.container}>
      <div className={Styles.info}>
      <div className={Styles.contact__me}>
          <div className={Styles.contact__text}>
          <>{slice.primary.text}</>
          </div>

          <div className={Styles.email}>
          <PrismicNextLink field={slice.primary.email_link} className={Styles.email__link}>
          <>{slice.primary.email_text}</>
          </PrismicNextLink>
          </div>
      </div>
      </div>

      <div className={Styles.socials}>
        <div className={Styles.socials__text}>
        <>{slice.primary.connect}</>
        </div>

        <div className={Styles.email__text}>
          <PrismicNextLink field={slice.primary.email_link}>
            <>{slice.primary.email}</>
          </PrismicNextLink>        
        </div>

        <div className={Styles.socials__wrapper}>
        {slice.items.map((item, index) => (
          <div key={index} className={Styles.items}>
            <PrismicNextLink field={item.link} className={Styles.item}>
              <>{item.label}</>
              </PrismicNextLink>
          </div>
        ))}
      </div>

      </div>
      </div>
    </section>
  );
};

export default Contact;
