<template>
  <div>
    <svg
      version="1.1"
      width="300"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100%" height="100%" fill="red" />
      <circle cx="150" cy="100" r="80" fill="green" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
        SVG
      </text>
    </svg>
    <svg width="100" height="250" id="shapesEx">
      <rect
        x="10"
        y="10"
        width="30"
        height="30"
        stroke="black"
        fill="transparent"
        stroke-width="5"
      />
      <rect
        x="60"
        y="10"
        rx="10"
        ry="10"
        width="30"
        height="30"
        stroke="black"
        fill="transparent"
        stroke-width="5"
      />

      <circle
        cx="25"
        cy="75"
        r="20"
        stroke="red"
        fill="transparent"
        stroke-width="5"
      />
      <ellipse
        cx="75"
        cy="75"
        rx="20"
        ry="5"
        stroke="red"
        fill="transparent"
        stroke-width="5"
      />

      <line
        x1="10"
        x2="50"
        y1="110"
        y2="150"
        stroke="orange"
        stroke-width="5"
      />
      <polyline
        points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
        stroke="orange"
        fill="transparent"
        stroke-width="5"
      />

      <polygon
        points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
        stroke="green"
        fill="transparent"
        stroke-width="5"
      />
      <!-- Capital letters are absolute coordinates, lowercase are relative to last point -->
      <!-- M is move to, L is line to, H is horizontal line, V is vertical line, Z is close path, C is cubic bezier curve, Q is quadratic bezier curve, S adds more cubic curves starting from the endpoint of the last cubic curve, T does the same as S but for quadratics -->
      <path
        d="M20,230 Q40,205 50,230 T90,230"
        fill="none"
        stroke="blue"
        stroke-width="5"
      />
    </svg>
    <!-- Arcs are drawn with A and have these parameters: rx ry x-axis-rotation large-arc-flag sweep-flag x y-->
    <svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 10 315 
          L 110 215 
          A 30 50 0 0 1 162.55 162.45 
          L 172.55 152.45 
          A 30 50 -45 0 1 215.1 109.9 
          L 315 10"
        stroke="black"
        fill="green"
        stroke-width="2"
        fill-opacity="0.5"
      />
    </svg>
    <svg width="350" height="350" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="25"
        y="25"
        width="325"
        height="325"
        fill="transparent"
        stroke="black"
      />
      <text x="175" y="12.5" text-anchor="middle">Large Arc Sweep Flag</text>
      <text x="110" y="25" text-anchor="middle">0</text>
      <text x="250" y="25" text-anchor="middle">1</text>
      <text x="30" y="110" text-anchor="middle" rotate="270">0</text>
      <text x="30" y="250" text-anchor="middle" rotate="270">1</text>
      <text x="-170" y="12.5" text-anchor="middle" transform="rotate(270)">
        Sweep Flag
      </text>

      <path
        d="M 80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z"
        fill="green"
      />
      <path
        d="M 230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z"
        fill="red"
      />
      <path
        d="M 80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z"
        fill="purple"
      />
      <path
        d="M 230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z"
        fill="blue"
      />
    </svg>
    <svg
      width="160"
      height="140"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <line
        x1="40"
        x2="120"
        y1="20"
        y2="20"
        stroke="black"
        stroke-width="20"
        stroke-linecap="butt"
      />
      <line
        x1="40"
        x2="120"
        y1="60"
        y2="60"
        stroke="black"
        stroke-width="20"
        stroke-linecap="square"
      />
      <line
        x1="40"
        x2="120"
        y1="100"
        y2="100"
        stroke="black"
        stroke-width="20"
        stroke-linecap="round"
      />
    </svg>
    <svg
      width="160"
      height="280"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <polyline
        points="40 60 80 20 120 60"
        stroke="black"
        stroke-width="20"
        stroke-linecap="butt"
        fill="none"
        stroke-linejoin="miter"
      />

      <polyline
        points="40 140 80 100 120 140"
        stroke="black"
        stroke-width="20"
        stroke-linecap="round"
        fill="none"
        stroke-linejoin="round"
      />

      <polyline
        points="40 220 80 180 120 220"
        stroke="black"
        stroke-width="20"
        stroke-linecap="square"
        fill="none"
        stroke-linejoin="bevel"
      />
    </svg>
    <svg
      width="200"
      height="150"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <path
        d="M 10 75 Q 50 10 100 75 T 190 75"
        stroke="black"
        stroke-linecap="round"
        stroke-dasharray="5,10,5"
        fill="none"
      />
      <path
        d="M 10 75 L 190 75"
        stroke="red"
        stroke-linecap="round"
        stroke-width="1"
        stroke-dasharray="5,5"
        fill="none"
      />
    </svg>
    <svg width="120" height="240">
      <linearGradient id="Gradient1">
        <stop class="stop1" offset="0%" />
        <stop class="stop2" offset="50%" />
        <stop class="stop3" offset="100%" />
      </linearGradient>
      <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stop-color="red" />
        <stop offset="50%" stop-color="black" stop-opacity="0" />
        <stop offset="100%" stop-color="blue" />
      </linearGradient>
      <rect id="rect1" x="10" y="10" rx="15" ry="15" width="100" height="100" />
      <rect
        x="10"
        y="120"
        rx="15"
        ry="15"
        width="100"
        height="100"
        fill="url(#Gradient2)"
      />
    </svg>
    <svg
      width="120"
      height="240"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="RadialGradient1">
          <stop offset="0%" stop-color="red" />
          <stop offset="100%" stop-color="blue" />
        </radialGradient>
        <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
          <stop offset="0%" stop-color="red" />
          <stop offset="100%" stop-color="blue" />
        </radialGradient>
      </defs>

      <rect
        x="10"
        y="10"
        rx="15"
        ry="15"
        width="100"
        height="100"
        fill="url(#RadialGradient1)"
      />
      <rect
        x="10"
        y="120"
        rx="15"
        ry="15"
        width="100"
        height="100"
        fill="url(#RadialGradient2)"
      />
    </svg>
    <svg
      width="120"
      height="120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="Gradient"
          cx="0.5"
          cy="0.5"
          r="0.5"
          fx="0.25"
          fy="0.25"
        >
          <stop offset="0%" stop-color="red" />
          <stop offset="100%" stop-color="blue" />
        </radialGradient>
      </defs>

      <rect
        x="10"
        y="10"
        rx="15"
        ry="15"
        width="100"
        height="100"
        fill="url(#Gradient)"
        stroke="black"
        stroke-width="2"
      />

      <circle
        cx="60"
        cy="60"
        r="50"
        fill="transparent"
        stroke="white"
        stroke-width="2"
      />
      <circle cx="35" cy="35" r="2" fill="white" stroke="white" />
      <circle cx="60" cy="60" r="2" fill="white" stroke="white" />
      <text
        x="38"
        y="40"
        fill="white"
        font-family="sans-serif"
        font-size="10pt"
      >
        (fx,fy)
      </text>
      <text
        x="63"
        y="63"
        fill="white"
        font-family="sans-serif"
        font-size="10pt"
      >
        (cx,cy)
      </text>
    </svg>
    <svg
      width="220"
      height="220"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="GradientPad"
          cx="0.5"
          cy="0.5"
          r="0.4"
          fx="0.75"
          fy="0.75"
          spreadMethod="pad"
        >
          <stop offset="0%" stop-color="red" />
          <stop offset="100%" stop-color="blue" />
        </radialGradient>
        <radialGradient
          id="GradientRepeat"
          cx="0.5"
          cy="0.5"
          r="0.4"
          fx="0.75"
          fy="0.75"
          spreadMethod="repeat"
        >
          <stop offset="0%" stop-color="red" />
          <stop offset="100%" stop-color="blue" />
        </radialGradient>
        <radialGradient
          id="GradientReflect"
          cx="0.5"
          cy="0.5"
          r="0.4"
          fx="0.75"
          fy="0.75"
          spreadMethod="reflect"
        >
          <stop offset="0%" stop-color="red" />
          <stop offset="100%" stop-color="blue" />
        </radialGradient>
      </defs>

      <rect
        x="10"
        y="10"
        rx="15"
        ry="15"
        width="100"
        height="100"
        fill="url(#GradientPad)"
      />
      <rect
        x="10"
        y="120"
        rx="15"
        ry="15"
        width="100"
        height="100"
        fill="url(#GradientRepeat)"
      />
      <rect
        x="120"
        y="120"
        rx="15"
        ry="15"
        width="100"
        height="100"
        fill="url(#GradientReflect)"
      />

      <text
        x="15"
        y="30"
        fill="white"
        font-family="sans-serif"
        font-size="12pt"
      >
        Pad
      </text>
      <text
        x="15"
        y="140"
        fill="white"
        font-family="sans-serif"
        font-size="12pt"
      >
        Repeat
      </text>
      <text
        x="125"
        y="140"
        fill="white"
        font-family="sans-serif"
        font-size="12pt"
      >
        Reflect
      </text>
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgPage",
};
</script>

<style scoped>
svg {
  margin: 10px;
  background-color: lightblue;
}
#shapesEx {
  padding: 10px;
}
#rect1 {
  fill: url(#Gradient1);
}
.stop1 {
  stop-color: red;
}
.stop2 {
  stop-color: black;
  stop-opacity: 0;
}
.stop3 {
  stop-color: blue;
}
</style>