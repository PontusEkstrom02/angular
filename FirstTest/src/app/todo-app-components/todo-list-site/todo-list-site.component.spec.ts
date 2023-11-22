import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListSiteComponent } from './todo-list-site.component';

describe('TodoListSiteComponent', () => {
  let component: TodoListSiteComponent;
  let fixture: ComponentFixture<TodoListSiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListSiteComponent]
    });
    fixture = TestBed.createComponent(TodoListSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
