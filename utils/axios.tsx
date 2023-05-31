/* @/utils/axios.tsx */
import Axios from "axios";
import modal from "@/utils/modal";

const headers = {
  "Content-Type": "application/json",
};

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 15000,
  headers: headers,
});

axios.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (err) => {
    if (err.response.status === 500) {
      // 서버 오류 알림 관련 모달
      modal.openAlert({
        title: "알림",
        message: "서버 오류가 발생하였습니다.",
        btnText: "확인",
      });
    }
    return Promise.reject(err);
  }
);

export default axios;
