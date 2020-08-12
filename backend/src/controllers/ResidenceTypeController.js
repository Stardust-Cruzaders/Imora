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
        const {Id} = req.query;
        const {Name} = req.body;
        if(Id != undefined || Id != null){
            pool.query('UPDATE residencetype SET Name =$1 WHERE Id=$2', [Name,Id], (err,result) => {
                if(err){
                    throw err;
                }
                else if(result.rowCount === 0){
                    res.status(404).send(`Residence type with Id ${Id} doesn't exist `)
                }
                else {
                    res.status(201).json({message: 'Residence type updated'})
                }
            })
        }
        else {
            res.status(400).send(`Id for updating residence type information is missing`);
        }
    }
    delete(req,res){
        const {Id} = req.query;
        if(Id != undefined || Id != null){
            pool.query('DELETE FROM residencetype WHERE Id=$1', [Id], (err, result) => {
                if(err){
                    throw err;
                }
                else if(result.rowCount === 0){
                    res.status(404).send(`Residence type with Id ${Id} doesn't exist `)
                }
                else {
                    res.status(200).json({message: 'Residence type deleted'})
                }
            })
        }
        else {
            res.status(400).send(`Id for updating residence type information is missing`);
        }
    }
}
module.exports = ResidenceTypeController;