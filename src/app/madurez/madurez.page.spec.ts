import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MadurezPage } from './madurez.page';

describe('MadurezPage', () => {
  let component: MadurezPage;
  let fixture: ComponentFixture<MadurezPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MadurezPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
