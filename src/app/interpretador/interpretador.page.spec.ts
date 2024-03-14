import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpretadorPage } from './interpretador.page';

describe('InterpretadorPage', () => {
  let component: InterpretadorPage;
  let fixture: ComponentFixture<InterpretadorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InterpretadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
