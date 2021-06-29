import { insertservice, selectservice } from "../services/testfileservice.js";
//export const selectController = async(ctx) => {
export const selectController = async(ctx) => {

    try {
        const response = await selectservice();
        ctx.status = 200;
        ctx.body = response;
    } catch (e) {
        console.log(e.message)
        ctx.status = 500;
        ctx.body = { success: false, message: e.message };
    }
}

//     try {
//         const params = ctx.request.body;
//         console.log('ctx.body', ctx);
//         //const mobile = params.mobile;
//         // console.log('from controller', mobile);
//         // const response = await selectservice(mobile);
//         console.log('from controller');
//         const response = await selectservice();
//         ctx.status = 200;
//         ctx.body = response;
//     } catch (e) {
//         console.log(e.message)
//         ctx.status = 500;
//         ctx.body = { success: false, message: e.message };
//     }
// }

export const insertController = async(ctx) => {

    try {
        const params = ctx.request.body;
        const firstname = params.firstname;
        const lastname = params.lastname;
        const email = params.email;
        const mobile = params.mobile;
        const password = params.password;
        const cpassword = params.cpassword;
        const gender = params.gender;
        //const {mobile, name, email} = params; 

        //const response = await insertservice("mobile" :"123456789", "name" : "chandan", "email" : "abc12@gmail.com", "college" : "rit", "city" : "blr", "gender" : "male");
        //const response = await insertservice("firstname":"raj", "lastname":"aaryan", "email":"abcder@gmail.com", "mobile":"769475674",  "password":"1234", "cpassword":"1234", "gender":"male");
        const response = await insertservice(firstname, lastname, email, mobile, password, cpassword, gender);
        ctx.status = 200;
        ctx.body = response;
    } catch (e) {
        console.log(e.message)
        ctx.status = 500;
        ctx.body = { success: false, message: e.message };
    }
}