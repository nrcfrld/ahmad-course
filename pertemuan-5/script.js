// && = AND = Menghasilkan true jika semua kondisi terpenuhi atau true
// || = OR = Menghasilkan true jika salah satu kondisi terpenuhi atau true

// let nilai = 101;

// if(true && true){
//     console.log("A");
// }


// if(true || false){
//     console.log("A");
// }


// Tolong Beli telur 5, jika ada kecap maka beli 1 kecap dan beli 5 telur.

// 5 telur dan 1 kecap
// 1 telur
// 1 kecap


// let umur = 17;
// let punyaKTP = true;
// let lulusUjian = true;

// // Mendapatkan SIM umur minimal 17 tahun dan punya KTP dan lulus ujian
// if(umur >= 17 && punyaKTP && lulusUjian){
//     console.log("Bisa dapat SIM");
// }else{
//     console.log("Belum bisa dapat SIM");
// }

function sayHello(){
    console.log("Hello");
    console.log("Selamat siang");
}

sayHello();
sayHello();
sayHello();
sayHello();


// Check Ganjil or Genap
function checkGanjilGenap(angka){
  if(angka % 2 === 0){
    console.log(angka + " adalah bilangan Genap!");
    return true;
  } else {
    console.log(angka + " adalah bilangan Ganjil!");
    return false;
  }
}

// const result1 = checkGanjilGenap(21);
// const result2 = checkGanjilGenap(57);
// const result3 = checkGanjilGenap(20);

// console.log(result2)


// Jika nilai lebih dari 80 maka lulus, jika kurang dari 80 maka tidak lulus

function isPassed(nilai){
    if(nilai > 80){
        return true
    }else{
        return false;
    }
}

console.log(isPassed(90));



// Function untuk menghitung luas persegi panjang
function hitungLuasPersegiPanjang(panjang, lebar){
    console.log(panjang * lebar);
    return "ini hasil";
}

let result = hitungLuasPersegiPanjang(10, 5);

console.log(result);


// Array

const items = ["Apple", "Banana", "Cherry", "Durian", "Elderberry", "Grape", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato", "Ugli fruit", "Vanilla bean", "Watermelon", "Xigua", "Yellow passion fruit", "Zucchini"];
const otherItems = [0, true, "Hello", null, undefined];

// For Loop
// for(let index  = 0; index < items.length; index = index + 1){
//     console.log((index+1) + ". " +items[index]); 
// }

// let index = 0;
// while(index < items.length){
//     console.log((index+1) + ". " +items[index]);

//     index++;
// }

// console.log(index);

// items.forEach(function(item, i){
//     console.log(i+1 + ". " +item);
// })

