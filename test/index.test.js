const expect = require('chai').expect
const wkValidator = require('../lib/wk_validator.min');
const wv = new wkValidator()

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
      password: '123456'
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


  })

});