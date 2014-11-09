
varying vec2 pos;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  pos = vec2(position.x, position.y);
}