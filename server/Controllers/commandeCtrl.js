const database = require('../Config/mysql')

exports.AddNewCommande = (req, res) =>{
    let addNewquery = 'insert into commande(name_commande, date_commande) VALUES (?,?)'
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

exports.selectCommande = (req, res) =>{

    database.query('SELECT * FROM commande', (error, result)=>{
            if (error) throw error
            res.status(201).json({commande: result})
         }  
    )
}