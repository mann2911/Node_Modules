const validator=require('validator');
const chalk=require('chalk')
const email="mannpatel1360gmail.com";
console.log(validator.default.isEmail(email));
console.log(validator.default.isURL("http//mann.org"));
console.log(chalk.blue.bold.inverse("Red"));