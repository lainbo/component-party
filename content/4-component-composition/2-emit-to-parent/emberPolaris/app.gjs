import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import AnswerButton from "./answer-button";

export default class App extends Component {
  @tracked isHappy = true;

  handleYes = () => (this.isHappy = true);
  handleNo = () => (this.isHappy = false);

  <template>
    <p>你快乐吗?</p>
    <AnswerButton @onYes={{this.handleYes}} @onNo={{this.handleNo}} />
    <p style="font-size: 50px;">{{if this.isHappy "😀" "😥"}}</p>
  </template>
}