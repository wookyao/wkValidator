import mthTypes from "./mthTypes";

export function pipe2Rule(pipe) {
  if (!pipe) return [];
  let pipeList = pipe.split("|");

  let ret = [];

  pipeList.map((item) => {
    let arrSplit = item.split("--");
    let mth = String(arrSplit[0]).trim();
    if (mthTypes.hasOwnProperty(mth)) {
      let type = mthTypes[mth];
      ret.push({
        method: type.handler,
        params: getParams8Pipe(arrSplit),
        message: type.message,
      });
    }
  });

  return ret;
}

function getParams8Pipe(arr) {
  return arr.slice(1).map((item) => {
    let curItem = String(item).trim();
    return isNaN(curItem) ? curItem : Number(curItem);
  });
}

function getMessage() {

}

export default function rule2methods(rule, tips) {
  if (typeof rule === "string") {
    return pipe2Rule(rule);
  } else {
    let ret = [];
    Object.keys(rule).map((key) => {
      let value = rule[key];
      if (mthTypes.hasOwnProperty(key)) {
        let type = mthTypes[key];
        ret.push({
          method: type.handler,
          params: typeof value === "number" ? [value] : [],
          message: type.message,
          customerTips: tips[key] || ''
        });
      }
    });
    return ret;
  }
}
