// // Callback functions
// /* 
// const person = [
//     {name: 'samuel', age: '28years', country : 'Ghana'},
//     {name: 'hello', age: '28years', country : 'Ghana'}
// ]

// function getPerson(){
//     // setTimeout(()=>{
//     //     person.map((i)=>{
//     //     const indivi = `<li>${i.country}</li>`
//     //     document.body.innerHTML = indivi
//     //     });

//     // },100)

//     setTimeout(()=>{
//         let ind = ""
//         person.forEach((i)=>{
//             ind += `<h1>${i.name}</h1>
//             <h1>${i.age}</h1>
//             <h1>${i.country}</h1>
//             `
//         })
//         document.body.innerHTML = ind
//     },60000)
    
// }
// getPerson() */

// // const net = fetch("https://api.Netflix.com");

// // const hello = net? `<h1>${net}</h1>` : console.log("hello");

// // document.body.innerHTML = hello

// let counts = 0;
// const btn = document.querySelector(".click");
// const num = document.querySelector(".h")
// num.innerText = counts

// // btn.addEventListener("click", countup)
// // function countup(){
// //     counts++;
// //     num.innerText = counts
// // }
// // const la = document.getElementById("la")
// // la.innerText = "Enter a name"
// // const text = document.getElementById("text");
// // const names = document.getElementById("names")
// // text.addEventListener("input", (e)=>{
// //     names.innerText = "Hello " + e.target.value +" ,Good morning"
    
// // })

// // const score = [85,50,20,45]
// // const numberofStudent = score.length
// // const reducefn = score.reduce((acc)=>
// //     (acc+score)/numberofStudent);

// // document.body.innerHTML = reducefn

// // 1.
// // const item =[
// //     {name: 'rice', qty: 5, price: 500.00, isSTock: true},
// //     {name: 'rice', qty: 5, price: 500.00, isSTock: false},
// //     {name: 'rice', qty: 5, price: 500.00, isSTock: true},
// //     {name: 'rice', qty: 5, price: 500.00, isSTock: true},
// //     {name: 'rice', qty: 5, price: 500.00, isSTock: false}
// // ]
// // const ans = item.filter((nass)=>(nass.isSTock))
// // const red = ans.reduce((i,ans)=>(i+ans.qty * ans.price),0)

// // const answers = item.reduce((an,item)=>(an+item.qty * item.price),0)


// // const i = [125,12,45,12]
// // const answer = i.reduce((an,i)=>an*i);
// // names.innerText = red

// // //2.
// // const is = [
// //     {namse: 'rice', qty: 5, istock: true, price: 500.00},
// //     {namse: 'oil', qty: 5, istock: false, price: 500.00},
// //     {namse: 'water', qty: 5, istock: true, price: 500.00},
// // ]
// // const newItem = is.filter((nam)=>(
// //     nam.istock === true
// // ))
// // const solu = newItem.reduce((hi,acc)=>(hi + acc.price),0)
// // // names.innerText = solu


// // const students = [
// //     {stu: "Samuel", cgpa: 5.0},
// //     {stu: "Samuel", cgpa: 5.0},
// //     {stu: "Smuel", cgpa: 5.0}
// // ]

// // const id = students.map((hi)=>(
// //     `${hi.stu} has a cpga of ${5.0}`
// // ))

// // const age = 20;
// // const ages = [
// //     {na: "Ama", ag: 20},
// //     {na: "Kwame", ag: 19},
// //     {na: "Jack", ag: 23},
// //     {na: "Yaw", ag: 25},
// //     {na: "Kofi", ag: 0},
// // ]

// // const newage = ages.reduce((nas,isd)=>(isd.ag >= age ? `${isd.na} is the oldest` : "u no reach yet" ))

// // console.log(newage)
// // // names.innerText = id


// // // You are given an array of numbers. Use filter() to create a new array containing only the even numbers.
// // const nums = [1,2,5,4,7,8,9,6,4,8,12,20,2000]
// // const numsFilt = nums.filter((nu)=>nu%2==0);
// // names.innerText = numsFilt

// // // Given an array of people objects with a name and age, use reduce() to calculate the average age of the people.
// // const perosns = [
// //     {name:"kofi", age:45},
// //     {name:"yaa", age:45},
// //     {name:"ama", age:45},
// //     {name:"yaw", age:50},
// // ]

// // const numberofob = perosns.length;

// // const ave = perosns.reduce((ke,persons)=>(ke+ persons.age / numberofob),0)
// // names.innerText = ave

// // // You have an array of prices, and you want to apply a 20% discount to all of them. Use map() to create a new array with the discounted prices.
// // const pricesss = [500,200,5545,12346]
// // const discount = 0.2

// // const newPrice = pricesss.map((his)=>his-(his*discount));

// // names.innerText = newPrice[3]

// // // You have an array of names, and you need to create a new array where all the names are converted to uppercase. Use map() to transform the names.
// // const indi = ['ama','james','yaw','serwaa']
// // const newCon = indi.map((ni)=>ni.toUpperCase())

// // names.innerText = newCon[1]

// // // Given an array of arrays, use reduce() to flatten it into a single array. For example, [[1, 2], [3, 4], [5, 6]] should become [1, 2, 3, 4, 5, 6]


// // const trys = [[1, 2], [3, 4], [5, 6]]
// // const tryss = trys.reduce((tr,h)=>(tr+','+h))

// // names.innerText = tryss

// // You are building a simple e-commerce platform where users can add products to their shopping cart, and each product has a name, price, quantity, and an inStock status. The platform also tracks customer reviews for each product, including the reviewer's name and age.

// // function hello(){
// // const itemss = document.getElementById('item').value
// // const pri = document.getElementById('price').value
// // const qty = document.getElementById('qty').value
// // }

