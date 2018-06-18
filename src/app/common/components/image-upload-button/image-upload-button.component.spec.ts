import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../app.module';
import { ImageUploadButtonComponent } from './image-upload-button.component';

describe('ImageUploadButtonComponent', () => {
    let component: ImageUploadButtonComponent;
    let fixture: ComponentFixture<ImageUploadButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ AppModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageUploadButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
