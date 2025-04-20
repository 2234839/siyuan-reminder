import { reactive } from 'vue';
import { gm_ref } from './utils/gm_ref_store';

const store_key = 'gm_reminder';

const server = gm_ref(store_key + 'server', 'http://127.0.0.1:6806');
const token = gm_ref(store_key + 'token', '');
const protocol = gm_ref<'siyuan' | 'http'>(store_key + 'protocol', 'siyuan');
const queryWebContent = gm_ref<boolean>(store_key + 'protoqueryWebContentcol', false);

export const config = reactive({
  server,
  token,
  protocol,
  /** 是否解析正文内容 */
  queryWebContent
});
