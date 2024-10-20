import { reactive } from "vue";
import { gm_ref } from "./utils/gm_ref_store";

const store_key = "gm_reminder";

const server = gm_ref(store_key + "server", "http://127.0.0.1:6806");
const token = gm_ref(store_key + "token", "");

export const config = reactive({
  server,
  token,
});
