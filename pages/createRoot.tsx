import React from "react";
import modal from "@/utils/modal";

import styled from "styled-components";
import Button from "@/components/Button";

const Page = () => {
  const open = () => {
    modal.openAlert({
      title: "Notice",
      message: "Message",
      btnText: "Ok",
    });
  };

  return (
    <Wrapper>
      <Button onClick={open}>Open Modal</Button>
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
