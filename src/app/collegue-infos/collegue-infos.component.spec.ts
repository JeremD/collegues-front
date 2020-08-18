import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueInfosComponent } from './collegue-infos.component';

describe('CollegueInfosComponent', () => {
  let component: CollegueInfosComponent;
  let fixture: ComponentFixture<CollegueInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
