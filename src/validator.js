import methods from "./methods";

function validator(target, mths) {
  for (let i = 0, iLen = mths.length; i < iLen; i++) {
    const { method, params } = mths[i];
    if (!methods[method].apply(null, params)) {
      return false;
    }
  }

  return true;
}

export default validator;
