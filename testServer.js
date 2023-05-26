//ex11
//HTTP Server

//การสร้าง Server แบบง่าย

//การรียกแบบปกติ
// const http = require('http')

//แบบ ES Module
import http from "http";
import dotenv from "dotenv";

dotenv.config();
// APP_POST เป็น post สำหรับค้นหา client side
const { APP_PORT } = process.env; 

//server
const server = http.createServer((request, response) => {
  const { method, url } = request;

  let content = "";
  if (method === "GET" && url === "/") {
    content = "<h1>homepage</h1>";
  } else if (method === "GET" && url === "/about") {
    content = "<h1>about</h1>";
  }

  //ส่วนด้านล่างนี้การสร้างแบบพื้นฐานการใช้งาน server
  response.statusCode = 200; // ถูกใช้เพื่อกำหนดสถานะของการตอบกลับจากเซิร์ฟเวอร์ HTTP ให้เป็นสถานะที่สำเร็จ (200 OK) เมื่อมีการร้องขอ (request) เข้ามาที่เซิร์ฟเวอร์
  response.setHeader("Content-Type", "text/html; charset=UTF-8"); // กำหนดประเภทของข้อมูลเป็น plain text และ charset=UTF-8 ให้สามารถรองรับภาษาไทยได้
  response.write(content); //ส่งข้อมูลในรูปแบบข้อความ สามารถใส่ข้อความไปตรงๆเลยก็ได้
  response.end(); // สิ้นสุดการตอบกลับของ server และสามารถส่งข้อความเฉยๆอย่างเดียวและ tag html ได้ด้วย แต่โดยปกติจะไม่ใส่ข้อความ
});

//client
//            port 
server.listen(APP_PORT , () => {
  // port สามารถใส่ตัวเลขไปตรงๆเลขได้แต่เขาไม่ทำกัน
  console.log("Server is start : " + APP_PORT );
});

//สามารถใช้ npm i nodemon ถ้าขี้เกี่ยจ node ไฟล์.js ใหม่เวลาแก้ไขข้อมูลในตัวนี้ มันจะตรวจการแก้ไขไฟล์และ run ใหม่ให้ auto
