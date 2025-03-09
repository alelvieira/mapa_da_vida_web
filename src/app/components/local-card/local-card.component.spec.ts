import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalCardComponent } from './local-card.component';

describe('PropertyListComponent', () => {
  let component: LocalCardComponent;
  let fixture: ComponentFixture<LocalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
