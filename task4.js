const data = {
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