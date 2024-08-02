import styled from "@emotion/styled";

const zoomIn = `
  @keyframes zoomIn {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomIn 8s infinite alternate;
  animation-delay: 1s;
  transform-origin: center center;
  ${zoomIn}
`;

export const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
