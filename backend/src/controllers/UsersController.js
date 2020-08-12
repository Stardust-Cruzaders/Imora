const {pool} = require('../database/config');

class UsersController {

    async index(request,response){
        await pool.query('SELECT * FROM users', (error, results) => {
            if(error){
                throw error
            }
            return response.status(200).send(results.rows);
        });
    }

    async create(request, response){
        const {Name, Email, Avatar,Description, IsHost, Phone} = request.body;
        console.log(Name, Email, Avatar,Description, IsHost, Phone);
        return response.status(201).send();
    }
}
module.exports = UsersController;