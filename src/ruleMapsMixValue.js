
import {isString} from './types'

function ruleMapsMixValue(rules, data) {
  if(!rules.length) return []
  let ruleList = []
  rules.forEach((item) => {
   
    ruleList.push({
      ...item,
      value: data[item.key] || null,
      mths: getMths(item.mths, data)
    })
  });

  return ruleList
}

function getMths(mths, data) {
  let list = mths.map(item => ({
    ...item,
    params: item.params.map(p => isString(p) && p.indexOf('$') === 0 ? data[p.substring(1)] : p)
  }))
  return list
}

export default ruleMapsMixValue

