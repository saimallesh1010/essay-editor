import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editor.html',
  styleUrls: ['./editor.scss']
})
export class EditorComponent {
  rawEssay: string = '';
  highlightedEssay: string = '';

  private _flagged: string = '';
  private previousEssay: string | null = null;

  @Input() set flaggedSentence(value: string) {
    this._flagged = value;
    this.highlightEssay();
  }

  onEssayInput(event: Event) {
    const div = event.target as HTMLDivElement;
    this.rawEssay = div.innerText;
    this.highlightEssay();
  }

  highlightEssay() {
  if (!this._flagged.trim()) return;

  const escaped = this._flagged.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(escaped, 'gi');

  // just for debug/testing
  console.log('Highlighting', this._flagged);

  const marked = this.rawEssay.replace(regex, match => `<mark>${match}</mark>`);
  const box = document.querySelector('.essay-box') as HTMLDivElement;
  if (box) {
    box.innerHTML = marked;
  }
}


  applySuggestion(flagged: string, suggestion: string) {
    if (!flagged.trim()) return;

    this.previousEssay = this.rawEssay; // Save state for undo

    const escaped = flagged.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'gi');

    this.rawEssay = this.rawEssay.replace(regex, suggestion);
    this.highlightedEssay = this.rawEssay;
  }

  undoLastChange() {
    if (this.previousEssay !== null) {
      this.rawEssay = this.previousEssay;
      this.highlightedEssay = this.previousEssay;
      this.previousEssay = null;
    }
  }
}
