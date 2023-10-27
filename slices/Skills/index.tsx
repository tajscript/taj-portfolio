import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Skills`.
 */
export type SkillsProps = SliceComponentProps<Content.SkillsSlice>;

/**
 * Component for "Skills" Slices.
 */
const Skills = ({ slice }: SkillsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <>{slice.primary.heading}</>

      <div>
        {slice.items.map((item, index) => (
          <div key={index}>
            <>{item.label}</>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
