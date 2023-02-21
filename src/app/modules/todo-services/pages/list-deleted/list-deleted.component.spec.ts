import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeletedComponent } from './list-deleted.component';

describe('ListDeletedComponent', () => {
  let component: ListDeletedComponent;
  let fixture: ComponentFixture<ListDeletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeletedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDeletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
