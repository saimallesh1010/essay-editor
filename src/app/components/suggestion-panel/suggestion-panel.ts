import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suggestion-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suggestion-panel.html',
  styleUrls: ['./suggestion-panel.scss']
})
export class SuggestionPanelComponent {
  flaggedSentence: string = '';
  suggestedSentence: string = '';

  @Output() flaggedChange = new EventEmitter<string>();
  @Output() apply = new EventEmitter<{ flagged: string; suggestion: string }>();
  @Output() undo = new EventEmitter<void>();

  ngOnInit() {
    this.flaggedChange.emit(this.flaggedSentence);
  }

  onFlagChange() {
    this.flaggedChange.emit(this.flaggedSentence);
  }

  applySuggestion() {
    this.apply.emit({
      flagged: this.flaggedSentence,
      suggestion: this.suggestedSentence
    });

    console.log('Apply clicked');
    console.log('Flagged:', this.flaggedSentence);
    console.log('Suggested:', this.suggestedSentence);
  }

  triggerUndo() {
    this.undo.emit();
  }
}
