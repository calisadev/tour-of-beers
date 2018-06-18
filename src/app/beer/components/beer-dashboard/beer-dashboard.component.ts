import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { BeerServices } from '../../services/BeerServices';
import { Beer } from '../../classes/Beer';

@Component({
    selector: 'app-beer-dashboard',
    templateUrl: './beer-dashboard.component.html',
    styleUrls: ['./beer-dashboard.component.css']
})
export class BeerDashboardComponent implements OnInit {
    @Input() beers: Beer[];
    constructor() { }

    ngOnInit() {
    }

}
