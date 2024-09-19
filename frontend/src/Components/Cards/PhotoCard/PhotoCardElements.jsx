import styled from "@emotion/styled";

export const PhotoCardItem = styled.div`
  background-color: #1b0618;
  margin: 1rem;
  width: 20rem;
  height: 25rem;
  overflow: hidden;
  border-radius: 28px;
  position: relative;
`;

export const PhotoCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PhotoCardImageContainer = styled.div`
  width: 16rem;
  height: 16rem;
  overflow: hidden;
`;
export const PhotoCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: all 0.2s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.08);
  }
`;

export const PhotoCardName = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  z-index: 2;
  position: relative;
  padding: 0.5rem;
`;

export const PhotoCardPosition = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  z-index: 2;
  margin-top: -1rem;
  position: relative;
  padding: 0.5rem;
`;
