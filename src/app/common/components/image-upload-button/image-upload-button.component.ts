import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-image-upload-button',
    templateUrl: './image-upload-button.component.html',
    styleUrls: ['./image-upload-button.component.css']
})
export class ImageUploadButtonComponent implements OnInit {
    @Input() base64Data: String;
    @Output() base64DataChange = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    public onFileChanged (event): void {
        let selectedFile = event.target.files[0];
        let reader = new FileReader();
        let that = this;
        reader.onload = function() {
          that.base64Data = reader.result;
          that.base64DataChange.emit(that.base64Data);
        };
        reader.readAsDataURL(selectedFile);
    }

}
