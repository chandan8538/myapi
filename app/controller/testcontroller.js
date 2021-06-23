import { insertservice,selectservice } from "../services/testservice.js";
export const selectController = async(ctx) => {

    try{
      const response = await selectservice();
      ctx.status = 200;
      ctx.body = response;
    }
    catch(e){
      console.log(e.message)
      ctx.status = 500;
      ctx.body = { success : false, message: e.message };
    }
  }

  export const insertController = async(ctx) => {

    try{
      const params = ctx.request.body;
      const mobile = params.mobile;
      const email = params.email;
      const name = params.name;
      const college = params.college;
      const city = params.city;
      const gender = params.gender;
      //const {mobile, name, email} = params; 

      //const response = await insertservice("mobile" :"123456789", "name" : "chandan", "email" : "abc12@gmail.com", "college" : "rit", "city" : "blr", "gender" : "male");
      const response = await insertservice(mobile, email, name, college, city, gender);
      ctx.status = 200;
      ctx.body = response;
    }
    catch(e){
      console.log(e.message)
      ctx.status = 500;
      ctx.body = { success : false, message: e.message };
    }
  }