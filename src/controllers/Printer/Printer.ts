import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { CrudController } from '../CrudController';
import { APIKEY } from '../../config/constants';
import { SERVER } from '../../config/constants'

var http = require('http');

export class PrinterController extends CrudController {
	public create(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
		throw new Error('Method not implemented.');
	}
	public read(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {

		const options = {
			host: SERVER,
			path: '/api/printer',
			headers: {
				'X-Api-Key': APIKEY
			}			
		  };		


		const httpRequest = http.get(options, function(httpResponse: any) {
			console.log('STATUS: ' + httpResponse.statusCode);
			console.log('HEADERS: ' + JSON.stringify(httpResponse.headers));	
			
			let bodyChunks: any[] = []
			httpResponse.on('data', function(chunk: any) {

				// You can process streamed parts here...
				bodyChunks.push(chunk);
			})
			.on('end', function() {
				var body = Buffer.concat(bodyChunks);
				console.log('BODY: ' + body)

				res.json({ printer: JSON.parse(body.toString()) })

				// ...and/or process the entire body here.
			})			
		});		  
	}

	public update(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
		throw new Error('Method not implemented.');
	}
	public delete(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): void {
		throw new Error('Method not implemented.');
	}

}
