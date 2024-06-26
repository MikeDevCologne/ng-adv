import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-component-events',
  templateUrl: './component-events.component.html',
  styleUrls: ['./component-events.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    MatButtonModule,
  ],
})
export class ComponentEventsComponent {

  count = signal(0);

  incrementCount() {
    this.count.update((c) => c + 1);
  }
}
