"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosterRoutes = void 0;
const rosterController_1 = require("../controllers/rosterController");
class RosterRoutes {
    constructor() {
        this.roster_controller = new rosterController_1.RosterController();
    }
    route(app) {
        app.get('/api/load-roster', (req, res) => {
            this.roster_controller.loadFile(req, res);
        });
    }
}
exports.RosterRoutes = RosterRoutes;
