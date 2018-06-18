import { Component, OnInit } from '@angular/core';
import { Beer } from '../../classes/Beer';
import { BeerServices } from '../../services/BeerServices';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-beer-detail-view',
    templateUrl: './beer-detail-view.component.html',
    styleUrls: ['./beer-detail-view.component.css']
})
export class BeerDetailViewComponent implements OnInit {
    public title: String;
    public beer: Beer;
    public message: String;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private beerServices: BeerServices, private location: Location) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            if (params.id === 'new') {
                this.setupNewBeer();
            } else {
                this.loadBeerDetail(params.id);
            }
        });
    }

    setupNewBeer () {
        this.beer = new Beer(null, '', '', false, null);
        this.title = 'Create new beer';
    }

    loadBeerDetail (id: number) {
        this.beerServices.getBeerById(id).subscribe(beer => {
            this.beer = beer;
            this.title = this.beer.name;
        });
    }

    saveClick () {
        if (this.beer !== undefined) {
            if (this.beer.id) {
                this.updateBeer(this.beer);
            } else {
                this.insertBeer(this.beer);
            }
        }
    }

    insertBeer (beer: Beer) {
        this.beerServices.insertBeer(beer).subscribe(result => {
            if (result) {
                this.router.navigate(['/beers', result['id']]);
            }
        });
    }

    updateBeer (beer: Beer): void {
        this.beerServices.updateBeer(beer).subscribe(result => {
            if (result === 'OK') {
                this.message = 'Update successful';
            } else {
                this.message = 'Update not successful';
            }
        });
    }

    delete (): void {
        this.beerServices.deleteBeer(this.beer.id).subscribe(result => {
            if (result === 'OK') {
                this.router.navigate(['/beers']);
            }
        });
    }

    cancel () {
        this.location.back();
    }
}
