var users = [
  {
    id: 1,
    first_name: "Eamon",
    last_name: "Harhoff",
    email: "eharhoff0@imageshack.us",
    gender: "Male",
    age: 76,
    salary: 18888,
  },
  {
    id: 2,
    first_name: "Laney",
    last_name: "Whittam",
    email: "lwhittam1@issuu.com",
    gender: "Female",
    age: 42,
    salary: 15018,
  },
  {
    id: 3,
    first_name: "Lynett",
    last_name: "Twinberrow",
    email: "ltwinberrow2@gov.uk",
    gender: "Female",
    age: 99,
    salary: 13343,
  },
  {
    id: 4,
    first_name: "Madella",
    last_name: "Kliesl",
    email: "mkliesl3@ft.com",
    gender: "Female",
    age: 56,
    salary: 5248,
  },
  {
    id: 5,
    first_name: "Simona",
    last_name: "Knee",
    email: "sknee4@sciencedaily.com",
    gender: "Female",
    age: 61,
    salary: 14376,
  },
  {
    id: 6,
    first_name: "Cord",
    last_name: "McMurthy",
    email: "cmcmurthy5@wordpress.org",
    gender: "Male",
    age: 86,
    salary: 9514,
  },
  {
    id: 7,
    first_name: "Obed",
    last_name: "Beaven",
    email: "obeaven6@msn.com",
    gender: "Male",
    age: 91,
    salary: 18463,
  },
  {
    id: 8,
    first_name: "Elayne",
    last_name: "Smeuin",
    email: "esmeuin7@wsj.com",
    gender: "Female",
    age: 96,
    salary: 19907,
  },
  {
    id: 9,
    first_name: "Robin",
    last_name: "Picford",
    email: "rpicford8@typepad.com",
    gender: "Female",
    age: 55,
    salary: 14975,
  },
  {
    id: 10,
    first_name: "Patsy",
    last_name: "Ochterlonie",
    email: "pochterlonie9@latimes.com",
    gender: "Female",
    age: 93,
    salary: 9716,
  },
  {
    id: 11,
    first_name: "Madelina",
    last_name: "Henrion",
    email: "mhenriona@alibaba.com",
    gender: "Female",
    age: 81,
    salary: 12932,
  },
  {
    id: 12,
    first_name: "Godard",
    last_name: "Sciacovelli",
    email: "gsciacovellib@opera.com",
    gender: "Male",
    age: 90,
    salary: 16655,
  },
  {
    id: 13,
    first_name: "Padget",
    last_name: "Gore",
    email: "pgorec@washington.edu",
    gender: "Male",
    age: 34,
    salary: 8029,
  },
  {
    id: 14,
    first_name: "Birdie",
    last_name: "Davidovich",
    email: "bdavidovichd@tamu.edu",
    gender: "Female",
    age: 49,
    salary: 17407,
  },
  {
    id: 15,
    first_name: "Lisbeth",
    last_name: "Pride",
    email: "lpridee@epa.gov",
    gender: "Female",
    age: 94,
    salary: 14993,
  },
];

// bài 1------------
// let userFullName = [];
// users.forEach((item) => {
//   let { first_name, last_name } = item;
//   userFullName.push(first_name, last_name);
// });
// console.log(userFullName);

// bài 2------------
// let userMale = users.filter((item) => item.age < 40 && item.gender == "Male");
// console.log(userMale);

// bài 3----------------
// let userBothFullLastName = [];
// users.forEach((item) => {
//   let { first_name, last_name } = item;
//   userBothFullLastName.push(first_name + " " + last_name);
// });
// console.log(userBothFullLastName)

