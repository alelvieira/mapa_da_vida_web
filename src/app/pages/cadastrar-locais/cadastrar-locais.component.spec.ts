import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLocaisComponent } from './cadastrar-locais.component';

describe('CadastrarLocaisComponent', () => {
  let component: CadastrarLocaisComponent;
  let fixture: ComponentFixture<CadastrarLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarLocaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
