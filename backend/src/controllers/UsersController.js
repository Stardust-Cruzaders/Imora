const {pool} = require('../database/config');

class UsersController {

    async index(req,res){
        await pool.query('SELECT * FROM users', (error, results) => {
            if(error){
                throw error
            }
            return res.status(200).send(results.rows);
        });
    }

    async create(req, res){
        const {Name, Email, Avatar,Description, IsHost, Phone} = req.body;
        await pool.query('INSERT INTO users(Name,Email,Avatar,Description,IsHost,Phone) VALUES($1,$2,$3,$4,$5,$6)', 
        [Name,Email,Avatar,Description,IsHost, Phone], (error) => {
            if(error){
                if(error.code === '23505'){
                    return res.status(400).send('A user with that email already exists');
                }
                else if(error.code === "42601") {
                    return res.status(500).send("SQL syntax error");
                }
                else if(error.code === "42602"){
                    return res.status(500).send("invalid_name Description: A table or database name has incorrect capitalization, characters or a mixture of both errors.");
                }
                else if(error.code === "42622"){
                    return res.status(500).send("name_too_long Description: The identifier is longer than the 63-byte limit. This applies to names for databases, tables, schema, and other Postgres database object identifier names.");
                }
                else{
                    throw error
                }
            }
            res.status(201).json({status: 'success', message: 'User Added'});
        })
    }
    update(req,res) {
        const {Name, Email, Avatar,Description, IsHost, Phone} = req.body;
        const {Id} = req.query;
        if(Id !== null || Id !== undefined){
            pool.query('UPDATE users set Name =$1, Avatar =$2, Description =$3, IsHost =$4, Phone =$5 WHERE Id =$6',  
            [Name,Avatar,Description,IsHost, Phone, Id], (error, result) => {
                if(error){
                    if(error.code === "42601") {
                        return res.status(500).send("SQL syntax error");
                    }
                    else if(error.code === "42602"){
                        return res.status(500).send("invalid_name Description: A table or database name has incorrect capitalization, characters or a mixture of both errors.");
                    }
                    else if(error.code === "42622"){
                        return res.status(500).send("name_too_long Description: The identifier is longer than the 63-byte limit. This applies to names for databases, tables, schema, and other Postgres database object identifier names.");
                    }
                    else{
                        throw error
                    }
                }
                else if(result.rowCount === 0){
                    return res.status(404).send(`User with Id ${Id} doesn't exist :c`);
                    
                }
                else{
                    return res.status(201).json({status: 'success', message: `User with Id ${Id} Modified`});
                }
            })
        }
        else{
            res.status(400).send('Id for updating user information is missing');
        }
        
    }
    async delete(req,res){

    } 
}
module.exports = UsersController;