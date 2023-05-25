//ex6.2
//จะทำการนำเข้า (import) โมดูล ingredients.js และกำหนดให้ตัวแปร myMenu เก็บค่าที่ได้จากการนำเข้าโมดูลนั้น ๆ ซึ่งจะเป็นอ็อบเจกต์ที่ประกอบด้วยคุณสมบัติหรือฟังก์ชันที่ได้

//แบบแรก
// const myMenu = require('./ingredients')

//แบบสอง
// const {menu1,specialMenu} = require('./ingredients')

//การใช้งานข้อมูลในไฟล์ ingredients.js โดยการ console.log ออกมาแสดง

//แบบแรก
// console.log(myMenu.menu1)
// myMenu.specialMenu()

//แบบสอง
// console.log(menu1)
// specialMenu()


//ex7.2
// const RabbitOne = require('./rabbit.mjs')

// const rabbit1 = new RabbitOne('a','Netherland Dwarf') //อย่าลืมใส่ new ถ้าไม่ใส่ค่าจะเป็น undefined
// console.log(rabbit1)


//ex8.2
//การรับ export ต้องใช้ import 

import RabbitTwo from './rabbit.js'

const rabbit2 = new RabbitTwo('b','lop')
console.log(rabbit2)