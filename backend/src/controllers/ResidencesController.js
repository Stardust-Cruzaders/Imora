const {pool} = require('../database/config');

class ResidencesController {
    index(req,res){
        const {Available, price ,ResidencePlace,ResidenceType, AllowPets,AllowSmokers,Wifi, Kitchen, TV, AC, NotebookWork,Pool, Parking ,Grill,City} = req.query;
        const paramCount = Object.keys(req.query).length;
        if(paramCount == 0){
            return res.status(400).send("You need to specify the paramaters of your query, at least the availability.");
        }
        else if(paramCount == 1){
            pool.query('SELECT residences.name, residences.description, residences.images, residences.available, residences.zipcode, residences.state, residences.city, residences.neighborhood, residences.street, residencetype.name, residenceplace.name, residences.price, residences.allowsmokers, residences.allowpets, residences.wifi, residences.kitchen, residences.tv, residences.ac, residences.notebookwork, residences.grill, residences.pool, residences.parking, residences.numrooms, residences.numbathrooms, residences.mintime, residences.residentsnow, residences.maxresident, users.name FROM residences INNER JOIN residencetype ON residences.residencetype = residencetype.id INNER JOIN residenceplace ON residences.residenceplace = residenceplace.id INNER JOIN users  ON residences.ownerid = users.id WHERE residences.available =true', (err, result) => {
                if(err){
                    throw err;
                }
                else{
                    res.status(200).send(result.rows);
                }
            })
        }
        else{
            pool.query('SELECT residences.name, residences.description, residences.images, residences.available, residences.zipcode, residences.state, residences.city, residences.neighborhood, residences.street, residencetype.name, residenceplace.name, residences.price, residences.allowsmokers, residences.allowpets, residences.wifi, residences.kitchen, residences.tv, residences.ac, residences.notebookwork, residences.grill, residences.pool, residences.parking, residences.numrooms, residences.numbathrooms, residences.mintime, residences.residentsnow, residences.maxresident, users.name FROM residences INNER JOIN residencetype ON residences.residencetype = residencetype.id INNER JOIN residenceplace ON residences.residenceplace = residenceplace.id INNER JOIN users  ON residences.ownerid = users.id WHERE (residences.available = true) AND ((CAST($1 AS FLOAT)) IS NULL OR (CAST(price as FLOAT)) < (CAST($1 AS FLOAT))) AND ((CAST($2 AS INTEGER)) IS NULL OR (CAST(residences.residenceplace AS INTEGER)) = (CAST($2 AS INTEGER))) AND ((CAST($3 AS INTEGER)) IS NULL OR (CAST(residences.residencetype AS INTEGER)) = (CAST($3 AS INTEGER))) AND (CAST($4 AS BOOLEAN) IS NULL OR CAST(residences.allowpets AS BOOLEAN) = CAST($4 AS BOOLEAN)) AND (CAST($5 AS BOOLEAN) IS NULL OR CAST(residences.allowsmokers AS BOOLEAN) = CAST($5 AS BOOLEAN)) AND (CAST($6 AS BOOLEAN) IS NULL OR CAST(residences.wifi AS BOOLEAN) = CAST($6 AS BOOLEAN)) AND (CAST($7 AS BOOLEAN) IS NULL OR CAST(residences.kitchen AS BOOLEAN) = CAST($7 AS BOOLEAN)) AND (CAST($8 AS BOOLEAN) IS NULL OR CAST(residences.tv AS BOOLEAN) = CAST($8 AS BOOLEAN)) AND (CAST($9 AS BOOLEAN) IS NULL OR CAST(residences.ac AS BOOLEAN) = CAST($9 AS BOOLEAN)) AND (CAST($10 AS BOOLEAN) IS NULL OR CAST(residences.notebookwork AS BOOLEAN) = CAST($10 AS BOOLEAN)) AND (CAST($11 AS BOOLEAN) IS NULL OR CAST(residences.grill AS BOOLEAN) = CAST($11 AS BOOLEAN)) AND (CAST($12 AS BOOLEAN) IS NULL OR CAST(residences.pool AS BOOLEAN) = CAST($12 AS BOOLEAN)) AND (CAST($13 AS BOOLEAN) IS NULL OR CAST(residences.parking AS BOOLEAN) = CAST($13 AS BOOLEAN)) AND (CAST($14 AS TEXT) IS NULL OR CAST(residences.city AS TEXT) = CAST($14 AS TEXT))',
            [price, ResidencePlace,ResidenceType, AllowPets, AllowSmokers, Wifi, Kitchen, TV,  AC, NotebookWork, Grill, Pool, Parking, City],
            (err, result) => {
                if(err){
                    throw err;
                }
                else{
                    res.status(200).send(result.rows);
                }
            })
        }
    }
    create(req, res){

    }
    update(req, res){

    }
    delete(req, res){

    }
}
module.exports = ResidencesController;