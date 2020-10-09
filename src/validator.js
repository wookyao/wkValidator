import methods from "./methods";

function validator(rule, toast) {
  const { mths, key, value } = rule;
  for (let i = 0, iLen = mths.length; i < iLen; i++) {
    const { method, params, message } = mths[i];
    if (!methods[method].apply(null, [value, ...params])) {
      let msg = getTips(mths[i], key)
      toast && toast(msg);
      return false;
    }
  }

  return true;
}
function getTips(item, key) {
  const {  params, message, customerTips } = item;
  if (customerTips) return customerTips
  let limit = params.join(',');
  let msg = message.replace(/\$n|\$s/, limit);
  let tips = `字段[${key}]${msg}`;
  return tips;
}


export default validator;
