var database = require("../database");
const date = require('date-and-time')


const findOne = async (req) => {
    const sql = "SELECT * FROM " + req.table + " WHERE " + req.key + " LIKE '%" + req.val + "%' ORDER BY fullName ASC";
    return new Promise((resolve, reject) => {
        database.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        });
    });
}

const create = async (req) => {
    const now = new Date();
    const createAt = date.format(now, "YYYY/MM/DD HH:mm:ss");

    const { firstName, lastName, email, password } = req;
    const fullName = firstName + ' ' + lastName;

    const sql = "INSERT INTO users_nodejs(email, pass, firstName, lastName, fullName, user_type, create_at) VALUES('" + email + "', '" + password + "', '" + firstName + "', '" + lastName + "', '" + fullName + "', 'NodeJS', '" + createAt + "')";
    return new Promise((resolve, reject) => {
        database.query(sql, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        });
    });

}


const deleteOne = (req) => {

    return req + " has been deleted";
}





exports.create = create;
exports.deleteOne = deleteOne;
exports.findOne = findOne;





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