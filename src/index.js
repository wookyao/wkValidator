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

    this.ruleMixValue(data);

    for (let i = 0, iLen = this._ruleList.length; i < iLen; i++) {
      const curRule = this._ruleList[i];
      if (!validator(curRule)) return false;
    }

    return true;
  }
  ruleMixValue(data) {
    this._ruleList.forEach((item) => {
      item.value = data[item.key] || "";
    });
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
  username: "123456",
  password: "",
};

const result = wkValidator.rules(rules).check(data);
console.log(result, "result");

export default wkValidator;
