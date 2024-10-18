const pow = require("./pow");

describe('hooks', function(){
  beforeAll(() => console.log('before all tests'));

  afterAll(() => console.log('after all tests'));

  beforeEach(()=>console.log('before each test'));
  
  afterEach(()=>console.log('after each test'))

  test('1 to the power of 2 is equal 1', ()=>{
    expect(pow(1, 2)).toBe(1)
  })

  // test('1 to the power of 2 is equal 1', ()=>{
  //   expect(pow(1, 2)).toBe(2)
  // }) //failed
  
  test('2 to the power of 2 is equal 4', ()=>{
    expect(pow(2, 2)).toBe(4)
  })
})