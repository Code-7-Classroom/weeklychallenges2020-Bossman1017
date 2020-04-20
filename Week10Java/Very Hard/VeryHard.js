const input = (string) => {
    for(let i = 0; i < string.length; i++){
        let a = string.charAt(i)

        if(string.indexOf(a) == string.lastIndexOf(a)){
            return a;
        }
    }
}
console.log(input('what a wonderful day it has been!'));
