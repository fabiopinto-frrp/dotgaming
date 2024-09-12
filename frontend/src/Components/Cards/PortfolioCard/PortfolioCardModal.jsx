import { EventModal, EventModalCloseBG } from "./SectionModalElements";
import PropTypes from "prop-types";

const PortfolioCardModal = ({ modalIsOpen }) => {
  return (
    <>
      <EventModalCloseBG onClick={() => modalIsOpen(false)} />
      <EventModal>
        <h1>Next Event Modal</h1>
      </EventModal>
    </>
  );
};
PortfolioCardModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
};

export default PortfolioCardModal;
