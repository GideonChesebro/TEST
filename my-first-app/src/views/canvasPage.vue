<template>
  <div>
    <p>Hoi!</p>
    <canvas ref="testcan" width="800" height="800"></canvas>
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
      //Wingdings heading
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = px + "px wingdings";
      ctx.fillText("Hello Vue Canvas!", canvas.width / 2, canvas.height / 8);
      //Squares
      ctx.fillStyle = "#000000";
      ctx.fillRect(25, 125, 100, 100);
      ctx.clearRect(45, 145, 60, 60);
      ctx.strokeRect(50, 150, 50, 50);
      // Triangle Path
      ctx.beginPath();
      ctx.moveTo(175, 175);
      ctx.lineTo(200, 200);
      ctx.lineTo(200, 150);
      ctx.fill(); //stroke(); needs a closePath(); before it
      // Smileyface path
      ctx.beginPath();
      ctx.arc(300, 175, 50, 0, Math.PI * 2, true); //Outer circle
      ctx.moveTo(335, 175);
      ctx.arc(300, 175, 35, 0, Math.PI, false); // Mouth (clockwise)
      ctx.moveTo(290, 165);
      ctx.arc(285, 165, 5, 0, Math.PI * 2, true); //Left eye
      ctx.moveTo(320, 165);
      ctx.arc(315, 165, 5, 0, Math.PI * 2, true); //Right eye
      ctx.stroke();
      // Circle Examples
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          let x = 25 + j * 50; // x coordinate
          let y = 275 + i * 50; // y coordinate
          let radius = 20; // Arc radius
          let startAngle = 0; // Starting point on circle
          let endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
          let counterclockwise = i % 2 !== 0; // clockwise or counterclockwise

          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
        }
      }
      // Quadratic curves speech balloon
      ctx.save();
      ctx.translate(350, 100);
      ctx.beginPath();
      ctx.moveTo(75, 25);
      ctx.quadraticCurveTo(25, 25, 25, 62.5);
      ctx.quadraticCurveTo(25, 100, 50, 100);
      ctx.quadraticCurveTo(50, 120, 30, 125);
      ctx.quadraticCurveTo(60, 120, 65, 100);
      ctx.quadraticCurveTo(125, 100, 125, 62.5);
      ctx.quadraticCurveTo(125, 25, 75, 25);
      ctx.stroke();
      ctx.restore();
      //Cubic curves heart
      ctx.save();
      ctx.translate(475, 100);
      ctx.beginPath();
      ctx.moveTo(75, 40);
      ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
      ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
      ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
      ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
      ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
      ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
      ctx.fill();
      ctx.restore();
      //Pacman
      ctx.save();
      ctx.translate(650, 650);
      function roundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x, y + radius);
        ctx.arcTo(x, y + height, x + radius, y + height, radius);
        ctx.arcTo(
          x + width,
          y + height,
          x + width,
          y + height - radius,
          radius
        );
        ctx.arcTo(x + width, y, x + width - radius, y, radius);
        ctx.arcTo(x, y, x, y + radius, radius);
        ctx.stroke();
      }
      roundedRect(ctx, 12, 12, 160, 160, 15);
      roundedRect(ctx, 19, 19, 160, 160, 9);
      roundedRect(ctx, 53, 53, 49, 33, 10);
      roundedRect(ctx, 53, 119, 49, 16, 6);
      roundedRect(ctx, 125, 53, 49, 33, 10);
      roundedRect(ctx, 135, 119, 25, 49, 10);

      ctx.beginPath();
      ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
      ctx.lineTo(31, 37);
      ctx.fill();

      for (var i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 35, 4, 4);
      }

      for (i = 0; i < 6; i++) {
        ctx.fillRect(115, 51 + i * 16, 4, 4);
      }

      for (i = 0; i < 8; i++) {
        ctx.fillRect(51 + i * 16, 99, 4, 4);
      }

      ctx.beginPath();
      ctx.moveTo(83, 116);
      ctx.lineTo(83, 102);
      ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
      ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
      ctx.lineTo(111, 116);
      ctx.lineTo(106.333, 111.333);
      ctx.lineTo(101.666, 116);
      ctx.lineTo(97, 111.333);
      ctx.lineTo(92.333, 116);
      ctx.lineTo(87.666, 111.333);
      ctx.lineTo(83, 116);
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.moveTo(91, 96);
      ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
      ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
      ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
      ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
      ctx.moveTo(103, 96);
      ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
      ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
      ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
      ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
      ctx.fill();

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.restore();
      //Path 2D example
      ctx.save();
      ctx.translate(625, 150);
      let rectangle = new Path2D();
      rectangle.rect(10, 10, 50, 50);

      let circle = new Path2D();
      circle.arc(100, 35, 25, 0, Math.PI * 2);

      ctx.stroke(rectangle);
      ctx.fill(circle);
      ctx.restore();
      //Path 2D SVG path example
      ctx.save();
      ctx.translate(175, 225);
      let p = new Path2D("M10 10 h 80 v 80 h -80 Z");
      ctx.stroke(p);
      ctx.restore();
      //fillStyle Rectangles
      ctx.save();
      ctx.translate(275, 250);
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          ctx.fillStyle =
            "rgb(" +
            Math.floor(255 - 42.5 * i) +
            ", " +
            Math.floor(255 - 42.5 * j) +
            ", 0)";
          ctx.fillRect(j * 20, i * 20, 20, 20);
        }
      }
      ctx.restore();
      //strokeStyle Circles
      ctx.save();
      ctx.translate(425, 250);
      for (var ix = 0; ix < 6; ix++) {
        for (var j = 0; j < 6; j++) {
          ctx.strokeStyle =
            "rgb(0, " +
            Math.floor(255 - 42.5 * ix) +
            ", " +
            Math.floor(255 - 42.5 * j) +
            ")";
          ctx.beginPath();
          ctx.arc(12.5 + j * 20, 12.5 + ix * 20, 10, 0, Math.PI * 2, true);
          ctx.stroke();
        }
      }
      ctx.restore();
      //Microsoft opacity
      ctx.save();
      ctx.translate(600, 250);
      ctx.fillStyle = "#FD0";
      ctx.fillRect(0, 0, 75, 75);
      ctx.fillStyle = "#6C0";
      ctx.fillRect(75, 0, 75, 75);
      ctx.fillStyle = "#09F";
      ctx.fillRect(0, 75, 75, 75);
      ctx.fillStyle = "#F30";
      ctx.fillRect(75, 75, 75, 75);
      ctx.fillStyle = "#FFF";
      ctx.globalAlpha = 0.2;
      for (var iy = 0; iy < 7; iy++) {
        ctx.beginPath();
        ctx.arc(75, 75, 10 + 10 * iy, 0, Math.PI * 2, true);
        ctx.fill();
      }
      ctx.restore();
      //Marching ants
      ctx.save();
      let offset = 0;
      function AntsAnim() {
        ctx.clearRect(180, 330, 70, 70);
        ctx.setLineDash([4, 2]);
        ctx.lineDashOffset = -offset;
        ctx.strokeRect(190, 340, 50, 50);
      }
      function march() {
        offset++;
        if (offset > 16) {
          offset = 0;
        }
        AntsAnim();
        setTimeout(march, 20);
      }
      march();

      ctx.restore();
      //Linear gradient
      ctx.save();
      ctx.translate(10, 450);

      let lingrad = ctx.createLinearGradient(0, 0, 0, 150);
      lingrad.addColorStop(0, "#00ABEB");
      lingrad.addColorStop(0.5, "#fff");
      lingrad.addColorStop(0.5, "#26C000");
      lingrad.addColorStop(1, "#fff");

      let lingrad2 = ctx.createLinearGradient(0, 50, 0, 95);
      lingrad2.addColorStop(0.5, "#000");
      lingrad2.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = lingrad;
      ctx.strokeStyle = lingrad2;

      ctx.fillRect(10, 10, 130, 130);
      ctx.strokeRect(50, 50, 50, 50);
      ctx.restore();
      //Radial gradient
      ctx.save();
      ctx.translate(200, 450);
      let radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 30);
      radgrad.addColorStop(0, "#A7D30C");
      radgrad.addColorStop(0.9, "#019F62");
      radgrad.addColorStop(1, "rgba(1, 159, 98, 0)");

      let radgrad2 = ctx.createRadialGradient(105, 105, 20, 112, 120, 50);
      radgrad2.addColorStop(0, "#FF5F98");
      radgrad2.addColorStop(0.75, "#FF0188");
      radgrad2.addColorStop(1, "rgba(255, 1, 136, 0)");

      let radgrad3 = ctx.createRadialGradient(95, 15, 15, 102, 20, 40);
      radgrad3.addColorStop(0, "#00C9FF");
      radgrad3.addColorStop(0.8, "#00B5E2");
      radgrad3.addColorStop(1, "rgba(0, 201, 255, 0)");

      let radgrad4 = ctx.createRadialGradient(0, 150, 50, 0, 140, 90);
      radgrad4.addColorStop(0, "#F4F201");
      radgrad4.addColorStop(0.8, "#E4C700");
      radgrad4.addColorStop(1, "rgba(228, 199, 0, 0)");

      ctx.fillStyle = radgrad4;
      ctx.fillRect(0, 0, 150, 150);
      ctx.fillStyle = radgrad3;
      ctx.fillRect(0, 0, 150, 150);
      ctx.fillStyle = radgrad2;
      ctx.fillRect(0, 0, 150, 150);
      ctx.fillStyle = radgrad;
      ctx.fillRect(0, 0, 150, 150);
      ctx.restore();

      //Shadowed text
      ctx.save();
      ctx.translate(330,380);
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.font = "20px Times New Roman";
      ctx.fillStyle = "Black";
      ctx.fillText("Sample String", 5, 30);
      ctx.restore();

      //Stroke text
      ctx.font = '48px serif';
      ctx.strokeText('Hello world', 125, 625);
      ctx.save();
      ctx.restore();
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
  width: 800px;
  height: 800px;
}
</style>