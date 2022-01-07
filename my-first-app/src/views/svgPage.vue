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
    <svg width="375" height="375" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="50"
        y="50"
        width="325"
        height="325"
        fill="transparent"
        stroke="black"
      />
      <text x="200" y="18.75" text-anchor="middle">Large Arc Sweep Flag</text>
      <text x="140" y="45" text-anchor="middle">0</text>
      <text x="275" y="45" text-anchor="middle">1</text>
      <text x="45" y="140" text-anchor="middle" rotate="270">0</text>
      <text x="45" y="275" text-anchor="middle" rotate="270">1</text>
      <text x="-200" y="18.75" text-anchor="middle" transform="rotate(270)">
        Sweep Flag
      </text>

      <path
        d="M 130 130
           A 45 45, 0, 0, 0, 175 175
           L 175 130 Z"
        fill="green"
      />
      <path
        d="M 280 130
           A 45 45, 0, 1, 0, 325 175
           L 325 130 Z"
        fill="red"
      />
      <path
        d="M 130 280
           A 45 45, 0, 0, 1, 175 325
           L 175 280 Z"
        fill="purple"
      />
      <path
        d="M 280 280
           A 45 45, 0, 1, 1, 325 325
           L 325 280 Z"
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
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="GradientPat1">
          <stop offset="5%" stop-color="white" />
          <stop offset="95%" stop-color="blue" />
        </linearGradient>
        <linearGradient id="GradientPat2" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stop-color="red" />
          <stop offset="95%" stop-color="orange" />
        </linearGradient>

        <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
          <rect x="0" y="0" width="50" height="50" fill="skyblue" />
          <rect x="0" y="0" width="25" height="25" fill="url(#GradientPat2)" />
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="url(#GradientPat1)"
            fill-opacity="0.5"
          />
        </pattern>
      </defs>

      <rect fill="url(#Pattern)" stroke="black" width="200" height="200" />
    </svg>
    <svg width="350" height="60" xmlns="http://www.w3.org/2000/svg">
      <text class="textEx">
        This is
        <tspan font-weight="bold" fill="red">bold and red</tspan>
      </text>
    </svg>
    <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
      <path id="my_path" d="M 20,20 C 80,60 100,40 120,20" fill="transparent" />
      <text class="textEx">
        <textPath
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#my_path"
        >
          A curve.
        </textPath>
      </text>
    </svg>
    <svg width="30" height="10">
      <g fill="red">
        <rect x="0" y="0" width="10" height="10" />
        <rect x="20" y="0" width="10" height="10" />
      </g>
    </svg>
    <svg width="40" height="50" style="background-color: #bff">
      <rect x="0" y="0" width="10" height="10" transform="translate(30,40)" />
    </svg>
    <svg width="31" height="31">
      <rect x="12" y="-10" width="20" height="20" transform="rotate(45)" />
    </svg>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <clipPath id="cut-off-bottom">
          <rect x="0" y="0" width="200" height="100" />
        </clipPath>
      </defs>

      <circle cx="100" cy="100" r="100" clip-path="url(#cut-off-bottom)" />
    </svg>
    <svg
      width="200"
      height="200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient id="MaskGradient">
          <stop offset="0" stop-color="black" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <mask id="Mask">
          <rect
            x="0"
            y="0"
            width="200"
            height="200"
            fill="url(#MaskGradient)"
          />
        </mask>
      </defs>

      <rect x="0" y="0" width="200" height="200" fill="green" />
      <rect x="0" y="0" width="200" height="200" fill="red" mask="url(#Mask)" />
    </svg>
    <svg
      width="200"
      height="200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect x="0" y="0" width="200" height="200" fill="blue" />
      <circle
        cx="100"
        cy="100"
        r="50"
        stroke="yellow"
        stroke-width="40"
        stroke-opacity=".5"
        fill="red"
      />
    </svg>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="200"
      height="200"
    >
      <image
        x="90"
        y="-65"
        width="128"
        height="146"
        transform="rotate(45)"
        xlink:href="data:image/jpeg;base64,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"
      />
    </svg>
    <svg
      width="250"
      viewBox="0 0 200 85"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
    >
      <defs>
        <!-- Filter declaration -->
        <filter
          id="MyFilter"
          filterUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="200"
          height="120"
        >
          <!-- offsetBlur -->
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />

          <!-- litPaint -->
          <feSpecularLighting
            in="blur"
            surfaceScale="5"
            specularConstant=".75"
            specularExponent="20"
            lighting-color="#bbbbbb"
            result="specOut"
          >
            <fePointLight x="-5000" y="-10000" z="20000" />
          </feSpecularLighting>
          <feComposite
            in="specOut"
            in2="SourceAlpha"
            operator="in"
            result="specOut"
          />
          <feComposite
            in="SourceGraphic"
            in2="specOut"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litPaint"
          />

          <!-- merge offsetBlur + litPaint -->
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="litPaint" />
          </feMerge>
        </filter>
      </defs>

      <!-- Graphic elements -->
      <g filter="url(#MyFilter)">
        <path
          fill="none"
          stroke="#D90000"
          stroke-width="10"
          d="M50,66 c-50,0 -50,-60 0,-60 h100 c50,0 50,60 0,60z"
        />
        <path
          fill="#D90000"
          d="M60,56 c-30,0 -30,-40 0,-40 h80 c30,0 30,40 0,40z"
        />
        <g fill="#FFFFFF" stroke="black" font-size="45" font-family="Verdana">
          <text x="52" y="52">SVG</text>
        </g>
      </g>
    </svg>
    <svg
      width="200"
      height="200"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="10" height="10">
        <animate
          attributeName="rx"
          values="0;5;0"
          dur="10s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
    <svg width="300" height="100">
      <title>Attribute Animation with SMIL</title>
      <rect
        x="0"
        y="0"
        width="300"
        height="100"
        stroke="black"
        stroke-width="1"
      />
      <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
        <animate
          attributeName="cx"
          from="0"
          to="500"
          dur="5s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
    <svg width="300" height="100">
      <title>SVG SMIL Animate with transform</title>
      <rect
        x="0"
        y="0"
        width="300"
        height="100"
        stroke="black"
        stroke-width="1"
      />
      <rect
        x="0"
        y="50"
        width="15"
        height="34"
        fill="blue"
        stroke="black"
        stroke-width="1"
      >
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="20s"
          type="rotate"
          from="0 60 60"
          to="360 100 60"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
      <title>SVG SMIL Animate with Path</title>
      <rect
        x="0"
        y="0"
        width="300"
        height="100"
        stroke="black"
        stroke-width="1"
      />
      <circle cx="0" cy="50" r="15" fill="blue" stroke="black" stroke-width="1">
        <animateMotion path="M 0 0 H 300 Z" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
    <svg width="300" height="100">
      <title>SVG SMIL Animate with Path</title>
      <rect
        x="0"
        y="0"
        width="300"
        height="100"
        stroke="black"
        stroke-width="1"
      />
      <rect
        x="0"
        y="0"
        width="20"
        height="20"
        fill="blue"
        stroke="black"
        stroke-width="1"
      >
        <animateMotion
          path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
          dur="3s"
          repeatCount="indefinite"
          rotate="auto"
        />
      </rect>
    </svg>
    <svg width="8cm" height="3cm"  viewBox="0 0 800 300"
     xmlns="http://www.w3.org/2000/svg">
  <desc>Example anim01 - demonstrate animation elements</desc>
  <rect x="1" y="1" width="798" height="298"
        fill="none" stroke="blue" stroke-width="2" />
  <!-- The following illustrates the use of the 'animate' element
        to animate a rectangles x, y, and width attributes so that
        the rectangle grows to ultimately fill the viewport. -->
  <rect id="RectElement" x="300" y="100" width="300" height="100"
        fill="rgb(255,255,0)"  >
    <animate attributeName="x" begin="0s" dur="9s"
             fill="freeze" from="300" to="0" />
    <animate attributeName="y" begin="0s" dur="9s"
             fill="freeze" from="100" to="0" />
    <animate attributeName="width" begin="0s" dur="9s"
             fill="freeze" from="300" to="800" />
    <animate attributeName="height" begin="0s" dur="9s"
             fill="freeze" from="100" to="300" />
  </rect>
  <!-- Set up a new user coordinate system so that
        the text string's origin is at (0,0), allowing
        rotation and scale relative to the new origin -->
  <g transform="translate(100,100)" >
    <!-- The following illustrates the use of the 'set', 'animateMotion',
         'animate' and 'animateTransform' elements. The 'text' element
         below starts off hidden (i.e., invisible). At 3 seconds, it:
           * becomes visible
           * continuously moves diagonally across the viewport
           * changes color from blue to dark red
           * rotates from -30 to zero degrees
           * scales by a factor of three. -->
    <text id="TextElement" x="0" y="0"
          font-family="Verdana" font-size="35.27" visibility="hidden"  >
      It's alive!
      <set attributeName="visibility" to="visible"
           begin="3s" dur="6s" fill="freeze" />
      <animateMotion path="M 0 0 L 100 100"
           begin="3s" dur="6s" fill="freeze" />
      <animate attributeName="fill"
           from="rgb(0,0,255)" to="rgb(128,0,0)"
           begin="3s" dur="6s" fill="freeze" />
      <animateTransform attributeName="transform"
           type="rotate" from="-30" to="0"
           begin="3s" dur="6s" fill="freeze" />
      <animateTransform attributeName="transform"
           type="scale" from="1" to="3" additive="sum"
           begin="3s" dur="6s" fill="freeze" />
    </text>
  </g>
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
.textEx {
  /* The browser knows what dominant-baseline is, it's ok. */
  dominant-baseline: hanging;
  font: 28px Verdana, Helvetica, Arial, sans-serif;
}
</style>