import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


// It maintains quote Model
quoteModel: Quote;
// It maintains quote form display status. By default it will be false.
  showNew: Boolean = false;
// It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Save';

// This method associate to New Button.
  onNew() {
// Initiate new quote.
    this.quoteModel = new Quote("", "", "", new Date(), 0, 0);
// Change submitType to 'Save'.
    this.submitType = 'Save';
// display quote entry section.
    this.showNew = true;
  }

// This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Save') {
// Push quote model object into quote list.
      this.quotes.push(this.quoteModel);
    }
// Hide quote entry section.
    this.showNew = false;
  }

// This method associate to Cancel Button.
  onCancel() {
// Hide quote entry section.
    this.showNew = false;
  }

  quotes = [
    new Quote('Wise men speak because they have something to say; fools because they have to say something.', 'Plato', 'Admin', new Date(2020, 5, 8, 23, 1), 0, 0),
    new Quote('We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.', 'Plato', 'Admin', new Date(2020, 5, 8, 23, 1), 0, 0),
    new Quote('Strong minds discuss ideas, average minds discuss events, weak minds discuss people.', 'Socrates', 'Admin', new Date(2020, 5, 8, 23, 5), 0, 0),
    new Quote('The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.', 'Socrates', 'Admin', new Date(2020, 5, 8, 23, 8), 0, 0),
    new Quote('No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.', 'Socrates', 'Admin', new Date(2020, 5, 8, 7, 42), 0, 0),
    new Quote('Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution; it represents the wise choice of many alternatives - choice, not chance, determines your destiny.', 'Aristotle', 'Admin', new Date(2020, 5, 8, 7, 43), 0, 0),
    new Quote('Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each.', 'Plato', 'Admin', new Date(2020, 5, 8, 7, 45), 0, 0),
    new Quote('There are two things a person should never be angry at, what they can help, and what they cannot.', 'Plato', 'Admin', new Date(2020, 5, 8, 7, 46), 0, 0),
    
   

  ];



  delete(i) {
    this.quotes.splice(i, 1);
      }

  constructor() { }

  ngOnInit(): void {
  }

}
