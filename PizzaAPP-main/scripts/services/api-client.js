//Network Call
import URL from "../utils/constant.js";
async function doNetworkCall(){
    //const url='https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json'
//     const promise=fetch(url);
//    promise.then(response=>{
//       console.log('response is',response);
//      const promise2= response.json();//Deserialization of json
//      promise2.then(data=>console.log('Data is',data))
//      .catch(e=>console.log('JSON parse error',e));

//    }).catch(err=>{
//       console.log('Error is',err);
//    })
try{
const response=await fetch(URL);//Block
const object=await response.json();//Block
console.log(object);
return object;
}
catch(err){
    console.log('Some Problem in API Call',err);
    throw err;
}
}
export default doNetworkCall;