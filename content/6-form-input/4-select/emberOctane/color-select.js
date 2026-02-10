import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class ColorSelect extends Component {
  @tracked selectedColorId = 2;

  select = (event) => (this.selectedColorId = event.target.value);

  colors = [
    { id: 1, text: "红" },
    { id: 2, text: "蓝" },
    { id: 3, text: "绿" },
    { id: 4, text: "灰", isDisabled: true },
  ];
}
