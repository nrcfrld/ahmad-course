// Sebuah Program Menghitung Nilai Rata Rata, Nilai Tertinggi, dan Nilai Terendah

// Mata Pelajaran : Matematika
// Nilai : 80

// Mata Pelajaran : Bahasa Indonesia
// Nilai : 90

// Mata Pelajaran : Bahasa Inggris
// Nilai : 70

// Nilai Rata Rata : 80
// Nilai Tertinggi : 90 (Bahasa Indonesia)
// Nilai Terendah : 70 (Bahasa Inggris)

let isAddMore = true;
const subjectScores = [];

while (isAddMore) {
    let inputSubject = prompt("Masukkan Mata Pelajaran : ");
    let inputScore = Number(prompt("Masukkan Nilai : "));

    subjectScores.push({
        subject: inputSubject,
        score: inputScore
    });

    isAddMore = confirm("Apakah Anda ingin menambahkan mata pelajaran lagi?");
}

// Rumus Menghitung Rata Rata itu adalah total nilai / jumlah mata pelajaran
let totalScore = 0;
let totalItems = subjectScores.length;
let highestSubjectScore = subjectScores[0]; // { subject: 'Matematika', score: 80 }
let lowestSubjectScore = subjectScores[0];

subjectScores.forEach(function(subjectScore, index){
    totalScore += subjectScore.score;

    if(subjectScore.score > highestSubjectScore.score){
        highestSubjectScore = subjectScore; // { subject: 'Bahasa Indonesia', score: 90 }
    }

    if(subjectScore.score < lowestSubjectScore.score){
        lowestSubjectScore = subjectScore;
    }
});

// for(let i = 0; i < totalItems; i++){
//     totalScore = totalScore + subjectScores[i].score;
// }

console.log("Total Nilai : ", totalScore);
console.log("Nilai Rata Rata : ", totalScore / totalItems);
console.log("Nilai Tertinggi : ", highestSubjectScore.score + " ( " + highestSubjectScore.subject + " )");
console.log("Nilai Terendah : ", lowestSubjectScore.score + " ( " + lowestSubjectScore.subject + " )");

// alert("Terima kasih telah menggunakan program ini!");

