var Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
    let fullName = firstAndLast;

    this.getFirstName = () => fullName.split(" ")[0]
    this.getLastName = () => fullName.split(" ")[1]
    this.getFullName = () => fullName
    this.setFirstName = (first) => {
        fullName = first.concat(" " + fullName.split(" ")[1])
    }
    this.setLastName = (last) => {
        fullName = fullName.split(" ")[0].concat(" " + last)
    }
    this.setFullName = (newFullName) => fullName = newFullName
};

var bob = new Person('Bob Ross');

console.log(
    bob.getFullName()
    // bob.getFirstName()
    // bob.getLastName()
    // Object.keys(bob).length
);


