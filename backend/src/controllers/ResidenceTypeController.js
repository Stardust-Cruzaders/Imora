const {pool} = require('../database/config');

class ResidenceTypeController {

    index(req,res){
        pool.query('SELECT * FROM residencetype', (err, results) => {
            if(err){
                throw err;
            }
            else{
                return res.status(200).send(results.rows);
            }
        });
    }
    create(req,res){
        const {Name} = req.body;
        pool.query('INSERT INTO residencetype(Name) VALUES($1)', [Name], (err) => {
            if(err){
                throw err;
            }
            else {
                res.status(201).json({message: `Residence Type ${Name} Added`});
            }
        });
    }
    update(req,res){

    }
    delete(req,res){

    }
}
module.exports = ResidenceTypeController;