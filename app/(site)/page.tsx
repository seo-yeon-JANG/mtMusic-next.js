import { sleep } from "@/lib/utils";
import React from "react";

const page = async () => {
  // await sleep(2000);
  // 서버 사이드 로딩 중 문제 발생 시 errorpage 노출
  // throw new Error("my error");
  return <div>HomePage</div>;
};

export default page;
