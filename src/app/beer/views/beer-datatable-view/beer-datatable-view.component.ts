import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BeerServices } from '../../services/BeerServices';
import { Beer } from '../../classes/Beer';

@Component({
    selector: 'app-beer-datatable-view',
    templateUrl: './beer-datatable-view.component.html',
    styleUrls: ['./beer-datatable-view.component.css']
})
export class BeerDatatableViewComponent implements OnInit {
    public title: String;
    public beers: Beer[];
    constructor(private beerServices: BeerServices) {}

    ngOnInit () {
        this.title = 'Beers list';
        this.beerServices.getAllBeers().subscribe(beers => this.beers = beers);
    }

}
