import { 
  isEmpty as checkIsEmpty, 
  isString, 
  isJson, 
  isArray,
  isInstance,
  isRegExp
} from './types'


const regular = {
  isEmail: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
  isMobile: /^1[3456789]\d{9}$/,
  isTel: /^(\d{3,4}-)?\d{7,8}$/,
  isUrl: /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
  isIDCard: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
  isNumber: /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/,
  isDigits: /^\d+$/,
  isInteger: /^-?\d+$/,
  isChinese: /^[\u4e00-\u9fa5]+$/,
  isIPV4: /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i,
  isIPV6: /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i
}

const methods = {
  isArray,
  isJson,
  isString,
  isInstance,
  isEmpty(value) {
    return checkIsEmpty(value)
  },
  isNotEmpty(value) {
    return !checkIsEmpty(value)
  },
  required (value) {
    if (!value) {
      return false;
    }
    return true;
  },
  checkLength(value, length) {
    if(isEmpty(value)) return false
    return value.length === length
  },
  checkMinLength (value, len) {
    if(isEmpty(value)) return false
    return value.length >= len;
  },
  checkMaxLength (value, len) {
    if(isEmpty(value)) return false
    return value.length <= len;
  },
  checkMin(target, min) {
    if(!isNumber(target)) return false
    return target >= min
  },
  checkMax(target, max) {
    if(!isNumber(target)) return false
    return target <= max
  },
  isContains(value, str) {
    if(!isString(value)) return false
    return value.indexOf(str) !== -1;
  },
  notContains(value, str) {
    if(!isString(value)) return false
    return value.indexOf(str) === -1
  }
  
};

Object.keys(regular).forEach(key => {
  if(isRegExp(regular[key])) {
    methods[key] = function (value) {
      return regular[key].test(value)
    }
  }
})

export default methods;
