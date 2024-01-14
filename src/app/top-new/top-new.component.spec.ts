import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewComponent } from './top-new.component';

describe('TopNewComponent', () => {
  let component: TopNewComponent;
  let fixture: ComponentFixture<TopNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopNewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
