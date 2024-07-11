import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeastUnitTestingComponent } from './feast-unit-testing.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('FeastUnitTestingComponent', () => {
  let component: FeastUnitTestingComponent;
  let fixture: ComponentFixture<FeastUnitTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeastUnitTestingComponent, RouterTestingModule]
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
