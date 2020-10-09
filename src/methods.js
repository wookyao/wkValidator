import { 
  isEmpty as checkIsEmpty, 
  isString, 
  isNumber, 
  isJson, 
  isArray,
  isInstance
} from './types'

const methods = {
  isNumber,
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

export default methods;
