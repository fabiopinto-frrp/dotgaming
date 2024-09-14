import { FaArrowUp } from "react-icons/fa";
import { ScrollUpBtn, ScrollUpButtonContainer } from "./ButtonElements";
import smoothscroll from "smoothscroll-polyfill";
import { useEffect } from "react";

const ScrollUpButton = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  const scrollToTop = () => {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      let scrollStep = -window.scrollY / (500 / 15),
        scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else clearInterval(scrollInterval);
        }, 15);
    }
  };

  return (
    <>
      <ScrollUpButtonContainer>
        <ScrollUpBtn
          onClick={() => {
            scrollToTop();
          }}
        >
          <FaArrowUp />
        </ScrollUpBtn>
      </ScrollUpButtonContainer>
    </>
  );
};

export default ScrollUpButton;
