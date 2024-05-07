<script>
export default {
  data() {
    return {
      TRAFFIC_LIGHTS: ["红灯", "黄灯", "绿灯"],
      lightIndex: 0,
    };
  },
  computed: {
    light() {
      return this.TRAFFIC_LIGHTS[this.lightIndex];
    },
  },
  methods: {
    nextLight() {
      this.lightIndex = (this.lightIndex + 1) % this.TRAFFIC_LIGHTS.length;
    },
  },
};
</script>

<template>
  <div>
    <button @click="nextLight">
      下一个灯
    </button>
    <p>现在亮着的是: {{ light }}</p>
    <p>
      你应该
      <span v-if="light === '红灯'">停下</span>
      <span v-else-if="light === '黄灯'">慢行</span>
      <span v-else-if="light === '绿灯'">赶紧走</span>
    </p>
  </div>
</template>
