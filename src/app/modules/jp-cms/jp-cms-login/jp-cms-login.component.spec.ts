import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpCmsLoginComponent } from './jp-cms-login.component';

describe('JpCmsLoginComponent', () => {
  let component: JpCmsLoginComponent;
  let fixture: ComponentFixture<JpCmsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpCmsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpCmsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
