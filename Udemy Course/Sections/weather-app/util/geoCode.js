const request = require("request");


const geoCode=(address,callback)=>{
    
    const url_geocode="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoibWFubnBhdGVsIiwiYSI6ImNrb3I2OG9zZzBlY24ydm1tdzJwaTF0bTUifQ.8Pn5k_5H6BmLNwCjC43dcw&limit=1"; // original url 

    request({url:url_geocode,json:true},(error,{body})=>{

        if(error){
            callback('Unable to connect the geo location api!!!',undefined);
        }else if(body.features.length===0){
            callback('Unable to match the geo locations. Pl try correct locations!!',undefined)
        }else{
            callback(undefined,{
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name
            })
        }
    })

}

module.exports=geoCode