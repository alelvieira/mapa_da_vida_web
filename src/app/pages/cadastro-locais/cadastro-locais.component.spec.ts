import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroLocaisComponent } from './cadastro-locais.component';

describe('CadastroLocaisComponent', () => {
  let component: CadastroLocaisComponent;
  let fixture: ComponentFixture<CadastroLocaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroLocaisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroLocaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
