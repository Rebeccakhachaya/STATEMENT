function check(){
    name=prompt("Enter Your name")
    alert ("You are from AkiraChix")
    location=prompt("Enter your area of residence")
    alert ("Interesting")
    address=prompt("email address ")
    alert("Make sure your email address has your formal names ")
    function years(age){
        age=prompt("Enter your age ")
        if(age<18){
        alert("Uder age");
         }else if(age>18 &&  age<30){
             alert ("YOU ARE AN ADULT");
         }else{
            alert( "BE RESPONSIBLE")
            }        
            function checkPassword(password){
                        
                    if(password.length<4){
                       alert("INCOMPLETE")
                   }else if(password.length>4){
                       alert( "CONTINUE WITH THE APPLICATION")
                   }else if(password.length>4 && password.length<15){
                       alert("EIGHT CHARACTERS REQUIRED")
                   }else{
                       alert ("INVALD PASSWORD")
                   }
            }
                checkPassword(prompt("Enter your password  to sign up for the application"));
         }
     
       
             years();
            check();
            checkPassword()
 }
     check();
    


// function check(){
//     age=prompt("Enter Your age")
//     if(age>4){
//         alert("Under age")
//     }
//     else{
//         alert("Over")
//     }
// }
// check()

     
