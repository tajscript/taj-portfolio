"use client"

import { useLayoutEffect, useRef } from "react"
import { gsap } from "gsap";

import Styles from "@/styles/slider.module.css"


const Slider = () => {
  const frontendRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {

    let slider = gsap.context(() => {
      gsap.to("#frontend", {
        xPercent: 100, 
        repeat: -1, 
        duration: 5, 
        ease: "linear", 
        yoyo:true,
    });

      gsap.to("#developer", {xPercent: -100, repeat: -1, duration: 5, ease: "linear", yoyo:true});
    })

    return () => {
        slider.revert();
    }

    }, [])

  return (
    <div className={Styles.container}>
        <div className={Styles.wrapper}>
        <div className={Styles.frontend}  ref={frontendRef}>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text}  id="frontend">
            FRONTEND
          </div>
          <div className={Styles.frontend__text} id="frontend">
            FRONTEND
          </div>
        </div>

        <div className={Styles.developer}>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        <div className={Styles.developer__text} id="developer">
          DEVELOPER
        </div>
        </div>

        </div>
      </div>
  )
}

export default Slider