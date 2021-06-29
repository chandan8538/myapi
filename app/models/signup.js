import pkg from 'pg';
const { Pool } = pkg;
import { psqlConfig } from '../config/postgresConfig.js';

const pool = new Pool({
    connectionString: psqlConfig,
});
pool.on('error', (error) => {
    console.info("Unexpected error on idle client", error);
    process.exit(-1);
})

export const createTestDB = async() => {
    const client = await pool.connect();

    let query = 'create table signup( firstname varchar(50), lastname varchar(50), email varchar(50) , mobile varchar(13) primary key , password varchar(50), cpassword varchar(50), gender varchar(50))';

    try {
        let resp = await client.query(query)
        console.log(resp);
        return resp;
    } catch (e) {

        return false;
    } finally {
        client.release();
    }
}
createTestDB();
export const insertLoginUser = async(firstname, lastname, email, mobile, password, cpassword, gender) => {
        const client = await pool.connect();

        let query = `INSERT INTO signup(firstname, lastname, email, mobile, password, cpassword, gender ) VALUES('${firstname}', '${lastname}', '${email}', '${mobile}', '${password}', '${cpassword}', '${gender}'  ) RETURNING *`;

        try {
            let resp = await client.query(query)
            console.log(resp);
            return { success: true, data: resp.rows };;
        } catch (e) {
            let message = "some error occured";
            return { success: false, message };
        } finally {
            client.release();
        }
    }
    //insertLoginUser("chandan", "kumar", "chandanabc@gmail.com", 986689636798, 1234, 1234, "male");
    // insertLoginUser(1234578, "rahul kumar", "abc@gmail.com", "msrit", "blr", "male");
    // export const selectLoginUser = async(mobile) => {
export const selectLoginUser = async() => {
    const client = await pool.connect();
    // console.log('from db', mobile);
    console.log('from db');
    //let query = `SELECT * FROM signup WHERE mobile = '${mobile}'  `;
    let query = `SELECT * FROM signup`;
    try {
        let resp = await client.query(query)
        console.log(resp.rows);
        return { success: true, data: resp.rows };
    } catch (e) {
        console.log(e.message);
        let message = "Some Error occured";
        return { success: false, message };
    } finally {
        client.release();
    }
}


//selectLoginUser();






//insertLoginUser('7903039306',)




//createTestDB();