const url="https://striveschool.herokuapp.com/api/product/";
 
const getEvents= async()=> {
let response= await fetch(url);
console.log(response);
return await response.json();
  };
 
const saveEvent = async () =>{
let response= await fetch(url,{
method:"POST",
body:JSON.stringify({
 
}),
headers: new Headers({
  "content-type":"application/json" ,
  "Authorization":`basic ${base64.encode(`${user29}:${w4X9FKLNUDSXwzYu}`)}`
})
});
return response;
};