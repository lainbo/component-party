import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class CounterComponent extends Component {
  @tracked name = "张三";

  constructor(owner, args) {
    super(owner, args);

    this.name = "李四";
  }
}
