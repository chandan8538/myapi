import { selectLoginUser, insertLoginUser } from '../models/test.js';

export const selectservice = async()=>{
    let response = await selectLoginUser()
    console.log(response);
    return response;
}

export const insertservice  = async(mobile,name,email,college,city,gender)=>{
    let response = await insertLoginUser(mobile, name, email,college,city,gender)
    console.log(response);
    return response;
}

selectservice();

