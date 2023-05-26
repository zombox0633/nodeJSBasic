//ex12.2
//Write File
//บันทึกข้อมูล request ได้แก่ วันที่, method, url ลง ใน .log

import http from "http";
import dotenv from "dotenv";
import fs from "fs";
// fs ใช้สำหรับจัดการไฟล์และระบบไฟล์ (File System) ซึ่งมีฟังก์ชันและเมธอดต่างๆ ที่สามารถใช้ในการอ่านไฟล์ เขียนไฟล์ ลบไฟล์ และดูรายละเอียดเกี่ยวกับไฟล์และโฟลเดอร์ต่างๆ ในระบบไฟล์ของเครื่องหรือเซิร์ฟเวอร์ที่ Node.js กำลังทำงานอยู่

dotenv.config();
const { APP_PORT } = process.env;

const server = http.createServer((request, response) => {
  const { method, url } = request;

  //เขียน Content ลงไฟล์.log
  // fs.writeFileSync("request.log", "content เฉยๆ");
  //                 ชื่อไฟล์ที่สร้าง    ข้อมูล
  // node testWriteFile.js เสร็จเข้าเว็บจะทำการสร้างไฟล์พร้อมข้อมูลมาให้

  const logContent = `${new Date} : ${method} : ${url}\n` //ใส่ \n เพื่อให้ตัวต่อไปขึ้นบันทรรดใหม่

  //เมือทำการ run อีกรอบจะทำการบันทึกทับข้อมูลเก่า
  // fs.writeFileSync("request.log", logContent);

  //แบบด้านล่างจะทำการบันทึกโดยไม่บันทึกทับข้อมูลเก่า
  fs.writeFileSync("request.log", logContent,{flag: "a+"});

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=UTF-8");
  response.end('Write File');
});

server.listen(APP_PORT, () => {
  console.log("Server is start : " + APP_PORT);
});
