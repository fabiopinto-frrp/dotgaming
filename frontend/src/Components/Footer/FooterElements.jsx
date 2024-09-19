import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const FooterContainer = styled.footer`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  user-select: none;
`;
export const FooterSubContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 2rem;
  margin-left: 4rem;
`;
export const FooterText = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
`;
export const FooterLink = styled(Link)`
  text-decoration: none;
  margin: 0.5rem;
  color: #fff;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #ff00ff;
  }
`;

export const FooterContent = styled.p`
  text-decoration: none;
  margin-top: -0.5rem;
  color: #fff;
  font-size: 1rem;
`;

export const FooterFlagContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #333333;
  align-items: center;
  height: 10%;
  width: 10%;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 2rem;
  margin-right: 4rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #474747;
  }
 &:hover .flag {
transform: scale(1.1);
`;
export const FooterFlag = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 0.3rem;
  transition: all 0.2s ease-in-out;
`;
