import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeastUnitTestingComponent } from './feast-unit-testing.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FeastUnitTestingComponent', () => {
  let component: FeastUnitTestingComponent;
  let fixture: ComponentFixture<FeastUnitTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeastUnitTestingComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(FeastUnitTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
