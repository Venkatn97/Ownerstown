const express = require('express')
const app = express()
const port = 3000;
var cors = require('cors');
app.use(cors());

app.post('/', (req, res) => 
{
 req.on('data', function (chunk) 
 {
       
        res.send(getSupe(chunk.toString('utf-8')))
 });
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

const superheros = [
  "SUPERMAN",
  "THOR",
  "ROBIN",
  "IRONMAN",
  "GHOSTRIDER",
  "CAPTAINAMERICA",
  "FLASH",
  "WOLVERINE",
  "BATMAN",
  "HULK",
  "BLADE",
  "PHANTOM",
  "SPIDERMAN",
  "BLACKWIDOW",
  "HELLBOY",
  "PUNISHER"
];

const keys = {
  1: ["@", ".", "?"],
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"]
};

function getSupe(code) {
   
   code=code.slice(0,code.length-1);

  code= code.split(" ")[1];

  const supes = superheros.filter((supe) => supe.length === code.length);
  let index = 0;
  let filteredSupes =[];
  while (index <code.length)
   {
        filteredSupes = supes.filter((supe) => keys[code[index]].includes(supe[index]));
        ++index;
  }
  
    
  return filteredSupes;

  }