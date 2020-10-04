import rule2methods from "./rule2methods";
import validator from "./validator";

class WKValidator {
  constructor() {
    this._ruleList = [];
  }
  rules(rulesMap) {
    let keys = Object.keys(rulesMap);
    if (!keys.length) return;
    keys.map((key) => {
      this._ruleList.push({
        key,
        mths: rule2methods(rulesMap[key]) || [],
      });
    });
    return this;
  }
  check(data) {
    let keys = Object.keys(data);
    for (let i = 0, iLen = keys.length; i < iLen; i++) {
      let curRules = this._ruleList.filter((item) => item.key == keys[i]);
      if (curRules.length) {
        if (!validator(data[keys[0]], curRules[0].mths)) return false;
      }
    }
  }
}

const wkValidator = new WKValidator();

const rules = {
  username: "required|min --2| max --10",
  password: {
    notEmpty: true,
    min: 6,
  },
};
const data = {
  username: "1234567879dfdfdfd",
  password: "",
};

const result = wkValidator.rules(rules).check(data);
console.log(result, "result");

export default wkValidator;
