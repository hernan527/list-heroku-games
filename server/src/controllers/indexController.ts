import { Request, Response } from 'express';

import {} from '../controllers/indexController'
 
class IndexController {

    public index ( req : Request, res: Response) { 
        res.json({text:'API Is /api/games'})
    }
}

export const indexController = new IndexController();