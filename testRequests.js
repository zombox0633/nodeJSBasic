import http from "http";

for (let i = 1; i < 100; i++) {
  setTimeout(() => {
    const request = http.request(`http://localhost:8888/customers/${i}`);
    request.end();
  }, i);
}
//ใช้กับ testFileFolder.js คู่กันในการแสดงผลลัพธ์
