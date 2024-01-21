import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxsliderComponent } from './bxslider.component';

describe('BxsliderComponent', () => {
  let component: BxsliderComponent;
  let fixture: ComponentFixture<BxsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxsliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
