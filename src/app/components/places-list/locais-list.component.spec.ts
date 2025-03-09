import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaisListComponent } from './locais-list.component';

describe('PlacesListComponent', () => {
  let component: LocaisListComponent;
  let fixture: ComponentFixture<LocaisListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaisListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocaisListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
