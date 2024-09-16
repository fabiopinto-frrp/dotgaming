import styled from "@emotion/styled";

export const ReviewCardItem = styled.div`
  width: 20rem;
  height: 10rem;
  border-radius: 20px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  margin-bottom: 1.5rem;
  border: 3px solid #ac2599;
  transition: 0.2s ease-out;
  overflow: visible;
  user-select: none;
  &:hover {
    border-color: #ff00ff;
    box-shadow: 0 10px 20px -5px rgba(255, 0, 255, 0.6); /* Glow effect only at the bottom */
  }

  &:hover .review-card-field {
    transform: translate(-50%, 50%);
    opacity: 1;
  }
`;

export const ReviewCardDetails = styled.div`
  color: black;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;
`;

export const ReviewCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ReviewCardAvatar = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const ReviewCardTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewCardName = styled.h2`
  font-size: 2rem;
  font-family: "Roboto Mono", monospace;
  margin: 0;
`;

export const ReviewCardCompanyName = styled.p`
  font-size: 1.2rem;
  font-family: "Roboto Mono", monospace;
  margin: 0;
`;

export const ReviewCardDesc = styled.p`
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  margin-left: 2rem;
`;

export const ReviewCardField = styled.button`
  transform: translate(-50%, 125%);
  width: 60%;
  border-radius: 1rem;
  border: none;
  background-color: #ff00ff;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  position: absolute;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
`;
