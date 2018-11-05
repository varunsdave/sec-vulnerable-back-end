import * as methodOverride from 'method-override';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import {RegisterRoutes} from './routes';
const cors = require('cors');
const port: string = process.env.PORT || '8001';

let app: express.Application = express();

// import controllers
import './controllers/SimpleAccessController';
import './controllers/UserAccessController';
import { addUser } from './services/db.service';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
RegisterRoutes(app);
app.use('/swagger.json', (req, res) => {
    res.sendfile(__dirname + '/swagger.json');
});


app.use(methodOverride());



app.use('/docs', express.static(__dirname +'/swagger-ui'));

addUser('testuser', 'testuser', '1234');

app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
}); 