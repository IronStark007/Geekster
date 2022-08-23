const { Client } = require('pg')


const client = new Client(process.env.DATABASE_URL)
client.connect(err=>{
    if (err){
        console.log(err);
    }else {
        console.log('Connected to database!')
    }
})


module.exports = client;