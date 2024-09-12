import { NextEventModal, NextEventModalCloseBG } from "./SectionModalElements";
import PropTypes from "prop-types";

const SectionModal = ({ modalIsOpen }) => {
  return (
    <>
      <NextEventModalCloseBG onClick={() => modalIsOpen(false)} />
      <NextEventModal>
        <h1>Next Event Modal</h1>
      </NextEventModal>
    </>
  );
};
SectionModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};
export default SectionModal;
