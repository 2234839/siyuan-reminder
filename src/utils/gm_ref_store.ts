import { GM_getValue, GM_setValue } from "$";
import { ref, watchEffect } from "vue";

export const gm_ref = <T>(store_key: string, value: T) => {
  const _value = GM_getValue(store_key, value);
  const _ref = ref(_value);
  watchEffect(() => {
    GM_setValue(store_key, _ref.value);
  });
  return _ref;
};
