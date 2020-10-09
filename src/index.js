import rule2methods from "./rule2methods";
import validator from "./validator";
import mthTypes from './mthTypes'
import methods from './methods'
import toast from './toast'

class WKValidator {
  constructor() {
    this._ruleList = [];
    this._toast = toast;
  }

  rules(rulesMap, messageMap) {
    let keys = Object.keys(rulesMap);
    if (!keys.length) return;
    keys.map((key) => {
      this._ruleList.push({
        key,
        mths: rule2methods(rulesMap[key], messageMap[key]) || [],
      });
    });
    return this;
  }
  check(data) {
    this.ruleMixValue(data);
    for (let i = 0, iLen = this._ruleList.length; i < iLen; i++) {
      const curRule = this._ruleList[i];
      if (!validator(curRule, this._toast)) return false;
    }

    return true;
  }
  ruleMixValue(data) {
    this._ruleList.forEach((item) => {
      item.value = data[item.key] || null;
    });
  }

  validator() {
    let args = [...arguments];
    if(!args.length) return false
    let handler = mthTypes[args[0]] || '';
    let method = handler.handler
    if(methods[method]) {
      return methods[method].apply(null, args.slice(1))
    }
    return true;
  }

  setToast(fn) {
    this._toast = fn
    return this;
  }
}
export default WKValidator;
