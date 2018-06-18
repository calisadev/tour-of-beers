import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { BeerServices } from '../../services/BeerServices';
import { Beer } from '../../classes/Beer';

@Component({
    selector: 'app-beer-datatable',
    templateUrl: './beer-datatable.component.html',
    styleUrls: ['./beer-datatable.component.css']
})
export class BeerDatatableComponent implements OnInit {
    public displayedColumns = ['Id', 'Image', 'Name', 'Description', 'ShowDashboard'];

    @Input() beers: Beer[];

    constructor() { }

    ngOnInit() {
    }
}
