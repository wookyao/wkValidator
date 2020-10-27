const expect = require('chai').expect
const WkValidator = require('../lib/wk_validator.min');
const wv = new WkValidator()

describe('Testing validator', () => {

  it('wv.validator', () => {
    expect(wv.validator('isEmpty')).to.be.ok
    expect(wv.validator('notEmpty')).to.not.be.ok
    expect(wv.validator('mobile', '15256936')).to.not.be.ok
    expect(wv.validator('email', 'wookyao@qq.com')).to.be.ok
  
    expect(wv.validator('date', '')).to.not.be.ok
    expect(wv.validator('date', '2020/10/02')).to.be.ok

  })

  it('wv.rules.check', () => {
    const data = {
      username: 'wookyao',
      password: '123456',
      age: 18,
      confirmPwd: '123456789'
    }

    expect(wv.rules({
      username: {
        require: true,
        maxLength: 10
      },
      password: {
        require: true,
        minLength: 6
      }
    }).check(data)).to.be.ok
    

    expect(wv.rules({
      username: {
        minLength: 2,
        maxLength: 12
      },
      password: {
        minLength: 6,
        maxLength: 32
      },
      age: {
        number: true,
        min: 16
      },
      confirmPwd: {
        equalTo: '$password'
      }
    }).check(data)).to.not.be.ok

  })

  it('wv.validator', () => {

    expect(wv.validator('required')).to.not.be.ok
    expect(wv.validator('required', null)).to.not.be.ok
    expect(wv.validator('isEmpty', null)).to.be.ok

    expect(wv.validator('contains', '123456', '123')).to.be.ok
    expect(wv.validator('notContains', '123456', '123')).to.not.be.ok

    expect(wv.validator('number', 123)).to.be.ok
    expect(wv.validator('number', '123')).to.not.be.ok
    expect(wv.validator('string', '123')).to.be.ok
    expect(wv.validator('string', 123)).to.not.be.ok
    expect(wv.validator('array', [123])).to.be.ok
    expect(wv.validator('array', 1)).to.not.be.ok
    expect(wv.validator('json', {name: 'wo'})).to.be.ok


    expect(wv.validator('idcard', '340322199401125478')).to.be.ok
    expect(wv.validator('email', '125@qq.com')).to.be.ok
    expect(wv.validator('url', 'http://www.baidu.com')).to.be.ok
    expect(wv.validator('url', 'www.baidu.com')).to.not.be.ok


  })

  it('wv.isEqualTo', () => {
    let source = [1,'2',true, {username: 'wook'}]
    let target = [1,'2',true, {username: 'wook', age: 15}]
    expect(wv.validator('equalTo', source, target)).to.not.be.ok
    expect(wv.validator('equalTo', {
      username: 'wook',
      age: 18,
      class: 5,
      skills: ['js', 'css', 'html'],
      info: {
        name: 'yao'
      }
    }, {
      username: 'wook',
      age: 18,
      class: 5,
      skills: ['js', 'css', 'html'],
      info: {
        name: 'yao'
      }
    })).to.be.ok
  })
});