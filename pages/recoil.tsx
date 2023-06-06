import React from "react";
import useRecoilModal from "@/hooks/useRecoilModal";
import styled from "styled-components";
import Button from "@/components/Button";

const Page = () => {
  const modal = useRecoilModal();

  const open = () => {
    modal.openModal({ component: () => <Content>Text</Content> });
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
  background-color: #eeeeee;
  border-radius: 12px;
`;
