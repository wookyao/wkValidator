import mthTypes from "./mthTypes";

export function pipe2Rule(pipe) {
  if (!pipe) return [];
  let pipeList = pipe.split("|");

  let ret = [];

  pipeList.map((item) => {
    let arrSplit = item.split("--");
    let mth = String(arrSplit[0]).trim();
    if (mthTypes.hasOwnProperty(mth)) {
      ret.push({
        method: mthTypes[mth],
        params: getParams8Pipe(arrSplit),
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

export default function rule2methods(rule) {
  if (typeof rule === "string") {
    return pipe2Rule(rule);
  } else {
    let ret = [];
    Object.keys(rule).map((key) => {
      let value = rule[key];
      if (mthTypes.hasOwnProperty(key)) {
        ret.push({
          method: mthTypes[key],
          params: typeof value === "number" ? [value] : [],
        });
      }
    });
    return ret;
  }
}
