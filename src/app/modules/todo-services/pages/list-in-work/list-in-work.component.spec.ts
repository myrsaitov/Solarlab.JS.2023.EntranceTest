import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInWorkComponent } from './list-in-work.component';

describe('ListInWorkComponent', () => {
  let component: ListInWorkComponent;
  let fixture: ComponentFixture<ListInWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
