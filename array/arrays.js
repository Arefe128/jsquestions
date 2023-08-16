// forEach:
// const items = ["a", "b", "c", "d", "e"];

//         function forEach(arr, func) {
//             for (let i = 0; i < arr.length; i++) {
//                 func(arr[i], i, arr);
//             }
//         }

//         function print(item, index, array) {
//             const result = `item:(${item})/index:(${index})/array:(${array})`;
//             return result;
//         }

//         forEach(items, print);



// filter:
// const items = [9,4,7,2,1,5,3,7,8,9,3,8,1,5,9,6];

//         function myFilter(arr, func) {
//             for (let i = 0; i < arr.length; i++) {
//                 func(arr[i]);
//             }
//             return result;
//         }

//         const result = [];

//         function getFilter(element) {
//            if(element > 3){
//             result.push(element);
//            }
//         }

//         myFilter(items, getFilter);




// map:
// const items = ["a", "b", "c", "d", "e"];

//         function myMap(arr, func) {
//             for (let i = 0; i < arr.length; i++) {
//                 func(arr[i], i, arr);
//             }

//         }

//         function print(item,index,array){
//            return (item,index,array);
//         }

//         myMap(items,print);



// some:
// const items = [8, 4, 7, 2, 1, 5, 3, 7];

// function mySome(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return true;
//         }
//     }
//     return false;
// }

// function print(element) {
//     // true:
//     return element > 4;
//     // false:
//     // return element > 9;
// }

// mySome(items, print);



// every:
// const items = [8, 4, 7, 2, 1, 5, 3, 7];

// function myEvery(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!func(arr[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// function print(element) {
//     // true:
//     return element > 0;
//     // false:
//     // return element > 4;
// }

// myEvery(items, print);



// find:
// const items = [4, 7, 2, 1, 5, 8, 3, 7, 9];

// function myFind(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return arr[i];
//         }

//     }
// }

// function print(element) {
//     return element > 7;
// }

// myFind(items, print);



// findindex:
// const items = [4, 7, 2, 1, 5, 8, 3, 7, 9];

// function myFindindex(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return i;
//         }

//     }
// }

// function print(element) {
//     return element > 7;
// }

// myFindindex(items, print);



// join:
// const items = ['a', 2, 6, 'c', 8, 'j', 'n', 'd', 6]

// function myJoin(item, comma = "/") {
//     let result = "";
//     for (let i = 0; i < item.length; i++) {
//         result += item[i];
//         if (i < item.length - 1) {
//             result += comma;
//         }
//     }
//     return result;

// }

// myJoin(items);



// reduce:
// const numbers = [2,5,7,6,9,4,8,1,3];

//         function myReduce(arr,func,element){
//             let result = element;
//             for(let i=0; i<arr.length; i++){
//                 result = func(result,arr[i]);
//             }
//             return result;
//         }

//         function sum(x,y){
//             return x+y;
//         }

//         myReduce(numbers,sum,0);