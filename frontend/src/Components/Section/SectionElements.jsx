import styled from "@emotion/styled";

export const Hero = styled.div`
  background: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  height: calc(100vh + 100px);
  position: relative;
  margin: 0;
  margin-top: -100px;
  top: 0;
  left: 0;
  z-index: 0;
  user-select: none;
  box-sizing: border-box;
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
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 3rem;
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
  box-sizing: border-box;
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
  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 2.8rem;
  }
`;

export const HeroIcon = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 2rem;
  z-index: 1;
  width: 7rem;
  box-sizing: border-box;
  @media screen and (max-width: 768px) {
    width: 5rem;
  }
`;

export const BackgroundOpacity = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: absolute;
  box-sizing: border-box;
  z-index: 1;
`;

export const SectionContainer = styled.div`
  background-color: #1b0618;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  user-select: none;
  box-sizing: border-box;
`;

export const SectionTitle = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 2rem;
  box-sizing: border-box;
`;

export const SectionSubContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8rem;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0 auto;
  box-sizing: border-box;
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

export const SectionItemBg = styled.div`
  height: 128px;
  width: 128px;
  background-color: #ad2499;
  position: relative;
  top: -12rem;
  right: -15rem;
  z-index: 1;
  border-radius: 50%;
  box-sizing: border-box;
  transition: all 0.5s ease;
`;
export const SectionItem = styled.div`
  background-color: #0c030c;
  margin: 1rem;
  width: 18rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 28px;
  box-sizing: border-box;
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
  box-sizing: border-box;
  position: relative;
`;

export const SectionContent = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-bottom: 1rem;
  z-index: 2;
  box-sizing: border-box;
  position: relative;
`;

export const LogoSubContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
`;

export const LogosContainer = styled.div`
  display: flex;
  align-items: space-between;
  margin: 1 rem;
  box-sizing: border-box;
  margin-bottom: 3rem;
`;

export const LogoItem = styled.img`
  height: 4.5rem;
  margin-left: 7.8rem;
  user-select: none;
  box-sizing: border-box;
`;

export const CarouselContainer = styled.div`
  width: auto;
  background-color: #1b0618;
  user-select: none;
  box-sizing: border-box;
`;

export const CarouselSpacing = styled.div`
  height: 3rem;
  background-color: #1b0618;
  box-sizing: border-box;
`;

export const SectionDescription = styled.p`
  color: #fff;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Roboto Mono", monospace;
  margin-top: 1rem;
  z-index: 2;
  position: relative;
  box-sizing: border-box;
`;

export const SectionImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
  transition: all 0.5s ease;
`;

export const SectionImageContainer = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const SectionDescriptionContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
  box-sizing: border-box;
`;
