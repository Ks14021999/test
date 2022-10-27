const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb+srv://ks14:qazwsxedc@mern1.xq4bs.mongodb.net/test?retryWrites=true&w=majority');
    console.log('Database connected');
};

module.exports;