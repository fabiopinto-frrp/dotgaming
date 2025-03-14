import { FaArrowUp } from "react-icons/fa";
import { ScrollUpBtn, ScrollUpButtonContainer } from "./ButtonElements";
import smoothscroll from "smoothscroll-polyfill";
import { useState, useEffect } from "react";
import { css } from "@emotion/css";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    smoothscroll.polyfill();
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <ScrollUpButtonContainer>
        {isVisible && (
          <ScrollUpBtn onClick={scrollToTop}>
            <FaArrowUp
              className={css`
                transform: translateY(0.2rem);
              `}
            />
          </ScrollUpBtn>
        )}
      </ScrollUpButtonContainer>
    </>
  );
};

export default ScrollUpButton;
