import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationCollegueComponent } from './creation-collegue.component';

describe('CreationCollegueComponent', () => {
  let component: CreationCollegueComponent;
  let fixture: ComponentFixture<CreationCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
