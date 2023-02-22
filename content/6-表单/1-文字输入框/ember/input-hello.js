import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class InputHello extends Component {
  @tracked text = "这是一段示范文字";

  handleInput = (event) => (this.text = event.target.value);
}
