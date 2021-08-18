const chalk=require('chalk');
const validator=require('validator')

console.log(chalk.green.underline.inverse("mann patel"));

const res=validator.isEmail("mannmcd@vdc.vlmmom");
console.log(res?chalk.green.inverse(res):chalk.red.inverse(res));
console.log("is credit card "+validator.default.isCreditCard("1234 5678 1234"))