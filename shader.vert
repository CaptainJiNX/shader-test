varying vec2 t;
varying vec2 pos;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
  t = uv;
  pos = vec2(position.x, position.y);
}