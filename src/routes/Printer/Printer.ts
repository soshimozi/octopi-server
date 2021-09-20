import express, { Request, Response } from 'express';
import { printerController } from '../../controllers';

export const router = express.Router({
    strict: true
});


router.get('/', (req: Request, res: Response) => {
    printerController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    printerController.update(req, res);
});

