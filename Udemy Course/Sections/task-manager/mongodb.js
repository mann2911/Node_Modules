const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

const connectionUrl = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(connectionUrl,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log("Unable to connect to database!!!");
    }

    console.log("Databse connected Successfully!!!");

    const db=client.db(databaseName);
    // db.collection('users').insertOne({
    //     name:'mann',
    //     age:22

    // },(error,result)=>{
    //     if(error){
    //         return console.log("unable to insert!!!")
    //     }
    // console.log(result.ops);})

    // db.collection('users').insertMany([
    //     {
    //         name:'tirth',
    //         age:20
    //     },
    //     {
    //         name:'hetu',
    //         age:22,
    //         hobby:"listing music"
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log("error in insert many");
    //     }
    //     console.log("inserted many docs")
    // })

    db.collection('tasks').insertMany([
        {
            description:"eat",
            completed:false
        },
        {
            description:"code",
            completed:true
        },
        {
            description:"sleep",
            completed:true
        },
    ],(error,result)=>{
        if(error){
            return console.log("error in ïnsert many in tasks");
        }
        console.log(result.ops);
    })
})