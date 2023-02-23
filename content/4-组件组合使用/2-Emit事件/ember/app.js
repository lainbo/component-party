import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class App extends Component {
  @tracked happy = true;

  handleYes = () => (this.happy = true);
  handleNo = () => (this.happy = false);
}
