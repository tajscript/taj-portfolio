import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Header from "@/components/FreelanceHeader";

/**
 * Props for `FreelanceHero`.
 */
export type FreelanceHeroProps =
  SliceComponentProps<Content.FreelanceHeroSlice>;

/**
 * Component for "FreelanceHero" Slices.
 */
const FreelanceHero = ({ slice }: FreelanceHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Header />
      
    </section>
  );
};

export default FreelanceHero;