// // console.log(hello())
// const it = document.getElementById("it")
// const qty = document.getElementById('qty')
// const up = document.getElementById("up")
// const down = document.getElementById("down")
// let cunts =0
// qty.innerText = cunts
// up.addEventListener("click", ups)
// function ups(){
//     cunts++;
// qty.innerText = cunts
// }
// down.addEventListener("click", downs)
// function downs(){
//     cunts--;
// qty.innerText = cunts
// }


// const pro = [
//     {name: 'rice', qty: 5, price:500},
// ]

// const labels = pro.filter((its)=>its.name)
// console.log(labels)


// function createCounter(init) {
//     let currentValue = init;
  
//     return {
//       increment: function() {
//         currentValue += 1;
//         return currentValue;
//       },
//       decrement: function() {
//         currentValue -= 1;
//         return currentValue;
//       },
//       reset: function() {
//         currentValue = init;
//         return currentValue;
//       }
//     };
//   }
  
//   // Example usage:
//   const counter = createCounter(5);  // Initialize the counter with the starting value of 5
  
//   console.log(counter.increment());  // Output: 6
//   console.log(counter.increment());  // Output: 7
//   console.log(counter.decrement());  // Output: 6
//   console.log(counter.reset());      // Output: 5 (resets to the initial value)
//   console.log(counter.decrement());  // Output: 4
  

//   const items = [1,2,3,4,5]
// const newItems = items.map((i)=>i+1)
// console.log(newItems)


// new work

/* const clear = document.getElementById("clear-btn")
const res = document.getElementById("res")


check.addEventListener("click", cb);
function cb(){
  const userText = input.value
  const valid = ['1 555-555-5555','1 (555) 555-5555','5555555555','555-555-5555','(555)555-5555','1(555)555-5555']
  let newText =""
  if(userText === ""){
    alert("Please provide a phone number")
  }
  else if(userText === valid[0] || userText === valid[1] ||userText === valid[2] || userText === valid[3] ||userText === valid[4]  ){
    newText="Valid US number:" + userText
    res.innerText = newText
  }
  else{
    newText="Invalid US number:"+ userText
    res.innerText = newText;
  }
}
clear.addEventListener("click", cbs);
function cbs(){
  res.innerText = "";
}  */

// For a deeper understanding of functional programming, write your own implementation of map(), filter(), reduce()
//map()
const cgpa = [
  { name: "John", cgpa: 4.5 },
  { name: "Jane", cgpa: 3.0 },
  { name: "Jim", cgpa: 4.0 }
]

const firstClass = 4.5
const secondClass = 3.0
const thirdClass = 2.0

const result = cgpa.map((i)=>(i.cgpa));
console.log(result);

//reduce() && filter()
/* const items =[
  {name:"apple",price:1.00, qty:5, isTock: true},
  {name:"banana",price:0.50, qty:5, isTock: true},
  {name:"orange",price:1.50, qty:5, isTock: false}
]

const letFilt = items.filter((i)=>(i.isTock=true))

const finalPrice = letFilt.reduce((pri,items)=>(pri+items.price * items.qty));
console.log(finalPrice);


const myArray = [4,5,6,'hello','674'];
const str = myArray[3]

console.log(typeof(str)); */
// const agess = [
//   {
//     name:"gh",ag:7
//   }
// ]
// let key = agess.map((hii)=>(hii.ag));

// console.log(key in agess)

// // Promises
// const input = document.getElementById('user-input');
// const check = document.getElementById("check-btn");
// const con = document.getElementById('con-input');
// const show = document.getElementById("show");
// const conn = document.getElementById("con-text");
// const conB = document.getElementById("conn");

// let generatedNumber = null; // Store the generated number

// // Password Check Promise
// check.addEventListener("click", () => {
//   const password = input.value; 
//   const confirm = con.value;

//   const promise = new Promise((resolve, reject) => {
//     if (password === confirm) {
//       resolve("Password Matched");
//     } else {
//       reject("Oops! Something went wrong");
//     }
//   });

//   // Handle the result of the password check
//   promise
//     .then((value) => {
//       console.log(value);

//       // If password matches, generate a random number
//       generatedNumber = Math.floor(Math.random() * 5);
//       console.log("Generated Number: " + generatedNumber);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// // Number Matching Promise
// conB.addEventListener("click", () => {
//   const newInput = parseInt(conn.value, 10);

//   if (generatedNumber === null) {
//     alert("Please confirm your password first.");
//     return;
//   }

//   const numberPromise = new Promise((resolve, reject) => {
//     if (newInput === generatedNumber) {
//       resolve("Welcome Bro");
//     } else {
//       reject("Wrong Number");
//     }
//   });

//   numberPromise
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });


const inp = document.getElementById("inp");
const btn = document.querySelector(".btn");
const display = document.querySelector(".hello");

const message = [];

btn.addEventListener("click", function() {
    const text = inp.value;
    
    if (text) {
        const msgIndex = message.length; // Capture the current index
        const newMessage = `
            ${text} 
            <button class="btn2" data-index="${msgIndex}">Delete</button>
        `;
        message.push(newMessage); // Add the message along with delete button to the array
        displayMessages();
        inp.value = ""; // Clear the input field
    }

    console.log(message);
    return message;
});

// Function to display messages
function displayMessages() {
    display.innerHTML = message.join('<br/>'); // Render all messages with line breaks

    // Add event listeners to all the dynamically created "Delete" buttons
    const deleteButtons = document.querySelectorAll(".btn2");
    deleteButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const index = this.getAttribute("data-index"); // Get the index of the message
            message.splice(index, 1); // Remove the message at that index
            displayMessages(); // Re-render the messages
        });
    });
}
