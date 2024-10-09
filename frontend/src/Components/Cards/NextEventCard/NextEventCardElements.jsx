import styled from "@emotion/styled";

export const NextEventSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  @media screen and (max-width: 1800px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1354px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NextEventItem = styled.div`
  background-color: #1b0618;
  margin: 1rem;
  width: 18rem;
  height: 30rem;
  overflow: hidden;
  border: 4px solid #ac2599;
  border-radius: 28px;
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #fff;
    transform: scale(1.05);
  }
`;

export const NextEventItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.8;
  transition: all 0.4s ease-in-out;
`;

export const NextEventItemTopOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 18%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const NextEventItemSubTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
  padding: 0.5rem;
`;

export const NextEventItemBottomOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 18%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const NextEventItemContent = styled.div`
  color: #fff;
  font-size: 0.5rem;
  text-align: left;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 0.5rem;
  z-index: 2;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
`;

export const NextEventItemContentParagraph = styled.p`
  font-size: 1rem;
  text-align: left;
  color: #fff;
  font-family: "Roboto Mono", monospace;
  text-align: center;
  position: relative;
  left: 0;
  z-index: 2;
  margin: 0;
`;
