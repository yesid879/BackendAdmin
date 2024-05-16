const mongoose = require ("mongoose");
require("dotenv").config({path:".env"});

const ConectarBD = async () =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('estamos conectados con mongodb'))
    .catch((err) => console.error(err));
}

module.exports = ConectarBD;