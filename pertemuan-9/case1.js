// Fetch API atau Ambil data dan akan menghasilkan promise
const response = fetch("https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=31.71.01.1001");

console.log(response);

// Kita tanganin promise nya dengan then dan catch
// response.then(function(res){
//     return res.json();
// }).then(function(data){
//     // Render Data
//     document.querySelector("#data").innerHTML = `<h1>${data.name}</h1>
//     <p>Umur : ${data.age}</p>
//     <p>Email : ${data.email}</p>`;

// }).catch(function(e){
//     console.log(e);
//     console.log("Ambil Data Gagal");
// })




// Coba ambil data cuaca dari API BMKG 
// https://data.bmkg.go.id/prakiraan-cuaca/

// 1. Ambil data dari API BMKG (Fetch API)
// 2. Tampilkan 1 kecamatan aja (apapun itu) atau bisa pilih gambir
// 3. Tampilkan data cuaca di kecamatan tersebut di halaman web (JS DOM)