import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor';
import { SuggestionPanelComponent } from './components/suggestion-panel/suggestion-panel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, EditorComponent, SuggestionPanelComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  flaggedSentence: string = '';

  @ViewChild(EditorComponent) editor?: EditorComponent;

  updateFlagged(sentence: string) {
    this.flaggedSentence = sentence;
  }

  applySuggestion(data: { flagged: string; suggestion: string }) {
    this.editor?.applySuggestion(data.flagged, data.suggestion);
  }

  undoLast() {
    this.editor?.undoLastChange();
  }
}
