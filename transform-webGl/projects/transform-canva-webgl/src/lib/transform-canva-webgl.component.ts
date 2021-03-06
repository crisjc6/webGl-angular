import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-transform-canva-webgl',
  template: `
<canvas id="canvas"></canvas>
<div id="uiContainer">
  <div id="ui">
    <div id="x"></div>
    <div id="y"></div>
    <div id="angle"></div>
    <div id="scaleX"></div>
    <div id="scaleY"></div>
  </div>
</div>
<!-- vertex shader -->
<script  id="vertex-shader-2d" type="x-shader/x-vertex">
attribute vec2 a_position;

uniform vec2 u_resolution;
uniform mat3 u_matrix;

void main() {
  // Multiply the position by the matrix.
  vec2 position = (u_matrix * vec3(a_position, 1)).xy;

  // convert the position from pixels to 0.0 to 1.0
  vec2 zeroToOne = position / u_resolution;

  // convert from 0->1 to 0->2
  vec2 zeroToTwo = zeroToOne * 2.0;

  // convert from 0->2 to -1->+1 (clipspace)
  vec2 clipSpace = zeroToTwo - 1.0;

  gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
}
</script>
<!-- fragment shader -->
<script  id="fragment-shader-2d" type="x-shader/x-fragment">
precision mediump float;

uniform vec4 u_color;

void main() {
   gl_FragColor = u_color;
}
</script><!--
for most samples webgl-utils only provides shader compiling/linking and
canvas resizing because why clutter the examples with code that's the same in every sample.
See https://webglfundamentals.org/webgl/lessons/webgl-boilerplate.html
and https://webglfundamentals.org/webgl/lessons/webgl-resizing-the-canvas.html
for webgl-utils, m3, m4, and webgl-lessons-ui.
-->
<script src="https://webglfundamentals.org/webgl/resources/webgl-utils.js"></script>
<script src="https://webglfundamentals.org/webgl/resources/webgl-lessons-ui.js"></script>
  `,
  styles: [
  ]
})
export class TransformCanvaWebglComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
