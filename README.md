# wkValiddator

支持多种方式使用的表单验证工具，可以使用在浏览器，小程序等平台。

## 安装

```bash
  npm i -S @wk/validator
  or
  yarn add @wk/validator
```

## 使用

```javascript
  import WkValidator from '@wk/validator';

  const wv = new WkValidator();

  new Vue({
    data() {
      return {
        form: {
          username: 'admin',
          password: '123456'
        }
      }
    },

    mthods: {
      doSubmit() {
        if(!this._validator()) return

        ...TODO
      },
      _validator() {
        let ret = wv.rules({
          username: 'required|minLength --2',
          password: 'required|minLength --6|maxLength --16'
        }).check(this.form);

        return ret;

      }
    }
  })

```

## API

- new WkValidator
  - .setToast(toast: Function)
    设置错误提示方式
  - .rules(rule: Object|String)
    初始化验证规则
  - .check(data: Object)
    验证数据并返回验证结果**.check()要与.rules()一起使用**
  - .validator(rule: String, ...args)
    单独验证字段

<br />
<br />

<h1 id="default-rules">默认规则</h1>

| 规则                    | 描述                      | 默认提示                   |
| ----------------------- | ------------------------- | -------------------------- |
| `required: true`        | 必填                      | 此字段必填                 |
| `min: 6`                | 大于 6 的数字             | 请输入大于 `6` 的数字      |
| `max: 16`               | 小于 16 的数字            | 请输入小于 `16` 的数字     |
| `max: 16`               | 小于 16 的数字            | 请输入小于 `16` 的数字     |
| `isEmpty: true`         | 必须为空                  | 不能输入任何值             |
| `notEmpty: true`        | 不能为空                  | 不存在                     |
| `length: 10`            | 长度为 10 的字符串        | 请输入 `10` 个字符         |
| `minLength: 10`         | 长度大于 10 的字符串      | 最少要输入 `10` 个字符     |
| `maxLength: 10`         | 长度大于 10 的字符串      | 最多只能输入 `10` 个字符   |
| `contains: 'string'`    | 必须包含字符串 `'string'` | 必须包含 `'string'`        |
| `notContains: 'string'` | 不能包含字符串 `'string'` | 不能包含 `'string'`        |
| `number: any`           | 数据类型                  | 请输入数字                 |
| `string: any `          | 字符串类型                | 请输入字符串               |
| `array: any`            | 数组类型                  | 请输入数组                 |
| `json: any`             | JSON 对象                 | 请输入 json 对象           |
| `isInstance: 'string'`  | 验证数据类型              | 请输入 `'string'` 类型数据 |
| `idcard: true`          | 验证身份证                | 请输入有效的身份证         |
| `email: true`           | 验证电子邮件              | 请输入有效的电子邮件地址   |
| `url: true`             | 验证网址                  | 请输入有效的网址           |
| `tel: true`             | 验证座机号码              | 请输入座机号               |
| `mobile: true`          | 验证手机号码              | 请输入有效的手机号码       |
| `digits: true`          | 验证正整数                | 请输入正整数               |
| `integer: true`         | 验证整数                  | 只能输入整数数字           |
| `chinese: true`         | 验证汉字                  | 只能输入汉字               |
| `ipv4: true`            | 验证 ipv4                 | 不是有效的 IPV4 地址       |
| `ipv6: true`            | 验证 ipv6                 | 不是有效的 IPV6 地址       |
| `date: true`            | 验证是不是有效的日期格式  | 请输入有效的日期           |
| `equalTo: true`         | 是否一致                  | 两次输入不一致             |
| `notEqualTo: true`      | 是否不一致                | 两次输入不能一致           |

<br />
<br />

## #单独验证字段

```javascript
new WkValidator().validator((rule: string), (data: any), ...args);
```

### 参数说明

| 参数名  | 描述                               | 类型   |
| ------- | ---------------------------------- | ------ |
| rule    | 参考默认规则[详情](#default-rules) | string |
| data    | 要验证的对象                       | any    |
| ...args | 其他的值                           | any    |

### 示例

```javascript
import WkValidator from "@wk/validator";
const wv = new WkValidator();

let ret: Boolean = wv.validator("email", "125@qq.com");
wv.validator("equalTo", "123456", "12345678");
wv.validator("array", [12]);
wv.validator("required");
```

## #设置错误提示

```javascript
new WkValidator().setToast((toast: Function | any));

// 示例
wv.setToast(console.log);
```

## #rules 和 check 验证

```javascript
let ret: Boolean = wv.rules((ruleMaps: Object)).check((data: Object));
```

### 参数说明

| 参数名   | 描述                               | 类型   |
| -------- | ---------------------------------- | ------ |
| ruleMaps | 参考默认规则[详情](#default-rules) | Object |
| data     | 要验证的对象                       | Object |

### 示例

```javascript
import WkValidator from "@wk/validator";
const wv = new WkValidator();

const data = {
  username: "wookyao",
  password: "123456",
  age: 18,
  confirmPwd: "123456789",
};
wv.rules({
  username: {
    minLength: 2,
    maxLength: 12,
  },
  password: {
    minLength: 6,
    maxLength: 32,
  },
  age: {
    number: true,
    min: 16,
  },
  confirmPwd: {
    equalTo: "$password",
  },
}).check(data);
```
