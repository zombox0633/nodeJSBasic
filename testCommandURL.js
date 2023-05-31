import http from "http";

//ใช้ในการจัดการและวิเคราะห์ URL ที่เกี่ยวข้องกับ HTTP request เช่น URL ของหน้าเว็บที่ client ร้องขอมา เพื่อให้เราสามารถเข้าถึงส่วนประกอบของ URL ได้ง่ายขึ้น
import URL from "url";

let adr = "http://localhost:8000/default.html?year=2023&month=12";
let q = URL.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// let qData = q.query
// console.log(qData.month);

const server = http.createServer((request, response) => {
  const { method, url } = request;
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=UTF-8");

  //การนำข้อมูลใน URL มาแสดงในหน้าเว็บ

  //url.parse() เป็นฟังก์ชันในโมดูล url ใน Node.js ซึ่งใช้สำหรับแปลง URL ให้อยู่ในรูปแบบของอ็อบเจกต์ URL ที่มีสมาชิกแยกต่างหาก เพื่อให้ง่ายต่อการดำเนินการกับส่วนต่าง ๆ ของ URL
  //การใช้ url.parse() ช่วยในการแยกส่วนของ URL ออกเป็นส่วนย่อย ๆ ที่สามารถเข้าถึงได้แยกต่าง เช่น protocol, hostname, port, path, query, hash
  //นอกจากนี้ยังมีคุณสมบัติเพิ่มเติมที่สามารถกำหนดให้แปลง URL ให้เป็นอ็อบเจกต์ URL แบบเต็ม (full URL object) หรือเป็นสตริง URL แบบซ้อนซ้อน (nested URL string) ได้ตามต้องการ

  //true ที่ถูกส่งไปยัง URL.parse() เป็นตัวบอกว่าเราต้องการแปลงส่วนของ query string ใน URL ให้กลายเป็นอ็อบเจกต์ของค่าพารามิเตอร์ แทนที่จะเป็นสตริงธรรมดา

  //.query เป็นสมาชิกของอ็อบเจกต์ที่ถูกสร้างจากการใช้ URL.parse(url, true) โดยอ็อบเจกต์ที่สร้างขึ้นจะเก็บค่าของ query string ภายใน URL ที่ถูกแปลงเป็นอ็อบเจกต์
  let q = URL.parse(url, true).query;
  let txt = q.year + " " + q.month;
  //                                                             ตัวแปร1    ตัวแปร2
  //การใช้งาน txt ให้แสดงข้อมูลในเว็บได้ต้องพิมใน http://localhost:8000/?year=2023&month=12
  response.write(txt);
   response.end();
});

server.listen(8000, () => {
  console.log("Server is start");
});
