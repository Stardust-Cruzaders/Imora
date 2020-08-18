const {pool} = require('../database/config');

class ResidencesController {
    index(req,res){
        const {Available, price ,ResidencePlace,ResidenceType, AllowPets,AllowSmokers,Wifi, Kitchen, TV, AC, NotebookWork,Pool, Parking ,Grill,City} = req.query;
        const paramCount = Object.keys(req.query).length;
        if(paramCount == 0){
            return res.status(400).json({message: "You need to specify the paramaters of your query, at least the availability."});
        }
        else if(paramCount == 1){
            pool.query('SELECT residences.id, residences.residencename, residences.description, residences.images, residences.available, residences.zipcode, residences.state, residences.city, residences.neighborhood, residences.street, residencetype.type, residenceplace.place, residences.price, residences.allowsmokers, residences.allowpets, residences.wifi, residences.kitchen, residences.tv, residences.ac, residences.notebookwork, residences.grill, residences.pool, residences.parking, residences.numrooms, residences.numbathrooms, residences.mintime, residences.residentsnow, residences.maxresident, users.name FROM residences residences INNER JOIN residencetype residencetype ON residences.residencetype = residencetype.id INNER JOIN residenceplace residenceplace ON residences.residenceplace = residenceplace.id INNER JOIN users users  ON residences.ownerid = users.id WHERE (residences.available = true)', (err, result) => {
                if(err){
                    throw err;
                }
                else{
                    res.status(200).json(result.rows);
                }
            })
        }
        else {
            pool.query('SELECT residences.id, residences.residencename, residences.description, residences.images, residences.available, residences.zipcode, residences.state, residences.city, residences.neighborhood, residences.street, residencetype.type, residenceplace.place, residences.price, residences.allowsmokers, residences.allowpets, residences.wifi, residences.kitchen, residences.tv, residences.ac, residences.notebookwork, residences.grill, residences.pool, residences.parking, residences.numrooms, residences.numbathrooms, residences.mintime, residences.residentsnow, residences.maxresident, users.name FROM residences residences INNER JOIN residencetype residencetype ON residences.residencetype = residencetype.id INNER JOIN residenceplace residenceplace ON residences.residenceplace = residenceplace.id INNER JOIN users users  ON residences.ownerid = users.id WHERE (residences.available = true) AND ((CAST($1 AS FLOAT)) IS NULL OR (CAST(price as FLOAT)) < (CAST($1 AS FLOAT))) AND ((CAST($2 AS INTEGER)) IS NULL OR (CAST(residences.residenceplace AS INTEGER)) = (CAST($2 AS INTEGER))) AND ((CAST($3 AS INTEGER)) IS NULL OR (CAST(residences.residencetype AS INTEGER)) = (CAST($3 AS INTEGER))) AND (CAST($4 AS BOOLEAN) IS NULL OR CAST(residences.allowpets AS BOOLEAN) = CAST($4 AS BOOLEAN)) AND (CAST($5 AS BOOLEAN) IS NULL OR CAST(residences.allowsmokers AS BOOLEAN) = CAST($5 AS BOOLEAN)) AND (CAST($6 AS BOOLEAN) IS NULL OR CAST(residences.wifi AS BOOLEAN) = CAST($6 AS BOOLEAN)) AND (CAST($7 AS BOOLEAN) IS NULL OR CAST(residences.kitchen AS BOOLEAN) = CAST($7 AS BOOLEAN)) AND (CAST($8 AS BOOLEAN) IS NULL OR CAST(residences.tv AS BOOLEAN) = CAST($8 AS BOOLEAN)) AND (CAST($9 AS BOOLEAN) IS NULL OR CAST(residences.ac AS BOOLEAN) = CAST($9 AS BOOLEAN)) AND (CAST($10 AS BOOLEAN) IS NULL OR CAST(residences.notebookwork AS BOOLEAN) = CAST($10 AS BOOLEAN)) AND (CAST($11 AS BOOLEAN) IS NULL OR CAST(residences.grill AS BOOLEAN) = CAST($11 AS BOOLEAN)) AND (CAST($12 AS BOOLEAN) IS NULL OR CAST(residences.pool AS BOOLEAN) = CAST($12 AS BOOLEAN)) AND (CAST($13 AS BOOLEAN) IS NULL OR CAST(residences.parking AS BOOLEAN) = CAST($13 AS BOOLEAN)) AND (CAST($14 AS TEXT) IS NULL OR CAST(residences.city AS TEXT) = CAST($14 AS TEXT)) ORDER BY residences.residencename',
            [price, ResidencePlace,ResidenceType, AllowPets, AllowSmokers, Wifi, Kitchen, TV,  AC, NotebookWork, Grill, Pool, Parking, City],
            (err, result) => {
                if(err){
                    throw err;
                }
                else{
                    res.status(200).json(result.rows);
                }
            })
        }
    }
    create(req, res){
        const  {
                ResidenceName, Description, Images, Available, 
                ZipCode, State, City, Neighborhood, Street, 
                Numberr, ResidenceType, ResidencePlace, Price, 
                AllowSmokers, AllowPets,Wifi, Kitchen, TV, AC, NotebookWork, 
                Grill, Pool, Parking, NumRooms, NumBathrooms, MinTime, 
                ResidentsNow, MaxResident
               } = req.body;
        const { Id } = req.params; 
        pool.query('INSERT INTO Residences (ResidenceName, Description, Images,Available,Zipcode,State,City,Neighborhood,Street,Number,ResidenceType,ResidencePlace,Price,AllowSmokers,AllowPets,Wifi,Kitchen,TV,AC,NotebookWork,Grill,Pool, Parking, NumRooms, NumBathrooms, MinTime, ResidentsNow,MaxResident,OwnerId) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29)',
        [ResidenceName, Description, Images, Available, ZipCode, State, City, Neighborhood, Street, Numberr,ResidenceType, ResidencePlace, Price,
         AllowSmokers,AllowPets,Wifi, Kitchen, TV, AC, NotebookWork, Grill, Pool, Parking, NumRooms, NumBathrooms, MinTime, ResidentsNow, MaxResident, Id], (err) => {
             if(err){
                 throw err;
             }
             else {
                return res.status(201).json(req.body);
                
             }
         });
    }
    update(req, res){
        const  {
            ResidenceName, Description, Images, Available, 
            ZipCode, State, City, Neighborhood, Street, 
            Numberr, ResidenceType, ResidencePlace, Price, 
            AllowSmokers, AllowPets,Wifi, Kitchen, TV, AC, NotebookWork, 
            Grill, Pool, Parking, NumRooms, NumBathrooms, MinTime, 
            ResidentsNow, MaxResident
           } = req.body;
        const {houseId} = req.param;
        pool.query('UPDATE residences SET ResidenceName=$1, Description=$2, Images=$3,Available=$4,ZipCode=$5,State=$6, City=$7, Neighborhood=$8, Street=$9,Number=$10, ResidenceType=$11, ResidencePlace=$12, Price=$13, AllowSmokers=$14, AllowPets=$15, Wifi=$16, Kitchen=$17,TV=$18, AC=$19,NotebookWork=$20,Grill=$21,Pool=$22,Parking=$23,NumRooms=$24, NumBathrooms=$25, MinTime=$26, ResidentsNow=$27, MaxResident=$28 WHERE Id = $29',
        [ResidenceName,Description,Images,Available, ZipCode,
         State, City, Neighborhood, Street, Numberr, ResidenceType, ResidencePlace,
         Price, AllowSmokers, AllowPets, Wifi, Kitchen, TV, AC, NotebookWork, Grill,
         Pool, Parking, NumRooms, NumBathrooms, MinTime,ResidentsNow,MaxResident, houseId], (err, result) => {
             if(err){
                throw err;
             }
             else if(result.rowCount === 0){
                return res.status(404).json({message: `Residence with name ${ResidenceName} doesn't exist :c`});
             }
             else {
                 return res.status(200).json(req.body);
             }
         }); 
    }
    delete(req, res){
        const {Id} = req.query;
        pool.query('DELETE FROM residences WHERE Id=$1' [Id], (err, result) => {
            if(err){
                throw err;
            }
            if(result.rowCount === 0){
                return res.status(404).json({message: `Residence with Id ${Id} doesn't exist :c`});
            }
            else {
                return res.status(204).send();
            }
        })
    }
}
module.exports = ResidencesController;