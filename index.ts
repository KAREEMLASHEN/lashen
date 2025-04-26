import express, { Application } from 'express';
import { userRoutes } from './routes/user';
import { carRoutes } from './routes/car';
import { intersetRoutes } from './routes/interset'

const app : Application = express(); 
const port : number = 4788; 
const host : string = 'localhost'; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/user', (req, res) => { 
    res.send('Welocme to The User Management API'); 
});
app.get('/car', (req, res) => { 
    res.send('Welocme to The Car Management API'); 
});
  app.get('/interset', (req, res) => { 
    res.send('Welocme to The Interset Management API'); 
});

app.use("/user", userRoutes);
app.use("/car", carRoutes );
app.use("/interset", intersetRoutes);

app.listen(port, host, () => { 
    console.log(`Server is running at http://localhost:${port}`); 
  });
  