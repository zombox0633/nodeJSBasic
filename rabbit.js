//ex7.1
//CommonJs = รูปแบบการใช้งาน Module แบบ Classic โดย Node.js จะทำการ Support
//ทดสอบกาส่งข้อมูลโดยใช้ module.exports

// function RabbitOne(name, breed) {
//   this.name = name;
//   this.breed = breed;
// }

//module.exports การใช้ module.exports เป็นการกำหนดค่าของ module.exports ให้เป็นอ็อบเจกต์ที่มีคุณสมบัติ Rabbit เป็นสมาชิก
//แบบแรก
// module.exports = {
//   Rabbit
// }

//แบบสอง
// module.exports = RabbitOne;


//ex8.1
//export เป็นวิธีแบบใม่ในการส่งค่า
//ES6 Modules = รูปแบบการใช้งาน Module แบบ Modern แต่ตอนนี้ Node.js ยังไม่ Support (วันที่เขียน 24/5/2023)

//โดยปกติจะไม่สามารถใช้ export และ import มีวิธีแก้ไข 2 วิธีคือ
//วิธีที่ 1 โดยมีวิธีแก้คือเปลี่ยนนามสกุลไฟล์จาก .js --> .mjs ทั้งไฟลืที่มี export และ import เมื่อเปลี่ยนไฟล์จะทำการรองรับ ES6 Modules
//แต่เมื่อเปลี่ยนนามสกุลไฟล์เป็น .mjs จะไม่สามารถใช้ module.exports ได้ ต้องมาใช้ export และ import แทน

//วิธีที่ 2 โดยกำหนด "type": "module" ใน package.json ของโปรเจกต์ของคุณ วิธีจะสามารถใช้ได้โดยไม่เปลี่ยนนามสกุลไฟล์
//เมื่อเพิ่ม "type": "module" ใน package.json จะไม่สามารถใช้ module.exports ได้ ต้องมาใช้ export และ import แทน

function RabbitTwo(name, breed) {
  this.name = name;
  this.breed = breed;
}

export default RabbitTwo;

//จะมีไฟล์ getData.js ข้อมูล
