import methods from "./methods";
import toast from "./toast";

function validator(rule) {
  const { mths, key, value } = rule;
  for (let i = 0, iLen = mths.length; i < iLen; i++) {
    const { method, params, message } = mths[i];
    if (!methods[method].apply(null, [value, ...params])) {
      toast(key, message, params);
      return false;
    }
  }

  return true;
}

export default validator;
