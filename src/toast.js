function toast(field, msg, params) {
  let limit = "";
  params.map((item) => {
    if (!isNaN(item)) {
      limit += item;
    }
  });
  msg = msg.replace("$n", limit);
  let tips = `字段[${field}]${msg}`;

  let tipsNode = createElement(tips);

  render(tipsNode);
}

function createElement(message, tagName = "div") {
  let oDiv = document.createElement(tagName || "div");
  oDiv.style.cssText = `
    position: fixed;
    z-index: 999;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 16px;
    background: rgba(0, 0, 0, 0.86);
    color: #fff;
    font-size: 12px;
    line-height: 1;
    border-radius: 4px;
    letter-spacing: 0.1em;
  `;
  let textNode = document.createTextNode(message);
  oDiv.appendChild(textNode);

  return oDiv;
}

function render(node) {
  let timer = null;
  document.body.appendChild(node);
  clearTimeout(timer);
  timer = setTimeout(() => {
    document.body.removeChild(node);
    clearTimeout(timer);
    timer = null;
  }, 2000);
}

export default toast;
