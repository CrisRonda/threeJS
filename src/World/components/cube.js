import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  SphereBufferGeometry,
  TextureLoader,
} from "https://unpkg.com/three@0.117.0/build/three.module.js";

function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load("/assets/textures/uv-test-col.png");
  texture.repeat.set = (5, 5);
  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
    // wireframe: true,
    // bumpMap: texture,
    // bumpScale: 1,
    // color: "green",
    // transparent: true,
    // roughness: 0.9,
    // metalness: 1,
    // wireframeLinewidth: 0.5,
  });

  return material;
}

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  // const geometry = new SphereBufferGeometry(1, 16, 16);
  const material = createMaterial();
  const cube = new Mesh(geometry, material);

  cube.rotation.set(3, 2, 0);

  const radiansPerSecond = MathUtils.degToRad(30);

  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += delta * radiansPerSecond;
    cube.rotation.x += delta * radiansPerSecond;
    cube.rotation.y += delta * radiansPerSecond;
  };

  return cube;
}

export { createCube };
