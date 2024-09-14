import { FaArrowUp } from "react-icons/fa";
import { ScrollUpBtn, ScrollUpButtonContainer } from "./ButtonElements";

const ScrollUpButton = () => {
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
