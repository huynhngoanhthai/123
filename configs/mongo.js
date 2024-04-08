const mongoose = require("mongoose");
const { DATABASE_URL } = require("./constant");
const mongo = () => {
    mongoose.connect(DATABASE_URL).then(()=>{
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log("error: ", error);
    });

};
module.exports = mongo;