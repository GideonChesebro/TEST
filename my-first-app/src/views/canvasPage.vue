<template>
  <div>
    <p>Hoi!</p>
    <canvas ref="testcan" width="400" height="400"></canvas>
  </div>
</template>

<script>
export default {
  name: "CanvasPage",
  data() {
    return {
      canvas: null,
      ctx: null,
    };
  },
  methods: {
    draw: function () {
      let canvas = this.$data.canvas;
      let ctx = this.$data.ctx;
      let px = Math.floor(canvas.width / 20);
      ctx.fillStyle = "#00afaf";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = px + "px wingdings";
      ctx.fillText("Hello Vue Canvas!", canvas.width / 2, canvas.height / 8);
    },
  },
  mounted() {
    this.$data.canvas = this.$refs["testcan"];
    this.$data.ctx = this.$refs["testcan"].getContext("2d");
    this.draw();
  },
  updated() {
    this.draw();
  },
};
</script>

<style scoped>
canvas {
  border: 1px solid black;
  width: 400px;
  height: 400px;
}
</style>