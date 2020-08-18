const {pool} = require('../database/config');

class UsersController {

    index(req,res){
        pool.query('SELECT * FROM users', (error, results) => {
            if(error){
                throw error
            }
            return res.status(200).send(results.rows);
        });
    }

    create(req, res){
        const {Name, Email, Avatar,Bio, IsHost, Phone} = req.body;
        pool.query('INSERT INTO users(Name,Email,Avatar,Bio,IsHost,Phone) VALUES($1,$2,$3,$4,$5,$6)', 
        [Name,Email,Avatar,Bio,IsHost, Phone], (error) => {
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
            res.status(201).json(req.body);
        })
    }
    update(req,res) {
        const {Name, Email, Avatar,Bio, IsHost, Phone} = req.body;
        const {Id} = req.params;
        if(Id != null || Id != undefined){
            pool.query('UPDATE users set Name =$1, Avatar =$2, Bio =$3, IsHost =$4, Phone =$5 WHERE Id =$6',  
            [Name,Avatar,Bio,IsHost, Phone, Id], (error, result) => {
                if(error){
                    if(error.code === "42601") {
                        return res.status(500).json({message: "SQL syntax error"});
                    }
                    else if(error.code === "42602"){
                        return res.status(500).json({message: "invalid_name Description: A table or database name has incorrect capitalization, characters or a mixture of both errors."});
                    }
                    else if(error.code === "42622"){
                        return res.status(500).json({message: "name_too_long Description: The identifier is longer than the 63-byte limit. This applies to names for databases, tables, schema, and other Postgres database object identifier names."});
                    }
                    else{
                        throw error
                    }
                }
                else if(result.rowCount === 0){
                    return res.status(404).json({message: `User with Id ${Id} doesn't exist :c`});
                    
                }
                else{
                    return res.status(201).json(req.body);
                }
            })
        }
        else{
            res.status(400).json({message: 'Id for updating user information is missing'});
        }
        
    }
    delete(req,res){
        const {Id} = req.params;
        if(Id != undefined || Id != null){
            pool.query('DELETE FROM users WHERE Id=$1', [Id], (error,result) => {
                if(error){
                    if(error.code === "42601") {
                        return res.status(500).json({message: "SQL syntax error"});
                    }
                    else if(error.code === "42602"){
                        return res.status(500).json({message: "invalid_name Description: A table or database name has incorrect capitalization, characters or a mixture of both errors."});
                    }
                    else if(error.code === "42622"){
                        return res.status(500).json({message: "name_too_long Description: The identifier is longer than the 63-byte limit. This applies to names for databases, tables, schema, and other Postgres database object identifier names."});
                    }
                    else{
                        throw error
                    }
                }
                if(result.rowCount === 0){
                    return res.status(404).json({message: `User with Id ${Id} doesn't exist :c`});
                }
                else {
                    return res.status(204).send();
                }
            });
        }
        else {
            res.status(400).json({message: 'Id for deleting user information is missing'});
        }

    } 
}
module.exports = UsersController;