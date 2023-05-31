import React, { useState } from "react";
import Confirm from "@/components/Confirm";
import Button from "@/components/Button";
import styled from "styled-components";

const UseState = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const confirm = () => {
    console.log("confirm clicked");
    setIsOpen(false);
  };
  return (
    <Wrapper>
      <Button onClick={open}>Open Confirm</Button>
      {isOpen && (
        <Confirm
          title="알림"
          message="상품을 주문하시겠습니까?"
          close={close}
          confirm={confirm}
        ></Confirm>
      )}
    </Wrapper>
  );
};

export default UseState;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
