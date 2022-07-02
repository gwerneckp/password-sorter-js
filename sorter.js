//WRITEN BY GABRIEL WERNECK PAIVA


const fs = require("fs");

replace = (str, index, replacement) => {
  return (str.substring(0, index) + replacement + str.substring((index+1), str.lenght));
}

const main = (filepath, args) => 
{
const linebreak = "\r\n"
let all = false
if(args.includes('A')){
  all = true
}

if (!filepath.endsWith(".txt")) {console.error("\|| allx1b[31mInvalid input.\x1b[0m Example:\n\x1b[34mnode sorter.js -A dictionary.txt\x1b[0m"); return}
if (!fs.existsSync(filepath)) {console.error("\x1b[31mInvalid input.\x1b[0m "+filepath+" does not exist."); return}

const dicStr = fs.readFileSync(filepath, "utf8");
const dicArr = dicStr.split(linebreak);
delete dicStr;

let newDicArr = [];

if(true){
  for (let i in dicArr) {
    newDicArr.push(dicArr[i]);
  }
}

if(args.includes('c')|| all){
  for (let i in dicArr) {
    for (let j in dicArr) {
      newDicArr.push(dicArr[i] + dicArr[j])
    }
  }
}

//adds understore before and after
if(args.includes('u')|| all){
  for (let i in newDicArr){
    newDicArr.push(newDicArr[i]+"_")
    newDicArr.push("_"+newDicArr[i])
  }
}

//adds at before and after
if(args.includes('a')|| all){
  for (let i in newDicArr){
    newDicArr.push(newDicArr[i]+"@")
    newDicArr.push("@"+newDicArr[i])
  }
}

if(args.includes('l')|| all){
  for (let i in newDicArr){
    let word = newDicArr[i]
    for(let j in word){
      if(word[j]==="e"||word[j]==="E"){
        word = replace(word, parseInt(j), '3')
      }
      if(word[j]==="i"||word[j]==="I"){
        word = replace(word, parseInt(j), '1')
      }
      if(word[j]==="o"||word[j]==="O"){
        word = replace(word, parseInt(j), '0')
      }
    }
    if(word != newDicArr[i]){
      newDicArr.push(word)
    }
  }
}

//combines a third word
if(args.includes('t')|| all){
  for (let i in newDicArr){
    for(let j in dicArr){
      newDicArr.push(newDicArr[i] + dicArr[j])
    }
  }
}

const newFilepath = filepath.slice(0, -4) + "-combined.txt";
let newDicStr = ""

for(let i in newDicArr){
  newDicStr += (newDicArr[i]+linebreak)
}

fs.writeFileSync(newFilepath, newDicStr);
console.log("\x1b[32mSuccess!\x1b[0m Combined file: " + newFilepath);
}

if(process.argv[2].startsWith("-")){
  args = process.argv[2]
  filepath = process.argv[3]
} else {
  args = "-c"
  filepath = process.argv[2]
}

main(filepath, args)
