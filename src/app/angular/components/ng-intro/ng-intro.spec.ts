import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIntro } from './ng-intro';

describe('NgIntro', () => {
  let component: NgIntro;
  let fixture: ComponentFixture<NgIntro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgIntro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIntro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
