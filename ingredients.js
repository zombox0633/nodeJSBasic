//ex6.1
//ทดสอบกาส่งข้อมูลโดยใช้ exports แบบปกติ

//แบบแรก
// const menu1 = 'salmon fish1'

// function specialMenu(){
//   console.log('tuna fish1')
// }

//exports เป็นการส่งออก (export) ตัวแปรหรือฟังก์ชันใน Node.js และ exports เพื่อส่งออกตัวแปรหรือฟังก์ชัน เราสามารถเข้าถึงตัวแปรหรือฟังก์ชันนั้นได้โดยใช้ require() เมื่อนำไฟล์นี้มาใช้ในโปรเจคอื่น.
//ความแตกต่างระหว่าง exports และ export คือ exports เป็นการส่งออกใน Node.js ในขณะที่ export เป็นการส่งออกในโมดูลของ JavaScript ในมาตรฐาน ES6 ที่ใช้ร่วมกับ Node.js ในการพัฒนาโปรเจคแบบโมดูล

//exports.= ชื่อที่ต้องการหรือชื่อเดิมก็ได้ = ตัวแปร/function

// exports.menu1 = menu1
// exports.specialMenu = specialMenu

//แบบสอง
exports.menu1 = 'salmon fish2';
exports.specialMenu = () => {
  console.log('tuna fish2');
}

//จะมีไฟล์ getData.js ข้อมูล