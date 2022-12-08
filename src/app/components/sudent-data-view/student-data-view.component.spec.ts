import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDataViewComponent } from './student-data-view.component';

describe('SudentDataViewComponent', () => {
  let component: StudentDataViewComponent;
  let fixture: ComponentFixture<StudentDataViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDataViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
