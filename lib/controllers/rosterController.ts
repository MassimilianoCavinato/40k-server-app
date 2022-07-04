import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { readFile } from 'fs';
import  JSZip =  require('jszip');
import xml2js from 'xml2js';
const xml2json_parser = new xml2js.Parser();
export class RosterController {
    
    public loadFile(req: Request, res: Response) {
        const file_path = "./assets/example_a.rosz";
        readFile(file_path, function(err, data) {
            if (err) throw err;

            JSZip.loadAsync(data)
            .then(zip => {
                const ros_name = Object.keys(zip.files)[0]
                return zip.file(ros_name).async("string")
            })
            .then(xml => xml2json_parser.parseStringPromise(xml))
            .then(json => successResponse('load roster successfull', json, res))
            .catch(e => e)
        });
    }
}