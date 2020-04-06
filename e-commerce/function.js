

// A function with a parameter
// A variable to equal the parameter
// A function inside of previous function that returns the previous variable that was just set
function exercise(activity){
var task = activity
function goal(){
    return('Today\'s Exercise ' + task);
}
}
var run = exercise('running');
console.log(run()); 
var swim = exercise('swimming');
console.log(swim());
