import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
      Placeholder component for freelance_contact (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FreelanceContact;
