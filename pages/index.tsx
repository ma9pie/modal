import React from "react";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";

const Page = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Container>
        <Button onClick={() => router.push("/useState")}>
          useState로 구현하기
        </Button>
        <Button onClick={() => router.push("/createRoot")}>
          createRoot로 구현하기
        </Button>
        <Button onClick={() => router.push("/redux")}>Redux로 구현하기</Button>
        <Button onClick={() => router.push("/recoil")}>
          Recoil로 구현하기
        </Button>
        <Button onClick={() => router.push("/context")}>
          Context로 구현하기
        </Button>
      </Container>
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
const Container = styled.div`
  display: grid;
  gap: 16px;
`;
