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
  },
  idcard: {
    handler: 'isIDCard',
    message: '请输入有效的身份证'
  },
  email: {
    handler: 'isEmail',
    message: '请输入有效的电子邮件地址'
  },
  url: {
    handler: 'isUrl',
    message: '请输入有效的网址'
  },
  tel: {
    handler: 'isTel',
    message: '请输入座机号'
  },
  mobile: {
    handler: 'isMobile',
    message: '请输入有效的手机号码'
  },
  digits: {
    handler: 'isDigits',
    message: '请输入正整数'
  },
  integer: {
    handler: 'isInteger',
    message: '只能输入整数数字',
  },
  chinese: {
    handler: 'isChinese',
    message: '只能输入汉字',
  },
  ipv4: {
    handler: 'isIPV4',
    message: '不是有效的IPV4地址',
  },
  ipv6: {
    handler: 'isIPV6',
    message: '不是有效的IPV6地址',
  }
};
