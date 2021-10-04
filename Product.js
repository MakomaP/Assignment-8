function calculateMyAge(yearOfBirth){
    let currentYear = new Date().getFullYear();
    console.log('current year', currentYear)
    myAge = currentYear - yearOfBirth;
    return myAge

}
function displayAge(name,yearOfBirth){
    let age = calculateMyAge(yearOfBirth);
    message = "Your name is " + name + "and your age is " +age;
    console.log(message);
   
}
displayAge("Makoma", 1995)


