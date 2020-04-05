
function pii(name, ssn) {
    let _name = name;
    let _ssn = ssn;
    return {
        getName() {
            return name;
        }

    }
}
me =pii("Naven",83734748);
console.log(me.getName());