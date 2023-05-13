
class Usuarios{
  constructor(nombre,password){
    this.nombre=nombre;
   this.password=password
  }
} 

var arrayOfUsers = [];
  // arrayOfUsers.push(tempUser.name);
  // arrayOfUsers.push(tempUser.password);
  function writerOfThings(){ 
    clean();
  arrayOfUsers=[]
    let nUsuario = new Usuarios("","");
  
    nUsuario.nombre= prompt('ingrese de que es la contraseña');
    nUsuario.password= prompt('ingrese la contraseña');
  
    nUsuario.password= encryptPassword(nUsuario.password);
    if(nUsuario.nombre!=null||nUsuario.password!=""){
      arrayOfUsers.push(nUsuario);
    }
  
    // Clear previous display

  
    // Display all users in arrayOfUsers
    for(let i = 0; i < arrayOfUsers.length; i++){
      document.getElementById('name').innerHTML += 'Platform : ' + arrayOfUsers[i].nombre + '<br>';
      document.getElementById('pass').innerHTML += 'Password : ' + arrayOfUsers[i].password + '<br>';
    }
 
  }
  


function encryptPassword(password) {
    const plainText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789|*&^%$#@/";	
    const cipherText = "sRpXnKgJzmwNcQlLaDxhGdYqjOyVfZbUvTAEeioIuMkFB40791823t6S5HCW@_#&^%$.|";
    let encrypted = "";
    for (let i = 0; i < password.length; i++) {
      const index = plainText.indexOf(password[i]);
      if (index !== -1) {
        encrypted += cipherText[index];
      } else {
        encrypted += password[i];
      }
    }
    return encrypted;
  }
  function clean(){
    arrayOfUsers = [];
    
 document.getElementById('name').innerHTML = '';
 document.getElementById('pass').innerHTML = '';
    
  console.log("done" + arrayOfUsers)

}
  function decryptPassword(encryptedPassword) {
    const plainText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const cipherText = "sRpXnKgJzmwNcQlLaDxhGdYqjOyVfZbUvTAEeioIuMkFB40791823t6S5HCW";
    let password = "";
    for (let i = 0; i < encryptedPassword.length; i++) {
      const index = cipherText.indexOf(encryptedPassword[i]);
      if (index !== -1) {
        password += plainText[index];
      } else {
        password += encryptedPassword[i];
      }
    }
    return password;
  }
  
