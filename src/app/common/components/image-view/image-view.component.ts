import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-image-view',
    templateUrl: './image-view.component.html',
    styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {
    private NO_IMAGE = './assets/no-image.png';

    @Input() src: String;

    constructor() { }

    ngOnInit() {
        if (!this.src) {
          this.src = this.NO_IMAGE;
        }
    }

}
