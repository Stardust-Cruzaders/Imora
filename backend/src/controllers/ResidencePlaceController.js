const {pool} = require('../database/config');

class ResidencePlaceController {

    index(req,res){
        pool.query('SELECT * FROM residenceplace', (err, result) => {
            if(err){
                throw err;
            }
            else{
                res.status(200).send(result.rows);
            }
        })
    }
    create(req,res){

    }
    update(req, res){

    }
    delete(req, res){

    }
}
module.exports = ResidencePlaceController;