const fs = require('fs');

const filePath = "accounts.txt";
let accounts = [];
let name = ["Qays","Drue","Abhinav","Afrida","Reyna","Hitendra","Hemlata","Jihao","Sam","Champaklal","Keshanth","Shiejan","Rohit","Fahim","Masih","Arsal","Aisha","Hazim","Momin","Amir","Prithvi","Justin","Ming","Han","Nigel","Mark","Victor","Adil","Kalawati","Archi","Ramin","Hamid","Geethan","Michael","Abesan","Mabroor","Arian","Harjas","Mantej","Elaf","Richard","Ali"];

function generateAccount(length){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < 6; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        for(let j = 0; j < name.length; j++){
            accounts.push(name[j].toString() + `${result}@bittymails.com`);
    }
}

function save() {
    try{
        if(fs.existsSync(filePath)){
            fs.writeFileSync(filePath, accounts.join("\n"));
        }
        else{
            const fd = fs.openSync(filePath , 'w');
            fs.writeFileSync(filePath , accounts.join("\n"));
        }
    }
    catch(err){
        console.log(err)
    }
}

for(let i = 0; i < 500; i++){
    generateAccount()
}
save();