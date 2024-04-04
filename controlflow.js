
//Question One
function multiplyArr(arr){
  for(var i = 0; i< 4; i++){
    arr[i] *= arr[i]
  }
 for(var i = arr.length - 2; i<arr.length; i++){
    arr[i] +=10
 }
 console.log(arr);
}
const arr = [2,4,6,8,10,12];
multiplyArr(arr)

//Question Two
let arr1 = [1,2,3,4,5,6,7,8,9]
let i = 0
let idx = [4]
while (i < arr1.length){
   if( arr1[i] === idx){
    break;
   }
   i++;
}
console.log(arr1);

//Question 3
let fruits = ["apple","plum","banana","strawberries","kiwi"]
for( i = 0; i < fruits.length; i++){
 if (fruits[i] == 3){
   continue;
 }
 i++;
}
console.log(fruits);

//Question 4
const myStr = ["cow","boy","cat","cow","donkey"];
myStr.forEach(function(myStr){
   console.log(myStr);
});

//Question 5
 function reverse(String){
   let reverse = "";
   var s = String.length -1;
   while(s>=0){
    reverse += String[s]
    s--;
   }
   return reverse
 }
 let newStr1 = "Hello world"
 let a = reverse(newStr1);
 console.log(a);
 





