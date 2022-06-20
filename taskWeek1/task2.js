// task 2
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
const nilaiUjian=[mtk,bahasaIndonesia,bahasaInggris,ipa];
let jumlahNilai = 0;

for (i in nilaiUjian){
  jumlahNilai += nilaiUjian[i];
}
const rataRata = jumlahNilai / nilaiUjian.length;
console.log('Rata-rata = ' + rataRata);

let grade= rataRata;
if (grade >= 90){
  console.log("Grade = A")
} else if (grade >= 80 && grade < 90){
  console.log("Grade = B")
} else if (grade >= 70 && grade < 80){
  console.log("Grade = C")
} else if(grade >= 60 && grade < 70){
      console.log("Grade = D")
} else{
    console.log("Grade = E")
}
