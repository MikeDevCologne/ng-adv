import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { debounceTime, tap } from 'rxjs/operators';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-debounced-search',
  templateUrl: './debounced-search.component.html',
  styleUrls: ['./debounced-search.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MarkdownRendererComponent
  ],
})
export class DebouncedSearchComponent {
  searchTerm: FormControl = new FormControl('');

  searched = this.searchTerm.valueChanges.pipe(
    debounceTime(750),
    tap((val) => {
      console.log('searched for', val)
    }),
  );
}
