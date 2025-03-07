import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaAutorComponent } from './busca-autor.component';

describe('BuscaAutorComponent', () => {
  let component: BuscaAutorComponent;
  let fixture: ComponentFixture<BuscaAutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscaAutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
