import styled from "@emotion/styled";

export const ScrollUpButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
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
