import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompletedComponent } from './list-completed.component';

describe('ListCompletedComponent', () => {
  let component: ListCompletedComponent;
  let fixture: ComponentFixture<ListCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
