import http from "http";
import fs from "fs";

//ใช้ในการจัดการและวิเคราะห์ URL ที่เกี่ยวข้องกับ HTTP request เช่น URL ของหน้าเว็บที่ client ร้องขอมา เพื่อให้เราสามารถเข้าถึงส่วนประกอบของ URL ได้ง่ายขึ้น
import URL from "url";

const server = http.createServer((request, response) => {
  const { method, url } = request;

  let q = URL.parse(url, true);
  //                                 ชื่อไฟล์
  //การค้นหา http://localhost:8000/about.html 
  let filename = "." + q.pathname; // ./somepath

  // response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=UTF-8");

  //การทำให้ nodeJs แสดงข้อมูลไฟล์ .html ในหน้าเว็บได้
  // fs.readFile("index.html", (error, data) => {
  //   response.write(data);
  //   return response.end();
  // });

  fs.readFile(filename, (error, data) => {
    if (error) {
      response.statusCode = 404;
      return response.end("404 Not Found");
    } else {
      response.statusCode = 200;
      response.write(data);
      return response.end();
    }
  });
});

server.listen(8000, () => {
  console.log("Server is start");
});