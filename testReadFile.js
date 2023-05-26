//ex12.1
//Read File
//1. เอา Content จากไฟล์ home.txt มาลงเว็บ
//2. เอา Content จากไฟล์ home.md (MArkdown) มาลงเว็บ

import http from "http";
import dotenv from "dotenv";
import fs from "fs";
// fs ใช้สำหรับจัดการไฟล์และระบบไฟล์ (File System) ซึ่งมีฟังก์ชันและเมธอดต่างๆ ที่สามารถใช้ในการอ่านไฟล์ เขียนไฟล์ ลบไฟล์ และดูรายละเอียดเกี่ยวกับไฟล์และโฟลเดอร์ต่างๆ ในระบบไฟล์ของเครื่องหรือเซิร์ฟเวอร์ที่ Node.js กำลังทำงานอยู่

import path from "path";
//เพื่อจัดการเส้นทางและพาธของไฟล์หรือโฟลเดอร์ในระบบไฟล์ของเครื่องหรือเซิร์ฟเวอร์ที่ Node.js กำลังทำงานอยู่

//npm i marked
import { marked } from "marked";

//path.join() เป็นฟังก์ชันที่ใช้สำหรับรวมเส้นทางหรือพาธของไฟล์หรือโฟลเดอร์เข้าด้วยกันเพื่อสร้างเส้นทางแบบสมบูรณ์
//path.resolve() เป็นฟังก์ชันที่ใช้สำหรับแก้ไขเส้นทางหรือพาธของไฟล์หรือโฟลเดอร์เพื่อให้เป็นเส้นทางแบบสมบูรณ์ (absolute path)
//path.basename() เป็นฟังก์ชันที่ใช้สำหรับรับชื่อไฟล์หรือโฟลเดอร์จากเส้นทางหรือพาธ
//path.dirname() เป็นฟังก์ชันที่ใช้สำหรับรับเส้นทางหรือพาธของโฟลเดอร์ที่บรรจุไฟล์หรือโฟลเดอร์ที่กำหนด
//path.extname() เป็นฟังก์ชันที่ใช้สำหรับรับส่วนขยายของไฟล์จากชื่อไฟล์ที่กำหนด

dotenv.config();
const { APP_PORT } = process.env;

const server = http.createServer((request, response) => {
  const { method, url } = request;

  let content = "";
  if (method === "GET" && url === "/") {
    // content = fs.readFile('home.txt',(error,data)=>{})  //fs.readFile วิธีนี้จะต้องเอาเหล่า response ไปใส่ใน {} ถึงจะทำงาน
    try {
      //                       การจัดการเส้นทาง โฟลเดอร์  ไฟล์ที่ต้องการ
      // content = fs.readFileSync(path.resolve("files","home.txt"), "utf-8");

      const markdown = fs.readFileSync(
        path.resolve("files", "home.md"),
        "utf-8"
      );

      content = marked(markdown);
      //ถ้าไม่ทำการแปลโดย marked จะแสดงเหมือนไฟล์ .txt
    } catch (error) {
      console.error(error);
    }
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=UTF-8");
  response.write(content);
  response.end();
});

server.listen(APP_PORT, () => {
  console.log("Server is start : " + APP_PORT);
});
