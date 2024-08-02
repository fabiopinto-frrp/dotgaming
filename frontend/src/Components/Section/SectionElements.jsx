import styled from "@emotion/styled";

export const Hero = styled.div`
  background: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 0;
  user-select: none;
  overflow: hidden;
`;

export const HeroHeader = styled.h1`
  color: #fff;
  font-size: 5rem;
  text-align: left;
  z-index: 1;
  margin: 0;
  margin-bottom: 1rem;
  width: auto;
  height: auto;
`;

export const HeroSubHeader = styled.h2`
  color: #fff;
  font-size: 5rem;
  text-align: left;

  z-index: 1;
  margin: 0;
  margin-left: -3rem;
  margin-top: 1rem;
  width: auto;
  height: auto;
`;
export const BackgroundOpacity = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;
