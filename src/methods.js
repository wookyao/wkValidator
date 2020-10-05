import mthTypes from "./mthTypes";

const methods = {
  required: function (value) {
    if (!value) {
      return false;
    }
    return true;
  },
  checkMinLength: function (value, len) {
    return value.length >= len;
  },
  checkMaxLength: function (value, len) {
    return value.length <= len;
  },
  isEmpty(value) {
    console.log(value);
    if (!value) {
      return false;
    }
    return true;
  },
};

export default methods;
