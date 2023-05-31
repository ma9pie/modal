import React, { useEffect } from "react";
import modal from "@/utils/modal";

const Page = () => {
  useEffect(() => {
    modal.openAlert({
      title: "Notice",
      message: "Message",
      btnText: "Ok",
    });
  }, []);

  return <div>index</div>;
};

export default Page;
