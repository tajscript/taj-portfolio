'use client'

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

import Header from "@/components/Header";
import Styles from "@/styles/hero.module.css";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const labelRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {

    let hero = gsap.context(() => {

      gsap.fromTo(labelRef.current, { opacity: 0 }, { opacity: 1, repeat: -1, duration: 2, yoyo: true, ease: "expo.inOut", })

      gsap.to(leftRef.current, {
        opacity: 0,
        x: -500,
        ease: "none",
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#description",
          start: "top center",
          scrub: 2
      }
      })

      gsap.to(rightRef.current, {
        opacity: 0,
        x: 500,
        ease: "none",
        duration: 2,
        delay: 0.5,
        scrollTrigger: {
          trigger: "#description",
          start: "top center",
          scrub: 2
      }
      })

    })

    return () => {
        hero.revert();
    }

    }, [])

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={Styles.hero}
    >
      <Header />

    <div className={Styles.wrapper}>
        <div className={Styles.number}>
          <>{slice.primary.number}</>
        </div>

      <div className={Styles.container}>
      <div className={Styles.heading__container}>
        <div className={Styles.heading}>

          <div className={Styles.label__container}>
            <div className={Styles.heading__child} >
              <PrismicRichText field={slice.primary.heading} />
            </div>
          <div className={Styles.label__wrapper} ref={labelRef}>
              <div className={Styles.label}>
                <>{slice.primary.label}</>
              </div>
            </div>
          </div>

          <div className={Styles.heading__child}>
          <div className={Styles.left} ref={leftRef}>
          <PrismicRichText field={slice.primary.heading0} />
          </div>
          <div className={Styles.right} ref={rightRef}>
          <PrismicRichText field={slice.primary.child0} /> 
          </div> 
            
          </div>       
        </div>

        <div className={Styles.description} id="description">
        <div>
        <>{slice.primary.description}</>
        </div>
        </div>

        </div>
        </div>

        <div className={Styles.scroll} id="scroll">
            <PrismicRichText field={slice.primary.scroll} />
        </div>

    
     </div>

    </section>
  );
};

export default Hero;
