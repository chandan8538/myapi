import { selectLoginUser, insertLoginUser } from '../models/signup.js';
// export const selectservice = async(mobile) => {
//     console.log('from service', mobile);
//     let response = await selectLoginUser(mobile)
export const selectservice = async() => {
    //console.log('from service');
    let response = await selectLoginUser()

    console.log(response);
    return response;
}

export const insertservice = async(firstname, lastname, email, mobile, password, cpassword, gender) => {
    try {
        let response = await insertLoginUser(firstname, lastname, email, mobile, password, cpassword, gender)
        console.log(response);
        return response;
    } catch (e) {
        console.log(e.message)
    }
}


//selectservice();