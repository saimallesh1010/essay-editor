import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuggestionPanelComponent } from './suggestion-panel';

describe('SuggestionPanelComponent', () => {
  let component: SuggestionPanelComponent;
  let fixture: ComponentFixture<SuggestionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestionPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
