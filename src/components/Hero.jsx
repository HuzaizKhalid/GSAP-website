import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import React, { useRef,useEffect } from "react";

gsap.registerPlugin(ScrollSmoother);
const Hero = () => {
  const smootherRef = useRef(null);
  const sectionRef = useRef(null);
  useEffect(() => {
     smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // smaller = snappier, bigger = smoother
      effects: true,
    });
  }, []);
  const handleScroll = () => {
    if (sectionRef.current && smootherRef.current) {
      smootherRef.current.scrollTo(sectionRef.current, true, "top 100%");
    }
  };
  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: -100,
      duration: 1,
      ease: "expo.out",
      stagger: 0.2,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0)
      .to(".arrow", { y: 100 }, 0);
  });
  return (
    <>
 <div id="smooth-wrapper">
      <div id="smooth-content">
        <section id="hero" className="noisy h-screen">
          <h1 className="title">MOJITO</h1>
          <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
          <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

          <div className="body">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="arrow cursor-pointer"
              onClick={handleScroll}
            />

            <div className="content">
              <div className="space-y-5 hidden md:block">
                <p>Cool. Crisp. Classic.</p>
                <p className="subtitle">
                  Sip the Spirit <br /> of Summer
                </p>
              </div>

              <div className="view-cocktails">
                <p className="subtitle">
                  Every cocktail on our menu is a blend of premium ingredients,
                  creative flair, and timeless recipes — designed to delight your
                  senses.
                </p>
                <a href="#cocktails">View cocktails</a>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={sectionRef}
          id="next-section"
          style={{ height: "100vh", background: "lightblue" }}
        >
          Next section
        </section>
      </div>
    </div>
    </>
  );
};

export default Hero;
