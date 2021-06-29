//import { selectLoginUser, insertLoginUser } from '../models/test.js';
import { selectLoginUser, insertLoginUser } from '../models/signup.js';
// export const selectservice = async(mobile) => {
//     console.log('from service', mobile);
//     let response = await selectLoginUser(mobile)
export const selectservice = async() => {
    console.log('from service');
    let response = await selectLoginUser()
    
    console.log(response);
    return response;
}

export const insertservice = async(firstname, lastname, email, mobile, password, cpassword, gender) => {
    let response = await insertLoginUser(firstname, lastname, email, mobile, password, cpassword, gender)
    console.log(response);
    return response;
}


// export const insertservice = async(mobile, name, email, college, city, gender) => {
//     let response = await insertLoginUser(mobile, name, email, college, city, gender)
//     console.log(response);
//     return response;
// }

//selectservice();