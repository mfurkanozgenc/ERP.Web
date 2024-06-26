import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotsComponent } from './depots.component';

describe('DepotsComponent', () => {
  let component: DepotsComponent;
  let fixture: ComponentFixture<DepotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
