import styled from "@emotion/styled";

export const ReviewCardItem = styled.div`
  width: 20rem;
  height: 10rem;
  border-radius: 20px;
  position: relative;
  padding: 1.8rem;
  margin-bottom: 3rem;
  transition: 0.2s ease-out;
  overflow: visible;
  user-select: none;
`;

export const ReviewCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const ReviewCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

export const ReviewCardName = styled.h2`
  font-size: 1.5rem;
  font-family: "Roboto Mono", monospace;
  margin: 0;
`;

export const ReviewCardCompanyName = styled.p`
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  margin: 0;
`;

export const ReviewCardDesc = styled.p`
  font-size: 1rem;
  font-family: "Roboto Mono", monospace;
  color: #fff;
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
