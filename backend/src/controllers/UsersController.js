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
                    return response.status(500).send("SQL syntax error");
                }
                else if(error.code === "42602"){
                    return response.status(500).send("invalid_name Description: A table or database name has incorrect capitalization, characters or a mixture of both errors.");
                }
                else if(error.code === "42622"){
                    return response.status(500).send("name_too_long Description: The identifier is longer than the 63-byte limit. This applies to names for databases, tables, schema, and other Postgres database object identifier names.");
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