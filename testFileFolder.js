//ex13.1
//File Folder
//3 วิธี => 1 Sync, 2 ASync(CallBack), 3 Promise Async await

import http from "http";
import fs, { promises } from "fs";
import path from "path";

//                              แบบ Promise
const server = http.createServer(async(request, response) => {
  const { method, url } = request;

  const date = new Date();
  const logContent = `${date.getTime()} : ${method} : ${url}\n`;
  console.log(`Start ${url}`);

  //แบบ Sync ข้อเสียแบบนี้คือจะทำงานแบบ 1 ต่อ 1 จะต้องทำของคนก่อนถึงจะทำของคนใหม่ได้ เช่น ถ้ามีลูกค้าเข้ามา 99 คน ลูกค้าคนที่ที่ 99 จะต้องรอ คนที่ 1 จนถึงคนที่ 98
  // try {
  //   //fs.statSync(Folder) ใช้สำหรับการตรวจสอบสถานะของไฟล์หรือโฟลเดอร์ในระบบไฟล์ด้วย Node.js โดยมีการเรียกใช้งานแบบซิงโครนัส (synchronous) ฟังก์ชันนี้จะส่งคืนออบเจกต์
  //   fs.statSync("logs");
  // } catch (error) {
  //   // ใช้สำหรับสร้างโฟลเดอร์ใหม่ในระบบไฟล์ด้วย Node.js โดยมีการเรียกใช้งานแบบซิงโครนัส (synchronous) ซึ่งจะบล็อกการทำงานของโปรแกรมจนกว่าการสร้างโฟลเดอร์จะเสร็จสิ้น โค้ดจะหยุดการทำงานของโปรแกรมในขณะที่โฟลเดอร์ถูกสร้างขึ้น ฟังก์ชัน
  //   fs.mkdirSync("logs");
  // }
  // fs.writeFileSync(path.join('logs','request.log'), logContent, { flag: "a+" });
  //console.log(`Sync End ${url}`)

  //แบบ ASync(CallBack) ข้อเสีย การจัดการโค้ดที่ซับซ้อน, Callback Hell, ความยุ่งเหยิงในการจัดการสถานะ และถ้าผู้ใช้งานเข้าเว็บเป็นจำนวนมากอาจเกิดการผิดพลาดของการทำงานแต่ละคนซ้อนทับกันได้เพราะเป็น ASync
  //      path   err     stats
  // fs.stat("logs", (error, stats) => {
  //   if (error) {
  //     //        path     err(อย่าให้ชื่อซ้ำกับ stat)
  //     fs.mkdir("logs", (error1) => {
  //       //           path                               data        options       err(อย่าให้ชื่อซ้ำกับ stat,mkdir)
  //       fs.writeFile(path.join("logs", "request.js"), logContent, {flag: "a+",}, (error2) => {
  //         console.log(`ASync End1 ${url}`)
  //       });
  //     });
  //     return;
  //   }
  //   fs.writeFile(path.join("logs", "request.log"), logContent, {flag: "a+",}, (error2) => {
  //     console.log(`ASync End2 ${url}`)
  //   });
  // });

  //Promise Async await คือการเอาข้อดีของ Sync และ ASync มารวมกัน
  try {
    await promises.stat("logs");
  } catch (error) {
    try {
      await promises.mkdir("logs");
    } catch (error2) {
      console.log(error2);
    }
  }

  try {
    await promises.writeFile(path.join("logs", "request.log"), logContent, { flag: "a+" });
    console.log(`Promise End ${url}`);
  } catch (error) {
    console.log(error);
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/http; charset=UTF-8");
  response.end("test");
});

server.listen(8888, () => {
  console.log("Server is start");
});
