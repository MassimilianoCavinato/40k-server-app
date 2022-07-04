"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosterController = void 0;
const service_1 = require("../modules/common/service");
class RosterController {
    loadFile(req, res) {
        console.log('roster controller');
        (0, service_1.successResponse)('load roster successfull', {}, res);
    }
}
exports.RosterController = RosterController;
