import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FreelanceServices`.
 */
export type FreelanceServicesProps =
  SliceComponentProps<Content.FreelanceServicesSlice>;

/**
 * Component for "FreelanceServices" Slices.
 */
const FreelanceServices = ({ slice }: FreelanceServicesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>{slice.primary.heading}</>

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <>{item.title}</>
            <>{item.description}</>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FreelanceServices;
