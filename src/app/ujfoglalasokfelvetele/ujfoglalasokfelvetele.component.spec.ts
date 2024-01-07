import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UjFoglalasokfelveteleComponent } from './ujfoglalasokfelvetele.component';


describe('UjfoglalasokfelveteleComponent', () => {
  let component: UjfoglalasokfelveteleComponent;
  let fixture: ComponentFixture<UjfoglalasokfelveteleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UjfoglalasokfelveteleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UjfoglalasokfelveteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
