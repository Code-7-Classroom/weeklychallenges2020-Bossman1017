var arr = [1,2,5,8,3,6];
var target = 6;
 function medIndex(arr, target) {
       
   if (arr.indexOf(target) != -1) {
       return arr.indexOf(target);
   }
   else{
       return -1;
   }
};
console.log(medIndex([1,2,5,8,3,6], 6));