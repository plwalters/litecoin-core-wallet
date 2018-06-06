import {bindable} from 'aurelia-templating';

export class TextInput {
  @bindable label = '';
  @bindable value = '';
  @bindable placeholder = '';
}
