export default {
  reg: {
    handler: "checkReg",
    message: "不符合规则",
  },
  required: {
    handler: "required",
    message: "不能为空",
  },
  min: {
    handler: "checkMinLength",
    message: "长度不能少于$n个字符",
  },
  max: {
    handler: "checkMaxLength",
    message: "长度不能超过$n个字符",
  },
  notEmpty: {
    handler: "isEmpty",
    message: "不存在",
  },
};
