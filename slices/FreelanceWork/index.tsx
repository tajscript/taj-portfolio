import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FreelanceWork`.
 */
export type FreelanceWorkProps =
  SliceComponentProps<Content.FreelanceWorkSlice>;

/**
 * Component for "FreelanceWork" Slices.
 */
const FreelanceWork = ({ slice }: FreelanceWorkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <>{slice.primary.description}</>

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <>{item.number}</>
            <PrismicRichText field={item.title} />
            <>{item.description}</>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreelanceWork;
