import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEssentials } from './ng-essentials';

describe('NgEssentials', () => {
  let component: NgEssentials;
  let fixture: ComponentFixture<NgEssentials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgEssentials]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgEssentials);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
