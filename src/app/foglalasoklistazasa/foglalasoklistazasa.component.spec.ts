import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoglalasoklistazasaComponent } from './foglalasoklistazasa.component';

describe('FoglalasoklistazasaComponent', () => {
  let component: FoglalasoklistazasaComponent;
  let fixture: ComponentFixture<FoglalasoklistazasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoglalasoklistazasaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoglalasoklistazasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
