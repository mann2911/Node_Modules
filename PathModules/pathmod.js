const path=require("path");

console.log("dir name"+path.dirname("C:/Users/HP/Desktop/Node Js/PathModules/pathmod.js"))
console.log("ext name"+path.extname("C:/Users/HP/Desktop/Node Js/PathModules/pathmod.js"))
console.log("path name"+path.basename("C:/Users/HP/Desktop/Node Js/PathModules/pathmod.js"))

console.log(path.parse("C:/Users/HP/Desktop/Node Js/PathModules/pathmod.js"))