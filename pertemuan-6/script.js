const items = ["apple", "banana", "orange"]; // 0x123
// console.log(items);

items.push("grape"); // 0x123

items[0] = "kiwi"; // 0x123

// items.pop(); // 0x123

console.log(items);

// items = ["mango", "papaya"]; // 0x456

// // Assignment/Re-assign
// items = ["apple", "banana", "orange"];

// console.log(items);


// Type Data Primitive
// String, Number, Boolean, Null, Undefined

// Type Data Non-Primitive / Reference Type
// Array, Object, Function

// const newItems = items; // Ini akan mereferensikan ke array yang sama 0x123

// newItems.push("mango"); // 0x123

// console.log("New Items : ", newItems); // 0x123
// console.log("Items : ", items); // 0x123

// let fullName = "John Doe"; // 0x789
// let newFullName = fullName; // 0x889 Ini akan membuat salinan dari string

// newFullName = "Jane"; // // 0x889 Ini tidak akan mempengaruhi fullName

// console.log("New Full Name : ", newFullName);
// console.log("Full Name : ", fullName);


// // Duplicate Array
// // Aku mau update array hobbies tapi pengen simpan hobbies yang lama

// const hobbies = ["reading", "traveling", "cooking"]; // 0x999
// const newHobbies = [...hobbies]; // 0x999

// newHobbies.push("swimming"); // 0x999 

