import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

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
    >
      <>{slice.primary.number}</>
      <>{slice.primary.title}</>
      <>{slice.primary.heading}</>
      <PrismicNextLink field={slice.primary.link}>
      <>{slice.primary.label}</>
      </PrismicNextLink>
      
      <PrismicNextLink field={slice.primary.email_link}>
      <>{slice.primary.email_text}</>
      </PrismicNextLink>
    </section>
  );
};

export default Contact;
