const mongoose = require("mongoose");

const connection = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:/my_blog")

        console.log("you are connect correctly at my_blog");

    } catch (error) {
        console.log(error);
        throw new Error("Do not connnected at data base")
    }
}

module.exports = {
    connection
}