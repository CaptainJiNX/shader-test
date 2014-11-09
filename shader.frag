#ifdef GL_ES
precision highp float;
#endif

varying vec2 t;
varying vec2 pos;

uniform float time;
uniform sampler2D tex0;

void main() {
  float v1 = (sin(t.s+time) + 1.0) / 2.0;
  float v2 = (cos(t.t+time) + 1.0) / 2.0;

  vec2 tt = vec2(t.s + sin(time / 10.0), t.t + cos(time / 10.0));

  float d = distance(vec2(0.0, 0.0), pos);
  vec4 c1 = texture2D(tex0, tt);

  float avg = (c1.r + c1.g + c1.b) / 3.0;

  float r = c1.r + v1 * pow(avg, 4.0) - pow(d, pow(avg, 2.0));
  float g = c1.g + v2 * pow(avg, 4.0) - pow(d, pow(avg, 2.0));
  float b = c1.g - pow(d, pow(avg, 2.0));

  gl_FragColor = vec4(r, g, b, 1.0);
}
