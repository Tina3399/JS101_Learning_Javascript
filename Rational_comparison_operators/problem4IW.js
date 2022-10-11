let storedUserName = "masai@gmail.com"
let storedPassword = "masai123"

let username = "masai@gmail.com"
let password = "masai123"

if(storedUserName==username){
  if(storedPassword==password){
    console.log("Logged in")
  }else{
    console.log("Incorrect Password")
  }
}else{
  console.log("Wrong Credentials")
}