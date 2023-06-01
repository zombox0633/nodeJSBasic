//ex14
//stream
//1.stream prototype 101
//2.stream file cloning
//3.stream file to http server response

// ไม่ต้องใช้ stream แต่ fs แทนก็ได้
// import stream from "stream";

// const readStream = new stream.Readable({
//   read() {},
// });

// const writeStream = new stream.Writable({
//   write(chunk, encoding, callback) {
//     console.log(chunk.toString());
//     callback();
//   },
// });

// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });
// readStream.on("end", () => {
//   writeStream.end();
//   console.log("end");
// });

// pipe ใช้สำหรับเชื่อมต่อ ระหว่าง readStream กับ writeStream ในรูปแบบของการส่งข้อมูลจากอ่านไฟล์ (readStream) ไปยังเขียนไฟล์ (writeStream) อัตโนมัติ
// readStream.pipe(writeStream)
// readStream.push("test1");
// readStream.push("test2");

import fs from "fs";
import path from "path";
import http from "http";

//เป็นการอ่านและเขียนไฟล์ text
//เพื่ออ่านไฟล์ "home.txt" จากโฟลเดอร์ "files"
// const readStream = fs.createReadStream(path.join("files", "home.txt"), "utf-8");

//เขียนข้อมูลที่อ่านได้ลงในไฟล์ "cloned-home.txt" ในโฟลเดอร์เดียวกัน
//                                                            จะทำการ cloned home.txt
// const writeStream = fs.createWriteStream(path.join("files", "cloned-home.txt"),"utf-8");

//ใช้การสร้าง Readable stream และ Writable stream พร้อมกับใช้เมธอด pipe() เพื่อส่งข้อมูลจาก Readable stream ไปยัง Writable stream.
// readStream.pipe(writeStream);

//เป็นอีเวนต์แยกจากอีเวนต์หลักที่เกี่ยวข้องกับการอ่านและเขียนไฟล์ cloned-home.txt และมีการแสดงผลผ่าน console.log(chunk)
// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });

//เป็นเพิ่มข้อมูล text ลงใน cloned-home.txt อยากเดียว แต่เป็นการเพิ่มข้อมูลด้านบนของไฟล์
// readStream.push("\n\ntest-pathData-in-readStream\n\n");

//แสดงการ video Stream ผ่าน web server
const server = http.createServer(async (request, response) => {
  response.statusCode = 200;
  //กำหนดการอ่านข้อมูลเป็น video/mp4
  response.setHeader("Content-Type", "video/mp4");

  // คำสั่งจะอ่านและโหลดไฟล์ video.mp4 ลงในหน่วยความจำ (memory) ของเซิร์ฟเวอร์ทั้งหมดก่อนที่จะส่งให้กับ client ซึ่งอาจทำให้ใช้งานหน่วยความจำได้มากขึ้นเมื่อมีการร้องขอไฟล์ขนาดใหญ่หรือจำนวนผู้ใช้งานมากพร้อมกัน
  // const videoFile = await fs.promises.readFile(path.join("files", "ตัวอย่าง.mp4"));
  // response.end(videoFile);

  const readStream = fs.createReadStream(path.join("files", "a.mp4"));
  readStream.pipe(response);

  //การใช้ pipe() ในการส่งข้อมูลจาก Readable stream (ในที่นี้คือ readStream) ไปยัง Writable stream (ในที่นี้คือ response) โดยที่คุณไม่ต้องเขียน response.write() และ response.end() แยกต่างหาก 
  //การใช้ pipe() จะทำงานเพื่อคัดลอกข้อมูลอัตโนมัติจาก Readable stream ไปยัง Writable stream จนกว่าข้อมูลจะถูกส่งสำเร็จหรือเกิดข้อผิดพลาดขึ้น เพื่อให้การส่งข้อมูลเป็นไปอย่างมีประสิทธิภาพและป้องกันปัญหาเกี่ยวกับการใช้งานหน่วยความจำเกินไปในกรณีของไฟล์ขนาดใหญ่ นอกจากนี้ pipe() ยังจัดการเรื่องการควบคุมการส่งข้อมูลเองอัตโนมัติเช่นการควบคุมอัตราการส่ง (throttling) เพื่อให้เซิร์ฟเวอร์และไคลเอ็นต์ทำงานร่วมกันได้อย่างสมบูรณ์และปราศจากปัญหา.
  // response.write();
  // response.end;
});

server.listen(8888, () => {
  console.log("Server is start");
});
