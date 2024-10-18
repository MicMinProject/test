const express = require("express");
const mongoose = require("mongoose");
const request = require("supertest"); //superagent(e.g insomnia)
const {router} = require("./routes/index.js");

const app = new express();
app.use(express.json())
app.use("/", router);
require("dotenv").config();

beforeAll(async ()=>{
 await mongoose.connect(process.env.DB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
})

describe("test routes", ()=>{
  test("does /hello/Thomas GET works", async () => {
    const res = await request(app).get("/hello/Thomas");
    
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.status).toBe(200);
    expect(res.text).toBe("hello Thomas")
  })

  test("does /hello GET works", async () => {
    const res = await request(app).get("/hello");
    
    expect(res.header["content-type"]).toBe("text/html; charset=utf-8");
    expect(res.status).toBe(200);
    expect(res.text).toBe("Hello!")
  })

  test("does user create works", async()=>{
    const res = await request(app).post('/users').send({
      "username": "Mailo",
      "email": "mailo.softy@gmail.com"
    })
    .set("Content-Type", "Application/json")
    .set("Accept", "Application/json")

    expect(res.status).toBe(201);
    expect(res.body).toEqual({
      message: "created"
    })
  })

  test('does find user works', async()=>{
    const res = await request(app).get('/users')
    expect(res.status).toEqual(200);
    expect(res.body.length).toBe(1); //we have retrieved one user
  })

  test("does delete created users work", async()=>{
    const res = await request(app).delete('/users');
    expect(res.status).toBe(204);
  })
})
afterAll(async ()=>{
  await mongoose.connection.close()
})