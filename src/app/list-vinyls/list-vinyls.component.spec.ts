import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVinylsComponent } from './list-vinyls.component';

describe('ListVinylsComponent', () => {
  let component: ListVinylsComponent;
  let fixture: ComponentFixture<ListVinylsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVinylsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVinylsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
