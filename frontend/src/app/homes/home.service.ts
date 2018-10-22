import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HomeService {
    API_URL = 'http://localhost:3000';
    constructor(private httpClient: HttpClient) { }
    getHomes() {

        return this.httpClient.get(`${this.API_URL}/homes`);

    }

    getHome(id: number) {

    	return this.httpClient.get(`${this.API_URL}/homes/` + id + `/data`);

    }
}