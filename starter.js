//ex1
// console.log("test");

//การทดลอง การใช้งาน การ run Terminal จะต้องพิม node ชื่อไฟล์ที่ต้องการ run และ . นามสกุลไฟล์ -->(node test.js)
// Node.js จะ run ข้อมูลนี้ในเครื่องเท่านั้น


//ex2
const a = 1;
const b = 3;
const c = a - b;
// console.log(c);

//การทำงานทุกอย่างเหมือน javaScript แต่สิ่งที่ควรระวังมีบางคำสั่งที่ใช้งานบนเว็บได้แต่ใช้ใน Node.js เช่น console.log(document); ,window  หรือเกี่ยวกับ DOM ทั้งหมดไม่สามารถใช้งานได้ในส่วนของ Node.js เนื่องจากรันบนเบราว์เซอร์ ดังนั้น เราไม่สามารถเข้าถึงและใช้งาน DOM หรือเมธอดที่เกี่ยวข้องกับเว็บได้
//การใช้งาน Node.js โดยตรงจะใช้งานในเครื่องเราไม่ได้ถูกใช้งานกับหน้าเว็บ


//ex3
//npm init (initialize เริ่มต้น) ซึ่งหมายถึงการเริ่มต้นการสร้างไฟล์ package.json ในโปรเจค Node.js
//ลง npm i @types/node เพิ่มค้นหา autocomplete คำสั่งของ node 

// npm init เป็นคำสั่งที่ใช้สร้างไฟล์หรือสร้างไฟล์ package.json ในโปรเจค Node.js ไฟล์ package.json เป็นไฟล์ที่ใช้ในการจัดเก็บข้อมูลเกี่ยวกับโปรเจคและแพคเกจที่ใช้ในโปรเจคนั้น ๆ
//ไฟล์ package.json สร้างขึ้นมาเพื่อให้คุณสามารถระบุและจัดการแพคเกจที่ใช้ในโปรเจคของคุณได้อย่างถูกต้อง นอกจากนี้ยังมีฟังก์ชันอื่น ๆ ที่มีอยู่ในไฟล์ package.json เช่น การกำหนดสคริปต์การรัน (scripts) เพื่อให้คุณสามารถรันคำสั่งต่าง ๆ เช่น npm start หรือ npm test ได้โดยง่าย

//npm (Node Package Manager)
//เป็นตัวจัดการแพคเกจและโมดูลใน Node.js โดย npm มาพร้อมกับติดตั้ง Node.js และด้วย npm คุณสามารถติดตั้งแพคเกจที่มีอยู่ในระบบเก็บข้อมูลของ npm (npm registry) หรือจัดการแพคเกจที่คุณสร้างขึ้นเอง

//npx (npm execute  หรือ "npm package runner" )
//ซึ่งหมายถึงเครื่องมือที่ใช้ในการรันแพคเกจหรือสคริปต์ที่อยู่ในแพคเกจชั่วคราว โดยไม่ต้องติดตั้งแพคเกจเหล่านั้นในเครื่องของคุณก่อน


//ex4
//npm install express  ใช้สำหรับติดตั้งแพคเกจ Express ในโปรเจค Node.js ของคุณ ซึ่ง Express เป็นเฟรมเวิร์กเว็บในภาษา JavaScript ที่ช่วยให้คุณสร้างและจัดการเว็บแอปพลิเคชันได้อย่างง่าย
//จะได้ไฟล์ package-lock.json มาเป็นไฟล์บันทึกรายละเอียดของ package ที่ได้ติดตั้งลงไปแล้ว
//และตัวโฟลเดอร์ node_modules ขึ้นมา เป็นตัวจัดเก็บ package ในที่ติดตั้ง VSCode

//ex4.1
const express = require("express"); //ใช้คำสั่ง require เพื่อให้โปรแกรมของคุณสามารถเข้าถึงและใช้งาน Express ได้
const app = express();
const port = 3000; //กำหนดพอร์ต (port) ที่เซิร์ฟเวอร์ของคุณจะทำงาน

