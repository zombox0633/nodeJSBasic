//ex11.2
//HTTP Server + MySQL
//MYSQL เป็นแค่ตัวอย่าง ในกรณีที่ต้องการใช้ db

import http from "http";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();
const {
  APP_PORT ,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_HOSTNAME,
  MYSQL_POST,
  MYSQL_DB,
} = process.env;

const dbConnectionString = `mysql://${MYSQL_USERNAME}:${MYSQL_PASSWORD}@${MYSQL_HOSTNAME}:${MYSQL_POST}/${MYSQL_DB}`;

async function startApp() {
  const db = await mysql.createConnection(dbConnectionString);
  //เป็นการใช้งานเพื่อสร้างการเชื่อมต่อ (connection) กับฐานข้อมูล MySQL โดยใช้ค่าเชื่อมต่อที่ระบุในตัวแปร dbConnectionString

  const server = http.createServer((request, response) => {
    const { method, url } = request;

    let content = "";
    if (method === "GET" && url === "/") {
      db.query("SELECT * FROM Todo", (error, results, fields) => {
        if (error) {
          // การจัดการกรณีเกิดข้อผิดพลาดในการสอบถามฐานข้อมูล
          console.error(error);
        } else {
          // การจัดการผลลัพธ์ที่ได้จากการสอบถามฐานข้อมูล
          console.log(results);
          const resultsString = results
            .map((item) => `<p>${item.title}</p>`)
            .join("");
      
          content = "home";
      
          response.statusCode = 200;
          response.setHeader("Content-Type", "text/html; charset=UTF-8");
          response.write(content + resultsString);
          response.end();
        }
      });
    } else if (method === "GET" && url === "/about") {
      content = "about";

      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html; charset=UTF-8");
      response.write(content);
      response.end();
    }
  });

  server.listen(APP_PORT , () => {
    console.log("Server is start : " + APP_PORT );
  });
}

startApp();