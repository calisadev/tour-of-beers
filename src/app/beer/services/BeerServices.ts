import { Beer } from '../classes/Beer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BeerServices {
    constructor(private http: HttpClient) {}

    public getAllBeers (): Observable<Beer[]> {
        return this.http.get<Beer[]>('api/beers');
    }
    public getBeerById (id: Number): Observable<Beer> {
        return this.http.get<Beer>('api/beers/' + id);
    }
    public insertBeer (beer: Beer): Observable<String> {
        return this.http.post<String>('api/beers', beer);
    }
    public updateBeer (beer: Beer): Observable<String> {
        return this.http.patch<String>('api/beers', beer);
    }
    public deleteBeer (id: Number): Observable<String> {
        return this.http.delete<String>('api/beers/' + id);
    }
}