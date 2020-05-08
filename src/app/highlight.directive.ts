import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quote:Quote;
}
