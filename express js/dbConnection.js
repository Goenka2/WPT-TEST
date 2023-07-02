var mysql=require("mysql")
const mysqlconnection= mysql.createConnection({
    "host":"127.0.0.2",
    "user":"root",
    "password":"root123",
    "database":"test",
    "port":3306
})
mysqlconnection.connect((err)=>{
    if(err){
        console.log("connection failed"+JSON.stringify(err))
    }else{
        console.log("connection established")
    }
})

module.exports=mysqlconnection














//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root123';
