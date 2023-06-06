import React from "react";
import useReduxModal from "@/hooks/useReduxModal";
import styled from "styled-components";
import Button from "@/components/Button";

const Page = () => {
  const modal = useReduxModal();

  const open = () => {
    modal.openModal({ component: () => <Content>modal content</Content> });
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
const Content = styled.div`
  width: 200px;
  height: 300px;
`;
