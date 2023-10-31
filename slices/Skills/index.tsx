import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Styles from "@/styles/skills.module.css"

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
      className={Styles.skills}
    >
      <div className={Styles.heading}>
      <>{slice.primary.heading}</>
      </div>

      <div className={Styles.wrapper}>
        {slice.items.map((item, index) => (
          <div key={index} className={Styles.items}>
            <div className={Styles.item}>
            <>{item.label}</>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
