import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for freelance_work (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FreelanceWork;
