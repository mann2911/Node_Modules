
const add=(num1,num2)=>{

    return num1+num2;
}
const sub=(num1,num2)=>{

    return num1-num2;
}
const alert=()=>{
    console.log("älert called");
}
// module.exports.add=add;
// module.exports.sub=sub;
module.exports={add,sub,alert}