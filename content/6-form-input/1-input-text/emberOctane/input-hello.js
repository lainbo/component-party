import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class InputHello extends Component {
  @tracked text = "你好世界";

  handleInput = (event) => (this.text = event.target.value);
}