// bài 4-------------
// const resultCamelCase = [];
// users.forEach((user) => {
//   Object.keys(user).forEach((key) => {
//     let newKey = key.split("_");
//     if (newKey.length > 1) {
//       for (let i = 1; i < newKey.length; i++) {
//         newKey[i] =
//           newKey[i].charAt(0).toUpperCase() + newKey[i].slice(1).toLowerCase();
//       }
//     }
//     let newName = newKey.join("");
//     user[newName] = user[key];
//     key.split("_").length > 1 ? delete user[key] : user[key];
//   });
//   resultCamelCase.push(user);
// });
// console.log(resultCamelCase);
// bài 5-------------
// let trungBinh = users.reduce((trungBinh, item) => item.age + trungBinh, 0);
// console.log(trungBinh / users.length);

//bài 601------------
// let fullName = users.reduce(
//   (name, item) => name.concat(`${item.last_name} ${item.first_name}`),
//   []
// );
// console.log(fullName);

//bài 602--------------
// let oldPeople = users.reduce((obj, item) => {
//   if (item.gender == "Male" && item.age < 40) {
//     obj.push(item);
//   }
//   return obj;
// }, []);
// console.log(oldPeople);

//bài 603---------------

// bài 7--------------
// const userAbc = users.sort((a, b) => {
//   if (a.first_name < b.first_name) {
//     return -1;
//   }
//   if (a.first_name > b.first_name) {
//     return 1;
//   }
//   return 0;
// });
// console.log(userAbc);

// bài 8------------
// function faMap(array, function1) {
//   const result = [];
//   array.forEach((item, index) => {
//     result.push(function1(item, index));
//   });

//   return result;
// }
// console.log(faMap([1, 2, 3], (item) => (item += 2)));

// bài 9---------------
// function faFilter(array, callbackFn) {
//   const result = [];
//   array.forEach((item, index) => {
//     if (callbackFn(item, index)) {
//       result.push(item);
//     }
//   });
//   return result;
// }

// bài 10-------------
Array.prototype.customReduce = function (callback, int = 0) {
  let result = int;
  for (let i = 0; i < this.length; i++) {
    result = callback(result, this[i]);
  }
  return result;
};

// bài 1201--------------
const nums = [2, 4, 8, 22];
const sum = nums.customReduce((number, value) => number + value, 0);
console.log(sum);

// bài 1202-------------
// const nums = [2, 4, 8, 22];
// const accumulation = nums.customReduce((number, value) => number * value, 1);
// console.log(accumulation);

// bài 1203-------------
// const nums = [2, 4, 8, 22];
// const reverse = nums.customReduce((number, value) => );
// console.log(reverse);

//Tạo hàm faMap có chức năng giống map
// function faMap(arr, callback) {
//   if (!Array.isArray(arr)) {
//       return false
//   }

//   const mappedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//       mappedArray.push(callback(arr[i], i, arr));
//   }

//   return mappedArray;
// }

// const numbers = [1, 2, 3, 4];

// const doubledNumbers = faMap(numbers, (num) => num * 2);
// console.log(doubledNumbers);

// //tạo ra 1 hàm faFilter mô phỏng lại hàm filter
// function faFilter(arr, callback) {
//   if (!Array.isArray(arr)) {
//       return false
//   }

//   const filteredArray = faMap(arr, (element, index) => {
//       return callback(element, index) ? element : undefined;
//   });

//   return filteredArray.filter((element) => element !== undefined);
// }

// const numbers2 = [1, 2, 3, 4, 5, 6];

// const oddNumbers = faFilter(numbers2, (num) => num % 2 !== 0);
// console.log(oddNumbers);

// //viết hàm faReduce mô phỏng hàm reduce
// function faReduce(arr, callback, initialValue) {
//   if (!Array.isArray(arr)) {
//       return false
//   }

//   if(typeof callback != "function"){
//       return false
//   }

//   let result;
//   let index;

//   if (initialValue !== undefined) {
//       result = initialValue;
//       index = 0;
//   } else {
//       result = arr[0];
//       index = 1;
//   }

//   for (let i = index; i < arr.length; i++) {
//       result = callback(result, arr[i], i, arr);
//   }

//   return result;
// }

// const numbers3 = [1, 2, 3, 4];

// const sum = faReduce(numbers, (acc, num) => acc.concat(num * 2), []);
// console.log(sum);
