import { useEffect, useRef } from "react";

const useAnimateOnScroll = ({
  observedClass,
  animationClassRight,
  animationClassLeft,
  threshold = 0.1,
}) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    if (!elementsRef.current.length) {
      console.warn(`Nenhum elemento encontrado com a classe ${observedClass}`);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target } = entry;

          if (entry.isIntersecting) {
            if (
              target.classList.contains("animateRightTarget") &&
              !target.classList.contains(animationClassRight)
            ) {
              target.classList.add(animationClassRight);
              target.setAttribute("data-animated", "true");
            } else if (
              target.classList.contains("animateLeftTarget") &&
              !target.classList.contains(animationClassLeft)
            ) {
              target.classList.add(animationClassLeft);
              target.setAttribute("data-animated", "true");
            }
          } else if (!target.hasAttribute("data-animated")) {
            target.classList.remove(animationClassRight, animationClassLeft);
          }
        });
      },
      { threshold }
    );

    elementsRef.current.forEach((el) => el && observer.observe(el));

    return () => {
      elementsRef.current.forEach((el) => el && observer.unobserve(el));
    };
  }, [observedClass, animationClassRight, animationClassLeft, threshold]);

  return elementsRef;
};

export default useAnimateOnScroll;
