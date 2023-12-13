import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetComponent } from './movie-det.component';

describe('MovieDetComponent', () => {
  let component: MovieDetComponent;
  let fixture: ComponentFixture<MovieDetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetComponent]
    });
    fixture = TestBed.createComponent(MovieDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
