import styled from "styled-components";
import Image from "next/image";

export default function Modal({ children, onCancel }) {
  return (
    <StyledPageBackground>
      <StyledModalContainer>
        <StyledCancelButton type="button" onClick={onCancel}>
          <Image
            src="/icons/cancel.png"
            width={20}
            height={20}
            alt="close modal"
          />
        </StyledCancelButton>
        {children}
      </StyledModalContainer>
    </StyledPageBackground>
  );
}

const StyledPageBackground = styled.div`
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalContainer = styled.div`
  position: fixed;
  z-index: 4;
  top: calc(40%);
  right: calc(30%);
  background-color: white;
  border-radius: 20px;
  padding: 20px;
`;

const StyledCancelButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
