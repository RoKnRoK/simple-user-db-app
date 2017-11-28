import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbGridComponent } from './db-grid.component';

describe('DbGridComponent', () => {
  let component: DbGridComponent;
  let fixture: ComponentFixture<DbGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
