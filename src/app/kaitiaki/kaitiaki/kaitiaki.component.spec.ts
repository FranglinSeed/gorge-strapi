import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaitiakiComponent } from './kaitiaki.component';

describe('KaitiakiComponent', () => {
  let component: KaitiakiComponent;
  let fixture: ComponentFixture<KaitiakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaitiakiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaitiakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
