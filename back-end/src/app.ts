import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/config';
import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import recipeRoutes from './routes/recipes';

const app = express();

app.set('port',config.PORT)
app.use(morgan('dev'))
app.use(cors())//allows any server to connect or request
app.use(express.json())//parses incoming JSON request and puts the parsed data, e.g. in req.body,express.json() - recognize the incomeing request object as a JSON Object
app.use(express.urlencoded({extended:false}))//express.urlencoded() - recognize the incoming request object as string or arrays , exntended: false - will use the library querystring
app.use(authRoutes);
app.use(userRoutes);
app.use(recipeRoutes);
export default app;
