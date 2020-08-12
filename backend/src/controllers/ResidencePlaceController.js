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
        const {Name} = req.body;
        pool.query('INSERT INTO residenceplace(Name) VALUES($1)', [Name], (err) => {
            if(err){
                throw err;
            }
            else {
                res.status(201).json({message: `Residence Place ${Name} Added`});
            }
        });
    }
    update(req,res){
        const {Id} = req.query;
        const {Name} = req.body;
        if(Id != undefined || Id != null){
            pool.query('UPDATE residenceplace SET Name =$1 WHERE Id=$2', [Name,Id], (err,result) => {
                if(err){
                    throw err;
                }
                else if(result.rowCount === 0){
                    res.status(404).send(`Residence place with Id ${Id} doesn't exist `)
                }
                else {
                    res.status(201).json({message: 'Residence place updated'})
                }
            })
        }
        else {
            res.status(400).send(`Id for updating residence place information is missing`);
        }
    }
    delete(req,res){
        const {Id} = req.query;
        if(Id != undefined || Id != null){
            pool.query('DELETE FROM residenceplace WHERE Id=$1', [Id], (err, result) => {
                if(err){
                    throw err;
                }
                else if(result.rowCount === 0){
                    res.status(404).send(`Residence place with Id ${Id} doesn't exist `)
                }
                else {
                    res.status(200).json({message: 'Residence place deleted'})
                }
            })
        }
        else {
            res.status(400).send(`Id for updating residence place information is missing`);
        }
    }
}
module.exports = ResidencePlaceController;