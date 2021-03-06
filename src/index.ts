
import express from 'express';
import { PORT } from './config/constants';
import { printerRouter } from './routes';

const app = express();
app.use(express.json());

app.use('/printers', printerRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});