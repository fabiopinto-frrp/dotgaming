import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ScrollUpButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  user-select: none;
`;

export const ScrollUpBtn = styled.button`
  background-color: #400e39;
  color: #fff;
  border: 2px solid #b502b5;
  border-radius: 25%;
  font-size: 2rem;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ac2599;
    color: #400e39;
    border: 2px solid #ac2599;
  }
`;

export const PortfolioRedirectButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  z-index: 2;
`;

export const PortfolioRedirectBtn = styled(Link)`
  position: relative;
  background-color: #420d3b;
  color: #fff;
  border: 2px solid #b502b5;
  border-radius: 1rem;
  font-size: 1.5rem;
  z-index: 2;
  padding: 1rem;
  cursor: pointer;
  overflow: hidden;
  text-decoration: none;
  user-select: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
    border: 2px solid #ff00ff;
    transform: scale(1.05);
    box-shadow: 0 0 10px #ff00ff;
  }
`;
