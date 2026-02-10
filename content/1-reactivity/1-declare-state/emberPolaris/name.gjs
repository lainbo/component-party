import Component from "@glimmer/component";

export default class NameComponent extends Component {
  name = "张三";

  <template>
    <h1>你好 {{this.name}}</h1>
  </template>
}
