const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const planRoute = require('./Routes/PlanRoute');
const CommandRoute = require('./Routes/CommandeRoute');
const clientRoute = require('./Routes/clientRoute'); 



app.use(express.json());
app.use(cors());
app.use('/plant', planRoute); 
app.use('/commande', CommandRoute);
app.use('/client', clientRoute);


app.listen(5000,()=>{
    console.log('Our server is runing on port 5000');
})
