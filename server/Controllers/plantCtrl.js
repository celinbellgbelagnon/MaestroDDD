const database = require('../Config/mysql')

exports.getPlantType = (req, res)=>{

    database.query('SELECT * from plant', (error, result)=>{ 
        if (error) throw error
        res.status(201).json({plant: result})
    })
} 

exports.AddNewCommande = (req, res) =>{
    let addNewquery = 'insert into plant_commande(plant_commande, date_commande) VALUES (?,?)'
    database.query(
        addNewquery,
        [
            req.body.plant,
            req.body.date
        ],
        (error, result)=>{
            if (error) throw error 
            res.status(201).json({message: "New command add"})
        }
    )
}

exports.AddNewPlant = (req, res)=>{
    let addNewquery = 'insert into plant (type_plan, statut_chambre) VALUES (?,?)'

    database.query(
        addNewquery,
        [
            req.body.type,
            req.body.description
        ],
        (error, result)=>{
            if (error) throw error
            res.status(201).json({message: 'New plant add'})
        }
    )
}