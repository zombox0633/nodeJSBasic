import fs from "fs";

//fs.writeFile(file, data, options, callback): เขียนข้อมูลใหม่ในไฟล์และทับข้อมูลเดิม (ถ้ามี) คือการ create
//ใช้สำหรับเขียนข้อมูลใหม่ลงในไฟล์ที่ระบุ หากไฟล์มีอยู่ก่อนหน้า ฟังก์ชันนี้จะเขียนทับข้อมูลเดิมในไฟล์ด้วยข้อมูลใหม่ที่ระบุ หากไฟล์ยังไม่มีอยู่ ฟังก์ชันจะสร้างไฟล์ใหม่และเขียนข้อมูลลงไปในไฟล์
fs.writeFile("mynewfile.txt", "w", (error) => {
  if (error) {
    throw error;
  } else {
    console.log("Saved! writeFile");
  }
});

//fs.appendFile() เพิ่มข้อมูลลงไปในไฟล์ที่มีอยู่แล้ว คือการ Update
//ใช้สำหรับเพิ่มข้อมูลเข้าไปในไฟล์ที่ระบุ หากไฟล์ยังไม่มีอยู่ ฟังก์ชันจะสร้างไฟล์ใหม่และเขียนข้อมูลลงไปในไฟล์ หากไฟล์มีอยู่ก่อนหน้า ฟังก์ชันจะเพิ่มข้อมูลที่ระบุลงไปต่อท้ายของไฟล์
fs.appendFile("mynewfile.txt", "a", (error, file) => {
  if (error) {
    throw error;
  } else {
    console.log("Saved! appendFile");
  }
});

//fs.unlink ลบไฟล์
fs.unlink("mynewfile.txt", (error) => {
  if (error) throw error;
  console.log("File Deleted");
});

//fs.rename เปลี่ยนชื่อ
//          ชื่อเก่า              ชื่อใหม่
fs.rename("mynewfile.txt", "myrenamefile.txt", (error) => {
  if (error) throw error;
  console.log("File renamed");
});