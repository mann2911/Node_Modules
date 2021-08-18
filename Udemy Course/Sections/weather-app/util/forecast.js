
const request=require("request");

const forecast=(latitude,longitude,callback)=>{

    const url="http://api.weatherstack.com/current?access_key=6cb539d3f2d516016e074b8157e863f3&query="+encodeURIComponent(latitude)+","+encodeURIComponent(longitude);

    request({url,json:true},(error,{body})=>{

        if(error){
            callback("Unable to connect weather services!!",undefined);        
        }else if(body.error){
            callback(response.body.error.info,undefined);
        }else{
            callback(undefined,"Weather "+body.current.weather_descriptions[0]+".It is currently "+body.current.temperature+" and feels like "+body.current.feelslike+" There is a "+body.current.precip+"% chance of rain")
        }
    })

}

module.exports=forecast;