/*
    This function is used to get the input type of a <form> element given its <label> name.
    Input: label name (string)
    
    Possible Values:
    - Name
    - Email
    - Profile Picture (File)
    - Phone Number
    - Password
*/
function getFormInputType(name:string){
    let inputType:string;

    if(name.match("Name"))
        inputType = "text";
    else if(name.match("Password"))
        inputType = "password";
    else if(name.match("Profile Picture"))
        inputType = "file";
    else if(name.match("Phone Number"))
        inputType = "text";
    else if(name.match("Password"))
        inputType = "password";
    else
        return "invalid";

    return inputType;
}

export default getFormInputType;