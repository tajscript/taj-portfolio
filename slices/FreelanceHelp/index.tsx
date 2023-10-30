import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FreelanceHelp`.
 */
export type FreelanceHelpProps =
  SliceComponentProps<Content.FreelanceHelpSlice>;

/**
 * Component for "FreelanceHelp" Slices.
 */
const FreelanceHelp = ({ slice }: FreelanceHelpProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <>{item.title}</>
            <>{item.description}</>
            <>{item.duration}</>
          </div>
        ))}
      </div>

      <PrismicRichText field={slice.primary.note} />
    </section>
  );
};

export default FreelanceHelp;
