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

export const SectionContainer = styled.div`
  background-color: #1b0618;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100%;
  user-select: none;
`;

export const SectionTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 2rem;
`;

export const SectionSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
`;

export const SectionItemBg = styled.div`
  height: 128px;
  width: 128px;
  background-color: #ad2499;
  position: relative;
  top: -12rem;
  right: -15rem;
  z-index: 1;
  border-radius: 50%;
  transition: all 0.5s ease;
`;
export const SectionItem = styled.div`
  background-color: #0c030c;
  margin: 1rem;
  width: 18rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 28px;
  &:hover .section-item-bg {
    color: #fff;
    transform: scale(10);
  }
`;

export const SectionSubTitle = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
`;

export const SectionContent = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1rem;
  z-index: 2;
  position: relative;
`;
