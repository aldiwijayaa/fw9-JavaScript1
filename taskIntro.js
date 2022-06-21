// task 1
const biodata = {
  nama: "Muhamad Aldi WIjaya",
  age: 24,
  hobbies: ["main game", "berenang", "traveling"],
  isMarried: false,
  schollList: {
    yearIn: 2017,
    yearOut: 2020,
    major: "Sistem Informasi",
  },
  skills: {
    skillName: "berenang",
    level: "advance",
  },
  interestInCoding: true,
};

console.log(biodata);

// task 2
const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
const nilaiUjian=[80,90,89,69];
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

// task 3
const printSegitiga = 5;

for (let i = printSegitiga; i >= 1; i--) {
	let int = '';

	for (let j = 1; j <= i; j++) {
		int += j;
	}
	console.log(int);
}

// task 4
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: 
  {
  street: "Kulas Light",
  suite: "Apt. 556",
  city: "Gwenborough",
  zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  }
  // jawaban A
  function changeData(data){
    let newData = {
      ...data,
      hobby: 'Main Game'
    };
  
    newData.name = 'Aldi';
    newData.email = 'aldi@gmail.com';
  
    return newData;
  }
  
  console.log(changeData(data))


  // jawaban B
  const {street, city} = data.address
console.log(street)
console.log(city)