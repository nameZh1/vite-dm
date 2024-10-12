// 一言

import { GET } from "@/utils/apiClient";

// https://v1.hitokoto.cn/
export const hitokotoAPI = () => {
  return GET({
    url: "https://v1.hitokoto.cn",
  });
};

export const myHitokotoAPI = (url: string) => {
  return GET({
    url: url,
  });
};
