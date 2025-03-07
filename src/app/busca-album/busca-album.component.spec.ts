import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaAlbumComponent } from './busca-album.component';

describe('BuscaAlbumComponent', () => {
  let component: BuscaAlbumComponent;
  let fixture: ComponentFixture<BuscaAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscaAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
