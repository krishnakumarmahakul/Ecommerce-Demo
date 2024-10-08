import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterRegComponent } from './footer-reg.component';

describe('FooterRegComponent', () => {
  let component: FooterRegComponent;
  let fixture: ComponentFixture<FooterRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterRegComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
