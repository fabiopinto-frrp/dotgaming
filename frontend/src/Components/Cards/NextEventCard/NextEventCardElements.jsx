import styled from "@emotion/styled";

export const NextEventSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
`;

export const NextEventItem = styled.div`
  background-color: #1b0618;
  margin: 1rem;
  width: 18rem;
  height: 30rem;
  overflow: hidden;
  border-radius: 28px;
  &:hover .section-item-bg {
    color: #fff;
    transform: scale(10);
  }
`;

export const NextEventItemSubTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
`;

export const NextEventItemContent = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
`;
