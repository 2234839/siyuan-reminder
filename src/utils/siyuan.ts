import { GM } from "$";
import { config } from "../config";

type sqlResponse = {
  code: 0;
  msg: "";
  data: { [col: string]: string }[];
};
export async function sql(stmt: string) {
  return new Promise<sqlResponse>((resolve, reject) => {
    GM.xmlHttpRequest({
      method: "POST",
      url: `${config.server}/api/query/sql`,
      data: JSON.stringify({ stmt }),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: `Token ${config.token}`,
      },
      onload(event) {
        resolve(JSON.parse(event.responseText));
      },
      onerror(event) {
        reject(event);
      },
    });
  });
}
export type syBlock = {
  alias: "";
  box: "20210816161940-zo21go1";
  content: string;
  created: "20210209161010";
  fcontent: "安装 思源 apk https://github.com/siyuan-note/siyuan";
  hash: "1c39187";
  hpath: "/other/思源安卓版 git 同步方法";
  ial: '{: id="20210209161010-cks0cpz"}';
  id: "20210209161010-cks0cpz";
  length: 47;
  markdown: string;
  memo: "";
  name: "";
  parent_id: "20210209163803-2fjcm0r";
  path: "/20210816161944-cn1ky4x/20210209161008-nzq3um7.sy";
  root_id: "20210209161008-nzq3um7";
  sort: 20;
  subtype: "o";
  tag: "";
  type: "l";
  updated: "";
};
