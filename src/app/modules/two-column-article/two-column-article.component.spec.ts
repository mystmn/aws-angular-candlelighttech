import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnArticleComponent } from './two-column-article.component';

describe('TwoColumnArticleComponent', () => {
  let component: TwoColumnArticleComponent;
  let fixture: ComponentFixture<TwoColumnArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumnArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoColumnArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
