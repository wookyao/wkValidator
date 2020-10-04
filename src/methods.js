import mthTypes from "./mthTypes";

const methods = {
  required: function (value) {
    if (!value) {
      return false;
    }
    return true;
  },
};

export default methods;
