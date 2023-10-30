import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FreelanceContact`.
 */
export type FreelanceContactProps =
  SliceComponentProps<Content.FreelanceContactSlice>;

/**
 * Component for "FreelanceContact" Slices.
 */
const FreelanceContact = ({ slice }: FreelanceContactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.title} />
      <PrismicNextLink field={slice.primary.email_link}>
      <>{slice.primary.email}</>
      </PrismicNextLink>

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <PrismicNextLink field={item.link}>
            <>{item.label}</>
            </PrismicNextLink>
          </div>
        ))}
      </div>

      <PrismicNextLink field={slice.primary.consultation_link}>
      <>{slice.primary.consultation}</>
      </PrismicNextLink>

    </section>
  );
};

export default FreelanceContact;
