//ex 9
//process.argv เป็นอาร์เรย์ที่เก็บค่าของอาร์กิวเมนต์ทั้งหมดที่ถูกส่งเข้ามา เริ่มต้นจากตำแหน่งที่ 2 ของอาร์เรย์ (ตำแหน่งแรกคือเสมอคือเส้นทางของโปรแกรม Node.js ที่ถูกเรียกใช้)

//แบบแรก
//เมื่อคำสั่งใน Terminal  คือ node process.js abc 1 2 3
//                       คำสั่ง   ชื่อไฟล์   ข้อมูลที่ต้องการเมื่อพิมเสร็จให้ทำการเว้นวรรคเพื่อใชส่ข้อมูลตัวต่อไปตามด้ามบน

// console.log(process.argv);

//console.log(process.argv); จะทำการแสดงข้อมูลที่ผู้ใช้งานกรอกมาในรูปแบบ Array ตามด้านล่าง
//[
//'D:\\Program Files\\nodejs\\node.exe',
//'C:\\Users\\Zombox\\Desktop\\project\\Newproject\\node.js\\nodeJsBasic\\process.js',
//'abc',
//'1',
//'2',
//'3'
//]

//แต่ถ้าไม่ใส่ข้อมูลมาตัว console.log(process.argv); จะแสดง ['D:\\Program Files\\nodejs\\node.exe'(น่าจะเป็นที่อยู่ของ node), ไฟล์ที่เรียกใช้งาน ]

//ทำการตัดข้อมูลที่ไม่จำเป็นออกโดยใช้ .slice(start, end)
// const args = process.argv.slice(2);
// console.log(args);
//ผลลัพธ์ [ 'abc', '1', '2', '3' ]

//แสดงเพราะตำแหน่งที่ต้องการคือ
// console.log(process.argv[2]);
//ผลลัพธ์  abc


//เมื่อคำสั่งใน Terminal  คือ  node process.js tri 5 4
// const args = process.argv.slice(2);
// const [s, w, h] = args;

function GetTriangleArea(width, height) {
  return (1 / 2) * width * height;
}

function GetRectangleArea(width, height) {
  return width * height;
}

// let area = 0;
// if (s === "tri") {
//   area = GetTriangleArea(Number(w), Number(h));
// } else if (s === "rect") {
//   area = GetRectangleArea(Number(w), Number(h));
// }

// console.log(area)
//output  10 ได้จาก [s = tri, w = 5, h = 4] --> ตรวจ s === อะไร และนำค่า w,h ไปใส่ GetTriangleArea ที่รับ number --> (1 / 2) * 5 * 4 = 10
//*การส่งข้อมูลแบบ node process.js tri 5 4 จะไม่ปลอดภัยและอาจเกิดข้อผิดพลาดได้ง่ายจึงจะใช้ตามแบบที่สอง


//แบบสอง
//ลง npm i minimist และ require หรือ import ก็ได้
import minimist from "minimist";

function PlusNum(f, s) {
  return f + s;
}

function ReduceNum(f, s) {
  return f - s;
}

const args = process.argv.slice(2);
const cleanArgs = minimist(args); //การใช้งาน minimist
const { c, f, s } = cleanArgs; //การกำหนดค่าเพื่อจะได้ให้การรับและส่งจะได้ตรงกัน

//node process.js --c=plus --f=2 --s=3
// --ตัวแปร = ค่าที่ต้องการ    *เป็นการส่งของมูลในรูปแบบของ minimist ซึ่งปลอดภัยกว่าแบบที่หนึ่งเพราะเป็นการระบุบทั้งต้นทางและปลายทางในการป้องกันความผิดพลาดของผู้กรองข้อมูล

let answer = 0;

if (c === "plus") {
  answer = PlusNum(Number(f), Number(s));
} else if (c == "reduce") {
  answer = ReduceNum(Number(f), Number(s));
}
// console.log(answer)
//output 5



//ex 10
//process.env เป็นตัวแปรที่เก็บข้อมูลเกี่ยวกับสภาพแวดล้อม (environment) ที่โปรแกรม Node.js กำลังทำงานอยู่ โดยอาจเป็นตัวแปรแวดล้อมที่ถูกตั้งค่าจากระบบปฏิบัติการหรือตัวแปรที่ถูกกำหนดโดยผู้ใช้งาน.

//ตัวอย่างการเก็บข้อมูล mysql
//const dbSting = "mysql://root:pass1234@127.0.0.1:3306/mydb99"
//  ตัวแปรที่เก็บค่า            ชื่อ   รหัส     Hostname   port  ชื่อDB
//แต่การใช้แบบนี้อาจเกิดข้อผิดพลาดได้

// console.log(process.env)
//จะแสดงผลลัพธ์ที่เกี่ยวข้องกับตัวแปรแวดล้อมทั้งหมดที่ถูกกำหนดให้ในสภาพแวดล้อมของระบบปฏิบัติการหรือผู้ใช้งาน ผลลัพธ์จะเป็นอ็อบเจกต์ที่ประกอบด้วยคู่ key-value ซึ่งแทนค่าของตัวแปรแวดล้อมนั้นๆ
//เช่น {
//...
//USERNAME: 'Zombox',
//OS: 'Windows',
//...
//} สึ่งเป็นตัวแปรแวดล้อมของเครื่องหรือสภาพแวดล้อมของระบบปฏิบัติการหรือผู้ใช้งาน

//การเพิ่มข้อมูลเข้าไปใน environment จะต้องทำแบบนี้ ตัวอย่าง  MYSQL_PORT=555 MYSQL_DB=99 node process.js
//     ชื่อตัวแปรและค่าที่ต้องการจะเพิ่มเข้า env ต้องตัวพิมใหญ่  ตัวที่1ที่ต้องการเพิ่ม     ตัวที่2  คำสั่ง   ไฟล์ของโค้ดนี้

//การเรียกใช้งานค่าใน env
//const {MYSQL_PORT,MYSQL_DB} = process.env

//การนำค่าไปใช้ในสิ่งที่ต้องการ
//const dbSting = `mysql://root:pass1234@127.0.0.1:${MY_SQL_PORT}/${MY_DB=99}`
//วิธีสามารถป้องกัน human error ได้บางส่วน

//console.log(dbSting)
//output -> mysql://root:pass1234@127.0.0.1:3306/mydb99


//หรือจะสร้างไฟล์ .env ไว้สำหรับเก็บข้อมูล
//npm i dotenv
//ใช้สำหรับการโหลดตัวแปรสภาพแวดล้อม (environment variables) จากไฟล์ .env ในโปรเจคของคุณเข้าสู่ตัวแปรสภาพแวดล้อมใน Node.js โดยใช้วิธีการกำหนดค่าที่ง่ายและเป็นรูปแบบของ key-value pairs (คีย์-ค่า) ในไฟล์ .env ที่คุณสร้างขึ้นเอง

//การเรียกใช้งานไฟล์ .env
//import หรือ require('dotenv').config

import dotenv from 'dotenv';
dotenv.config(); //จะใช้ได้ก็ต่อเมื่อลง npm i dotenv นะจะทำให้ใช้ค่าใน env ได้

const {MYSQL_USERNAME,MYSQL_PASSWORD,MYSQL_HOSTNAME,MYSQL_POST,MYSQL_DB} = process.env;
const dbSting = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_POST}/${MYSQL_DB}`;
console.log(dbSting);


