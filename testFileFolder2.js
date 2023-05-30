//ex13.1
//File Folder
//ค้นหาไฟล์โค้ดซ้ำใน Folder exercises ที่มีเนื้อหาซ้ำกัน แล้วเปลี่ยนชื่อทั้งหมดให้รู้ว่าเป็นไฟล์ซ้ำ

import fs from "fs";
import path from "path";

//อย่างเป็นแบบ Sync ที่ไม่ได้ run server จะได้ง่ายต่อการเข้าใจ

//readdirSync เป็นฟังก์ชันที่ใช้ในการอ่านรายชื่อของไฟล์และโฟลเดอร์ภายในโฟลเดอร์ที่ระบุ และคืนค่าออกมาเป็นอาร์เรย์ของรายชื่อเหล่านั้น สามารถใช้เพื่อตรวจสอบไฟล์และโฟลเดอร์ที่อยู่ในโฟลเดอร์ที่กำหนดได้
let fileNames = fs.readdirSync("exercises");

for (let i = 0; i < fileNames.length; i++) {
  //หาและเก็บไฟล์ซ้ำ
  let duplicatedFileName = [];
  // const currentFilePath = fileNames[i];

  const currentFilePath = path.join("exercises", fileNames[i]);

  //ใช้ในการอ่านเนื้อหาของไฟล์ที่ระบุ
  const currentFileContent = fs.readFileSync(currentFilePath, "utf-8");

  for (let j = i + 1; j < fileNames.length; j++) {
    const nextFileName = fileNames[j];
    const nextFilePath = path.join("exercises", fileNames[j]);

    //ใช้ในการอ่านเนื้อหาของไฟล์ที่ระบุ
    const nextFileNameContent = fs.readFileSync(nextFilePath, "utf-8");

    //ทำการเอาเนื้อหาสองอย่างมาเปรียบเทียบกัน
    if (currentFileContent === nextFileNameContent) {
      //ถ้าเหมือนเอา nextFileName ไปใส่ใน [] duplicatedFileName
      duplicatedFileName.push(nextFileName);
    }
  }

  //เปลี่ยนชื่อไฟล์ต้นฉบับ
  if (duplicatedFileName.length > 0) {
    const newFilePath = path.join("exercises", `original_${fileNames[i]}`);

    //               ไฟล์เก่า         ชื่อและที่อยู่ใหม่ตามที่ต้องการ
    fs.renameSync(currentFilePath, newFilePath);
  }

  // เปลี่ยนชื่อไฟล์ซ้ำ ลบมันออกจาก fileNames
  duplicatedFileName.forEach((dupFileName) => {
    const dupFilePath = path.join("exercises", dupFileName);
    const newDupFilePath = path.join("exercises", `dup_${dupFileName}`);
    fs.renameSync(dupFilePath, newDupFilePath);
    fileNames = fileNames.filter((fileName) => {
      return fileName != dupFileName;
    });
  });

  console.log(currentFilePath, duplicatedFileName.length);
}
