#ifdef GL_ES
precision highp float;
#endif

varying vec2 pos;
uniform float time;

void main() {
	float x = (pos.x + 1.0) / 2.0;
	float y = (pos.y + 1.0) / 2.0;

	float r = cos(x * 10.0) + sin(y * 4.0);
	gl_FragColor = vec4(r, 0.0, 0.0, 1.0);
}
