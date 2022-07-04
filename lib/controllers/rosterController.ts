import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';

export class RosterController {
    
    public loadFile(req: Request, res: Response) {
        console.log('roster controller');
        successResponse('load roster successfull', {}, res);
    }
}