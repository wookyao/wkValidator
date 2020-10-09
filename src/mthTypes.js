export default {
  reg: {
    handler: "checkReg",
    message: "不符合此验证规则",
  },
  required: {
    handler: "required",
    message: "此字段必填",
  },
  min: {
    handler: "checkMin",
    message: "不能小于$n",
  },
  max: {
    handler: "checkMax",
    message: "不能大于$n",
  },
  isEmpty: {
    handler: 'isEmpty',
    message: '不是空'
  },
  notEmpty: {
    handler: "isNotEmpty",
    message: "不存在",
  },
  length: {
    handler: 'checkLength',
    message: '请输入$n个字符'
  },
  minLength: {
    handler: "checkMinLength",
    message: "最少要输入$n个字符",
  },
  maxLength: {
    handler: "checkMaxLength",
    message: "做多能输入$n个字符",
  },
  contains: {
    handler: 'isContains',
    message: '必须包含$s'
  },
  notContains: {
    handler: 'notContains',
    message: '不能包含$s'
  },
  number: {
    handler: 'isNumber',
    message: '请输入数字'
  },
  string: {
    handler: 'isString',
    message: '请输入字符串'
  },
  array: {
    handler: 'isArray',
    message: '请输入数组'
  },
  json: {
    handler: 'isJson',
    message: '请输入json对象'
  },
  isInstance: {
    handler: 'isInstance',
    message: '请输入$s类型数据'
  }
};
