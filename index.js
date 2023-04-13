function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function validateForm()
{
     var retVal=true;
clearErrors();
    var name = document.forms['myForm']['fname'].value;

    if(name.length<5)
    {
        seterror("name","*Length of name is too short");
        retVal= false;
        // return false;
    }

    var email = document.forms['myForm']["femail"].value;
    if(email.length>15)
    {
        seterror("email","*Length of email is too long");
        retVal = false;
    }

    var phone = document.forms['myForm']['fphone'].value;
    if(phone.length != 10)
    {
        seterror("phone","Phonw number not in specific");
        retVal=false;
    }
  
    var password = document.forms['myForm']['fpass'].value;
    if(password.length <6)
    {
        seterror("pass","Password should be atleast 6 char ");
        retVal=false;
    }

    var cPass= document.forms['myForm']["fCpass"].value;
    if(cPass != password)
    {
        seterror("cpass","Password and Confirm Password not match");
        retVal= false;
    }

    return retVal;
}