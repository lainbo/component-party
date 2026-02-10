import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { on } from "@ember/modifier";
import { eq } from 'ember-truth-helpers';

const TRAFFIC_LIGHTS = ["红灯", "黄灯", "绿灯"];

export default class TrafficLight extends Component {
  @tracked lightIndex = 0;

  get light() {
    return TRAFFIC_LIGHTS[this.lightIndex];
  }

  nextLight = () => {
    this.lightIndex = (this.lightIndex + 1) % TRAFFIC_LIGHTS.length;
  };

  <template>
    <button {{on "click" this.nextLight}}>下一个灯</button>
    <p>现在亮着的是: {{this.light}}</p>
    <p>
      你应该
      {{#if (eq this.light "红灯")}}
        停下
      {{else if (eq this.light "黄灯")}}
        慢行
      {{else if (eq this.light "绿灯")}}
        赶紧走
      {{/if}}
    </p>
  </template>
}
