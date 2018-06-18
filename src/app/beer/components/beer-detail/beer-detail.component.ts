import { MatFormFieldModule} from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../classes/Beer';

@Component({
    selector: 'app-beer-detail',
    templateUrl: './beer-detail.component.html',
    styleUrls: ['./beer-detail.component.css']
})
export class BeerDetailComponent implements OnInit {
    @Input() beer: Beer;
    constructor() { }

    ngOnInit() {
    }
}
