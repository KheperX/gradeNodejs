
const path = require("path");
const fs = require('fs');
fs.readFile('in.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
var score = data;
if( score >= 80 ) {
    result = "A";}
else if( score >= 75 ) {
    result = "B+";}
else if( score >= 70 ) {
    result = "B";}
else if( score >= 65 ) {
    result = "C+";}
else if( score >= 60 ) {
    result = "C";}
else {
    result = "F"
}
var result = "score is "+score+" Grade = "+result;

fs.writeFile(path.join(__dirname,'out.txt'),result,(err)=>{
    if(err) throw err;
    console.log('Write complete');
})
  
  
});


