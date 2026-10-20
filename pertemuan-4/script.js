let nama = "Rico+!a123";
let Nama = "Bambang";

let umur = 25;
// console.log(nama);
// console.log(umur);
const email = "rico@example.com";
const NIK = "317123123858082";

const pi = 3.14;

console.log(typeof pi);

const isValid = false; // 1 dan 0
const isRegistered = true; // 1 dan 0
const isAdult = true; // 1 dan 0
const hasNpwp = true; // 1 dan 0
const canDrive = true;


nama = "Bambang"; // reassignment

// console.log("Halo, nama saya adalah " + nama);

// console.log(nama);

console.log("Umur aku sekarang adalah " + umur + " tahun");
umur = umur + 1;
console.log("Umur aku tahun depan adalah " + umur + " tahun");

console.log("NIK :" + NIK);

console.log("NIK :" + NIK);


const number = 10;
const number2 = 3 * number;
const number3 = number % 2;

console.log((number + number2 ) * number3);



const price = "1000";
const discount = 20;

const discountPrice = (discount / 100) * price; // Potongan Harga
const totalPrice = price - discountPrice; // Total Harga Setelah Diskon

console.log("Harga Barang : " + price);
console.log("Discount : " + discount + "%");
console.log("Harga Discount : " + discountPrice);
console.log("Total Harga : " + totalPrice);

console.log(Number(price) + 1); // 11 (concatenate)
console.log(1 + 1); // 2 (addition)

console.log(Number("1") - Number("1"));


// console.log("200" == 200);
// console.log(100 !== "100");

console.log(5 > 3);
console.log(5 >= 5);
console.log(5 <= 3);





let age = Number(prompt("Masukkan Umur Anda :")); // string atau number
// Jika umur lebih dari 17 maka boleh membuat KTP

if(Number.isNaN(age)){
    alert("Umur harus berupa angka");
    age = Number(prompt("Masukkan Umur Anda :"));
}

if(age >= 17){
    alert("Boleh membuat KTP");
}else{
    alert("Belum boleh membuat KTP");
}



const nilai = Number(prompt("Masukkan Nilai Anda :")); 
// Nilai 90 keatas maka dia dapat nilai A+
// Nilai 80 keatas maka dia dapat nilai A
// Nilai 70 keatas maka dia dapat nilai B
// Nilai 60 keatas maka dia dapat nilai C
// Nilai 50 keatas maka dia dapat nilai D
// Nilai dibawah 50 maka dia dapat nilai E
// Notes: Gunakan If else if else untuk menyelesaikan masalah ini
// Optional: Kita gak bisa bahwa input user selalu benar

console.log("Grade Anda : A+");



