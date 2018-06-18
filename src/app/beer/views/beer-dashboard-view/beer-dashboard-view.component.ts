import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BeerServices } from '../../services/BeerServices';
import { Beer } from '../../classes/Beer';

@Component({
    selector: 'app-beer-dashboard-view',
    templateUrl: './beer-dashboard-view.component.html',
    styleUrls: ['./beer-dashboard-view.component.css']
})
export class BeerDashboardViewComponent implements OnInit {
    public title: String;
    public beers: Beer[];
    public selectedBeer: Beer;
    constructor(public beerServices: BeerServices ) { }

    ngOnInit () {
        this.title = 'Beers dashboard';
        this.beerServices.getAllBeers().subscribe(beers => this.beers = this.filterShowDashboardBeers(beers));
    }

    filterShowDashboardBeers (beers: Beer[]): Beer[] {
        return beers.filter(function(beer: Beer) {
            return beer.showDashboard;
        });
    }

}
