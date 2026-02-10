import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from '@ember/modifier';

export default class InputHello extends Component {
  @tracked isAvailable = false;

  handleChange = (event) => (this.isAvailable = event.target.checked);

  <template>
    <input
      id="is-available"
      type="checkbox"
      checked={{this.isAvailable}}
      {{on "change" this.handleChange}}
    />
    <label for="is-available">这是一个checkbox</label>
  </template>
}
