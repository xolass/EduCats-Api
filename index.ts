import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import moment from 'moment';
import helmet from 'helmet';

import routes from './routes';

require('dotenv').config();


require('log-timestamp')(() => `[${moment().utc().subtract({ hour: 3 }).format('YYYY-MM-DD HH:mm:ss A')}]`);


const app: express.Application = express();


app.use(helmet());
app.use(bodyParser.json());
app.use(cors({
    credentials: true,
    methods: 'POST, GET, PUT, DELETE, PATCH, HEAD, OPTIONS',
    origin: true,
}));


app.get('/', (req, res) => {
    res.send('it works');
});

// app.use(routes);


app.listen(process.env.PORT || 3009, () => {
    console.log(`Connected to ${process.env.PORT || 3009}`);
});
