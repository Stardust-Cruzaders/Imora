const {pool} = require('../database/config');

class ResidenceTypeController {

    async index(req,res){
        pool.query('SELECT * FROM residencetype', (err, results) => {
            if(err){
                throw err;
            }
            else{
                return res.status(200).send(results.rows);
            }
        });
    }
    async create(req,res){

    }
    async update(req,res){

    }
    async delete(req,res){

    }
}
module.exports = ResidenceTypeController;