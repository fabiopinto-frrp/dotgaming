import styled from "@emotion/styled";

export const Hero = styled.div`
  background: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0;
  margin-top: -100px;
  top: 0;
  left: 0;
  z-index: 0;
  user-select: none;
  overflow: hidden;
`;

export const HeroHeader = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 7rem;
  text-align: left;
  font-weight: 700;
  font-family: "Roboto Mono", monospace;
  z-index: 1;
  margin: 0;
  margin-bottom: 1rem;
  width: auto;
  height: auto;

  }
`;

export const HeroSubHeader = styled.h2`
  color: rgba(0, 0, 0, 0);
  -webkit-text-stroke: 0.2rem #fff;
  text-transform: uppercase;
  font-size: 7rem;
  text-align: left;
  font-weight: 700;
  font-family: "Roboto Mono", monospace;
  z-index: 1;
  margin: 0;

  margin-top: 1rem;
  width: auto;
  height: auto;
  &:before {
    content: attr(data-text);
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #fff;
    -webkit-text-stroke: 0rem #fff;
    border-right: 0.2rem solid #fff;
    overflow: hidden;

    animation: animate 6s linear alternate infinite;
    @keyframes animate {
      0%,
      10%,
      100% {
        width: 0;
      }
      70%,
      90% {
        width: 100%;
      }
    }
  }
`;

export const HeroIcon = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  z-index: 1;
  width: 7rem;
`;

export const BackgroundOpacity = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const PrimarySectionContainer = styled.div`
  background-color: #1b0618;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 100%;
`;

export const PrimarySectionTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 2rem;
`;

export const PrimarySectionSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
`;

export const PrimarySectionIcon = styled.img`
  width: 7rem;
  height: 7rem;
`;

export const PrimarySectionSubTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1rem;
  margin-left: -1.2rem;
`;

export const PrimarySectionContent = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1rem;
  margin-left: -1.2rem;
`;
