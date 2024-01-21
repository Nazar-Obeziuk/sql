import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToturialsListComponent } from './toturials-list.component';

describe('ToturialsListComponent', () => {
  let component: ToturialsListComponent;
  let fixture: ComponentFixture<ToturialsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToturialsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToturialsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
