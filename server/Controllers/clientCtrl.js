const database = require('../Config/mysql');

exports.signup = (req, res) =>{
    let insertClientQuery = 'insert into client (nom_client, prenom_client, sexe_client,email_client, contact_client) VALUES (?,?,?,?,?)';

    database.query(
        insertClientQuery,
        [
            req.body.nom,
            req.body.prenom,
            req.body.sexe,
            req.body.email,
            req.body.contact
        ],
        (error, result)=>{
            if (error) throw error
            res.status(201).json({message: 'Client signup succeffuly'});
        }
    );
};

/* exports.login =(req, res)=>{
    console.log('Requete de connexion reçu', req.body);

    let selectClientQuery = 'SELECT * FROM client WHERE nom_client = ?';
    database.query(selectClientQuery, [req.body.nomclient], (error, result)=>{
        if (error) {
            res.status(500).json(error);
        }
        if (result.length > 0) {

            if (result[0].contact_client === req.body.contact) {

                res.status(200).json({message: 'Authentification succes'});

            } else {
                
                res.status(401).json({error: 'Contact incorrect'});

            }
        } else {
            res.status(401).json({error: 'user not found'})
        }
    })
} */