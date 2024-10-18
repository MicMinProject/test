const {hello, helloWorld} = require("./controllers/index.js");

describe('test routes controllers', ()=> {
  test('does helloWorld work', ()=>{
    const req ={};
    const res = {
      send: function (string) {
        this.text = string      }
    }

    helloWorld(req, res);
    expect(res.text).toBe('Hello!')
  })

  test('does hello work', ()=>{
    const req = {
      params: {name: "Bob"}
    }
    const res = {
      send: function (string) {
        this.text = string      }
    }

    hello(req, res);
    expect(res.text).toBe(`hello Bob`)
  })
  
  test('does hello with params=undefined work', ()=>{
    const req = {
      params: {name: undefined}
    }
    const res = {
      send: function (string) {
        this.text = string      }
    }

    hello(req, res);
    expect(res.text).toBe(`hello world`)
  })
})