//"Request" (คำขอ) คือข้อมูลที่ส่งจากผู้ใช้หรือต้นทางอื่นๆ ไปยังเซิร์ฟเวอร์ เพื่อขอข้อมูลหรือดำเนินการใดๆ เช่น การเรียกหน้าเว็บ การส่งค่าผ่านแบบฟอร์ม หรือการเรียกใช้ API เป็นต้น
//Response" (การตอบสนอง) คือข้อมูลที่เซิร์ฟเวอร์ส่งกลับมายังผู้ใช้หรือที่ปลายทาง ซึ่งเป็นผลลัพธ์จากการประมวลผลคำขอ (request) หรือการดำเนินการที่ต้องการ ส่วนใหญ่จะเป็นข้อมูลหรือผลลัพธ์ที่สนับสนุนคำขอเดิม เช่น ข้อความ, ไฟล์, ข้อมูล JSON, หรือข้อมูลอื่น ๆ ที่ถูกส่งกลับ

//ใช้เมธอด get ของอินสแตนซ์ app เพื่อกำหนดการตอบสนองเมื่อมีคำขอ GET HTTP ที่เส้นทางหลัก ("/") ถูกเรียกใช้งาน

app.get("/", (req, res) => { 
  
  res.send("Hello World!"); 
});

//(req, res) คือพารามิเตอร์ที่ถูกส่งไปยังฟังก์ชันของเราในการตอบสนองกับคำขอ (request) ที่เข้ามาถึงเซิร์ฟเวอร์ของเราและส่งคำตอบ (response) กลับไปยังผู้ใช้งาน
//req คืออ็อบเจ็กต์ (Object) ที่แทนคำขอ (request) ที่ถูกส่งมายังเซิร์ฟเวอร์ของเรา
//req มีข้อมูลและคุณสมบัติต่าง ๆ เช่น URL ที่ขอเข้ามา, พารามิเตอร์ที่ถูกส่งไปกับคำขอ, ส่วนข้อมูลที่ถูกส่งมาในรูปแบบ JSON หรือผู้ใช้งานที่ส่งค่าผ่านฟอร์ม
//res มีเมธอดและคุณสมบัติที่ใช้ในการกำหนดสถานะการตอบสนอง (status) เช่น res.send() เพื่อส่งข้อความหรือข้อมูลกลับไปยังผู้ใช้งาน นอกจากนี้ยังมีเมธอดอื่น ๆ เช่น res.json() เพื่อส่งข้อมูลในรูปแบบ JSON กลับไปยังผู้ใช้งาน

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`);
});

//เริ่มเซิร์ฟเวอร์ของคุณโดยใช้เมธอด listen ของอินสแตนซ์ app และกำหนดให้ฟังก์ชันถูกเรียกเมื่อเซิร์ฟเวอร์เริ่มต้นฟังบนพอร์ตที่ระบุ ในที่นี้จะแสดงข้อความ "Example app listening on port 3000" ในคอนโซล
//http://localhost:3000/ เพื่อตรวจสอบผลลัพธ์


//ex5
//การติดตั้งแบบ global 
//แพคเกจที่ติดตั้งแบบ -g จะสามารถเรียกใช้ได้จากทุกที่ในระบบ ไม่ว่าจะเป็นในโปรเจคเฉพาะหรือโปรเจคอื่น ๆ ที่คุณทำงานอยู่ และ สามารถใช้สำหรับเครื่องมือหรือแพคเกจที่ต้องการเรียกใช้ตลอดเวลา หรือสำหรับการพัฒนาแอปพลิเคชันในระดับระบบ

//npm install -g ต่อด้วยตัวด้านล่างไม่แบบใส่ + (-g ย่อมาจาก global)

//+ createe-react-app --> สร้างโฟลเดอร์โปรเจ็ค React
//+ @vue/cli --> สร้างโฟลเดอร์โปรเจ็ค vue.js
//+ nodemon --> รัน NodeJs ใหม่ ถ้ามีการเปลี่ยนแปลงบนไฟล์ของเรา