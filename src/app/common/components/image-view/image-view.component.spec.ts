import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from '../../../app.module';
import { ImageViewComponent } from './image-view.component';

describe('ImageViewComponent', () => {
    let component: ImageViewComponent;
    let fixture: ComponentFixture<ImageViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [ AppModule ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnInit with src', () => {
        component.src = 'asdsad';
        component.ngOnInit();
        expect(component.src).toEqual('asdsad');
    });

    it('ngOnInit no src', () => {
      component.src = null;
      component.ngOnInit();
      expect(component.src).toEqual('./assets/no-image.png');
    });
});
