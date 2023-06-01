import http from "http";
import fs from "fs";

//โดยปกติ nodeJs สามารถสร้าง tag html ได้อยู่แล้ว

//npm i formidable
//formidable ช่วยในการจัดการฟอร์มและไฟล์อัปโหลดในแอปพลิเคชัน Node.js ของเราได้ง่ายขึ้น โดยอาศัยการแปลงและการจัดการข้อมูลแบบมัลติพาร์ท (multipart/form-data) ซึ่งเป็นรูปแบบที่ใช้สำหรับการอัปโหลดไฟล์และข้อมูลฟอร์มใน HTTP request.
import formidable from "formidable";

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (url == "/fileupload") {
    let form = new formidable.IncomingForm();
    form.parse(req, (error, fields, files) => {
      if (files && files.fileupload) {
        let oldpath = files.fileupload.path; //ตัว fileupload สามารถหา path ได้แต่ใช้งานไม่ได้
        let newpath =
          "C:/Users/Zombox/Desktop/project/Newproject/nodejs/nodeJsBasic/img/" +
          files.fileupload.name;
        fs.rename(oldpath, newpath, (error) => {
          if (error) throw error;
          res.write("file uploaded and moved");
          res.end();
        });
      } else {
        throw new Error("File upload not found");
      }
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="fileupload">');
    res.write('<input type="submit">');
    res.write("</form>");
    return res.end();
  }
});

// Set the upload directory for formidable
formidable.IncomingForm.prototype.uploadDir =
  "C:/Users/Zombox/AppData/Local/Temp"; // Change this path to your preferred temporary directory

server.listen(8000, () => {
  console.log("Server is start");
});
