import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppformComponent } from './appform.component';

describe('AppformComponent', () => {
  let component: AppformComponent;
  let fixture: ComponentFixture<AppformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
