import $  from "jquery"



const api = "https://papa-api.herokuapp.com"
 
       

//const api = "http://localhost:8080"
 
 
  







export function getSurah(name){
    
    var d =  encodeURIComponent(name)
    
    var url = api+"/surah.php?name=";
    
    return new Promise(function(resolve, reject) {
        $.get(url+d, function(data){
            
            var d = JSON.parse(data)
            resolve(d)
        
        })
    })
    
}





export function allSurah(){
    
    return new Promise(function(resolve, reject) {
        $.get(api+"/all-surah.php", function(data){
            
            //console.log(data)
            
            resolve(data)
        
        })
    })
    
}