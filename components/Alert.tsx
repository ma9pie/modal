/* @/components/Alert.tsx */

import React from "react";
import styled from "styled-components";
import { ModalProps } from "@/types";

const Alert = ({ title, message, btnText, close }: ModalProps) => {
  return (
    <Wrapper>
      <Overlay onClick={close}></Overlay>
      <Content>
        <Title>{title}</Title>
        <Message>{message}</Message>
        <ConfirmBtn onClick={close}>{btnText}</ConfirmBtn>
      </Content>
    </Wrapper>
  );
};

export default Alert;

const Wrapper = styled.div``;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  position: fixed;
  display: grid;
  gap: 16px;
  top: 50%;
  left: 50%;
  padding: 16px;
  min-width: 200px;
  max-width: 400px;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
const Title = styled.h3`
  text-align: center;
`;
const Message = styled.p``;
const ConfirmBtn = styled.div`
  flex: 1;
  height: 24px;
  text-align: center;
  color: white;
  background-color: royalblue;
  border-radius: 4px;
  cursor: pointer;
`;
