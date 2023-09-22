var database = require("../database");

class Users {

    constructor(firstName) {
        this.firstName = firstName;
    }


}

const getUsers = async (req) => {

    const sql = "SELECT * FROM users WHERE fullName LIKE '%"+req+"%' ORDER BY fullName ASC";
    return new Promise((resolve, reject) => {
        database.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        });
    });


}



exports.getUsers = getUsers;





/*

module.export = function ()
{
    

    
    this.getUsers = function()
    {
        str = "SELECT * FROM users LIMIT 2";
        
        database.query(str, function (e, data) {
            if (e)
                throw e;
            else {
                let list = [{"firstName":"khawar"}];
                for (i = 0; i < data.length; i++) {
                    list.push({ "fullName": data[i].fullName });

                }
            }
        });
        console.log(str)
        return list;
    }



}
*/