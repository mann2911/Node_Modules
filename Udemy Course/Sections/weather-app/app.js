const request=require("request");
const geoCode=require("./util/geoCode");
const forecast=require("./util/forecast");


let location=process.argv[2];
if(!location){
    console.log("Pl Provide Location!!!");
}
else
 {
    geoCode(location,(error,{longitude,latitude,location}={})=>{
        if(error){
            return console.log(error);
        }
        forecast(latitude,longitude,(error,forecastData)=>{
        if(error){
           return console.log("Error",error);
        }
        console.log(location)
        console.log(forecastData)
        })
    
    })
}


