import styled from "@emotion/styled";

export const NextEventModalCloseBG = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
`;

export const NextEventModal = styled.div`
  background-color: #0c030c;
  width: 60%;
  height: 80%;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed; /* Changed to fixed */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  h1 {
    color: #fff;
  }
`;
