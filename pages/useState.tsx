import React from "react";
import Confirm from "@/components/Confirm";
import Button from "@/components/Button";
import Portal from "@/components/Portal";
import styled from "styled-components";
import useModal from "@/hooks/useModal";

const Page = () => {
  const { isOpen, open, close } = useModal();

  const confirm = () => {
    console.log("confirm clicked");
    close();
  };
  return (
    <Wrapper>
      <Button onClick={open}>Open Confirm</Button>
      {isOpen && (
        <Portal>
          <Confirm
            title="알림"
            message="상품을 주문하시겠습니까?"
            close={close}
            confirm={confirm}
          ></Confirm>
        </Portal>
      )}
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
