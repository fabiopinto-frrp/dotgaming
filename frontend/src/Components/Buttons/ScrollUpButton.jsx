import { FaArrowUp } from "react-icons/fa";
import { ScrollUpBtn, ScrollUpButtonContainer } from "./ButtonElements";
import smoothscroll from "smoothscroll-polyfill";
import { useEffect } from "react";

const ScrollUpButton = () => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <ScrollUpButtonContainer>
        <ScrollUpBtn
          className="scroll-up-button"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FaArrowUp />
        </ScrollUpBtn>
      </ScrollUpButtonContainer>
    </>
  );
};

export default ScrollUpButton;
