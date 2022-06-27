const mongoose = require("mongoose");



const connectToDatabase = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.DB_STRING);
        console.log('Mongoose connected successfully!');
    } catch (error) {
        console.log('An error occured!')
    }
}


module.exports = connectToDatabase;