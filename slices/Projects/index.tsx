'use client'

import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { BsArrowUpRight } from 'react-icons/bs';
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import Styles from "@/styles/projects.module.css";

/**
 * Props for `Projects`.
 */
export type ProjectsProps = SliceComponentProps<Content.ProjectsSlice>;

/**
 * Component for "Projects" Slices.
 */
const Projects = ({ slice }: ProjectsProps): JSX.Element => {

  useLayoutEffect(() => {

    let project = gsap.context(() => {

      gsap.utils.toArray<HTMLElement>('#items').forEach((item) => {

        gsap.fromTo(
          item,
          {
            y: 50,
          },
          {
            scrollTrigger: {
              trigger: item,
              start: '-80px bottom',
              scrub: 1
            },
            duration: 1,
            ease: 'power3',
            y: 0,
          }
        );

      });

    })

    return () => {
        project.revert();
    }

    }, [])

  
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.project}
      id="project"
    >
      <div className={Styles.wrapper}>
      <div className={Styles.number}>
      <>{slice.primary.number}</>
      </div>

      <>{slice.primary.title}</>
      </div>

      <div className={Styles.container}>
        {slice.items.map((item, index) => (
          <div key={index} className={Styles.items} id="items">

            <div className={Styles.item__wrapper}>
            <div className={Styles.item}>
            <div className={Styles.heading}>
            <>{item.heading}</>
            <div>
            <>{item.year}</>
            </div>
            </div>
            
            <div className={Styles.link__wrapper}>
            <PrismicNextLink field={item.link} className={Styles.link}>
            <>{item.label}</>
            <BsArrowUpRight />
            </PrismicNextLink>
            </div>
            </div>
            </div>

            <div className={Styles.description}>
            <div className={Styles.details}>
            <div className={Styles.details__text}>
            <>{item.description}</>
            <div className={Styles.skills}>
            <PrismicRichText field={item.skills}/>
            </div>
            </div>

            <div className={Styles.git__link}>
            <PrismicNextLink field={item.gitlink}>
            <>{item.gittext}</>
            </PrismicNextLink>
            </div>
            </div>

            <div className={Styles.image__wrapper}>
            <div className={Styles.image}>
            <PrismicNextImage field={item.image} />
            </div>
            </div>

            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
