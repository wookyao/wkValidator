import { getType, isJson} from './types'


export default function isEqual(source, target) {
  let sourceType = getType(source), targetType = getType(target);
  if(sourceType != targetType) return false;


  if(sourceType === 'array') {
    let sourceLength = source.length
    if(sourceLength !== target.length) return false;

    for(let i =0; i < sourceLength; i++) {
      if(!isEqual(source[i], target[i])) {
        return false;
        break;
      }
    }
  } else if(isJson(source)) {
    let keys4Source = Object.keys(source).sort();
    let keys4Target = Object.keys(target).sort()
    
    if(!isEqual(keys4Source, keys4Target)) return false;
    for (let i = 0, iLength = keys4Source.length; i < iLength; i++) {
      let k = keys4Source[i];
      if(!isEqual(source[k], target[k])) {
        return false;
      }
    }
  } else {
    return source === target
  }


  return true
}

