import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylDetailsComponent } from './vinyl-details.component';

describe('VinylDetailsComponent', () => {
  let component: VinylDetailsComponent;
  let fixture: ComponentFixture<VinylDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
