import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appState]',
})
export class StateDirective {
  @Input() public appState!: string;
  @HostBinding('class') public tdClassName!: string;
  constructor() {}

  ngOnChanges(): void {
    this.tdClassName = `state-${this.appState.toLowerCase()}`;
  }
}
