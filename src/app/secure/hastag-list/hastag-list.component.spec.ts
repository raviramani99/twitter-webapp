import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HastagListComponent } from './hastag-list.component';

describe('HastagListComponent', () => {
  let component: HastagListComponent;
  let fixture: ComponentFixture<HastagListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HastagListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HastagListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
