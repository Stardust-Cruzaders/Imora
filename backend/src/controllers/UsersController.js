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
        await pool.query('INSER INTO users(Name,Email,Avatar,Description,IsHost,Phone) VALUES($1,$2,$3,$4,$5,$6)', 
        [Name,Email,Avatar,Description,IsHost, Phone], (error) => {
            if(error){
                if(error.code === '23505'){
                    return response.status(400).send('A user with that email already exists');
                }
                else if(error.code === "42601") {
                    console.log("SQL syntax error position:", error.position);
                    return response.status(500).send("SQL syntax error");
                }
                else{
                    throw error
                }
            }
            
            response.status(201).json({status: 'success', message: 'User Added'});
        })
    }
}
module.exports = UsersController;