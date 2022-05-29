const dotenv=require ("dotenv");
dotenv.config();

const mongoose = require ("mongoose")

const DB_URL= "mongodb://localhost:27017/escuderias";

const mongoDB= process.env.MONGO_DB;

const connect = async () => {
    try {
        const DB = await mongoose.connect(mongoDB, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log (DB.connection)


        const {name, host} = DB.connection;
        console.log(`Connected to ${name} DB in host ${host}`)

    } catch (error) {

        console.log ("Error connecting to DB, error")

    }

}

module.exports = {connect};




