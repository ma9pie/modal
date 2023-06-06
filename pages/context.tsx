import React from "react";
import useContextModal from "@/hooks/useContextModal";
import styled from "styled-components";
import Button from "@/components/Button";

const Page = () => {
  const modal = useContextModal();

  const openAlert = () => {
    modal.openAlert({
      title: "알림",
      message: "할인 특가 이벤트 중",
      btnText: "바로가기",
    });
  };
  const openConfirm = () => {
    modal.openConfirm({
      title: "주문",
      message: "상품을 주문하시겠습니까?",
      confirm: () => {
        console.log("주문 완료");
      },
    });
  };
  const openModal = () => {
    modal.openModal({ component: () => <Content>Modal component</Content> });
  };

  return (
    <Wrapper>
      <Button onClick={openAlert}>Open Alert</Button>
      <Button onClick={openConfirm}>Open Confirm</Button>
      <Button onClick={openModal}>Open Modal</Button>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const Content = styled.div`
  width: 400px;
  height: 200px;
`;
