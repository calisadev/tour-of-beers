import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../classes/Beer';

@Component({
    selector: 'app-beer-dashboard-cell',
    templateUrl: './beer-dashboard-cell.component.html',
    styleUrls: ['./beer-dashboard-cell.component.css']
})
export class BeerDashboardCellComponent implements OnInit {

    @Input() beer: Beer;
    constructor() {}

    ngOnInit() {
    }
}
