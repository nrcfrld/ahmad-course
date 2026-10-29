// console.log("A");

// // Proses ngambil data dari server/backend tapi proses sangat lama
// setTimeout(function(){
//     console.log("B");
// }, 3000);
// alert("B");

// console.log("C");

// Promise = Janji
// Pending = Janjinya belum terpenuhi tapi tidak bisa dianggap gagal/ingkar
// Fullfilled = Janjinya terpenuhi / Sukses
// Rejected = Janjinya tidak terpenuhi / Gagal / Ingkar

const janji = new Promise(function(resolve, reject){
   // Kondisi = Fullfilled
   // Orang punya hutang 5000
   const hutang = 5000;
   // Dia baru bayar 5000
   const bayar = 4000;
   // Hutangnya punya tenggat waktu 3hari

    setTimeout(function(){
        if(bayar === hutang){
            resolve("Hutang Sudah Lunas");
        }else{
            reject("Hutang Belum Lunas");
        }
    }, 3000)
});

// Jika hutang nya sudah lunas
// maka ucapkan "Terimakasih sudah membayar hutang"
// jika tidak lunas, maka ucapkan "Bayar dongg.."
// console.log(janji);

// Synchronous
console.log("Start");

// Ini adalah proses asynchronous
janji.then(function(pesan){
    console.log(pesan);
    console.log("Terimakasih sudah membayar hutang");
}).catch(function(pesan){
    console.log(pesan);
    console.log("Bayar dongg..");
});

// synchronous
console.log("Finish");