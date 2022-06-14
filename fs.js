const fs = require('fs')
const path = require('path')

// papka yaratish
fs.mkdir(path.join(__dirname, 'public'), {}, err =>{
    if(err) throw err
    console.log('Create file');
})

//file yaratish 
fs.writeFile(path.join(__dirname, 'main.txt'), "Assalomu alekum", (err)=>{
    if(err) throw err
    console.log('file yartildi');
})

//edit files
fs.appendFile(path.join(__dirname, 'main.txt'), "Assalomu alekum nima gap", (err)=>{
    if(err) throw err
    console.log('file yartildi');
})

// fileni ichini oqish
fs.readFile(path.join(__dirname, 'main.txt'), 'utf-8', (err,data)=>{
    if(err) throw err
    console.log(data);
})

// rename file
fs.rename(
    path.join(__dirname, 'main.txt'),
    path.join(__dirname, 'nimagap.txt'),
    (err) => {
        if (err) throw err
        console.log('Rename');
    })