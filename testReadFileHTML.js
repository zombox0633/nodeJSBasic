import http from "http";
import fs from "fs";

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=UTF-8");

  //การทำให้ nodeJs แสดงข้อมูลไฟล์ .html ในหน้าเว็บได้
  fs.readFile("index.html", (error, data) => {
    response.write(data);
    return response.end();
  });
});

server.listen(8000, () => {
  console.log("Server is start");
});