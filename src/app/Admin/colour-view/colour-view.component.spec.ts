import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourViewComponent } from './colour-view.component';

describe('ColourViewComponent', () => {
  let component: ColourViewComponent;
  let fixture: ComponentFixture<ColourViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColourViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColourViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
