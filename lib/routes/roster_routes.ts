import { Application, Request, Response } from 'express';
import { RosterController } from '../controllers/rosterController';

export class RosterRoutes {

    private roster_controller: RosterController = new RosterController();

    public route(app: Application) {
        
        app.get('/api/load-roster', (req: Request, res: Response) => {
            this.roster_controller.loadFile(req, res);
        });
    }
}