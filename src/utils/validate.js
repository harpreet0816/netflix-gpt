export const checkValidData = (email, password, name)=>{
    const checkEmail = /^\S+@\S+\.\S+$/.test(email);
    const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(password);
    if(name != "netflix"){
        const checkName = /^\S/g.test(name);
        if(!checkName){
            return "Name must start with character"
        }
    }
    if(!checkEmail){
        return "Email is not valid"
    }
    if(!checkPassword){
        return "Password is not valid"
    }
    return null;
}