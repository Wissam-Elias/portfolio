<template>
  <div class="carousel-container">
    <div class="flex flex-col justify-center items-center h-full w-full">
      <div ref="container"></div>
    </div>
  </div>
</template>
  
<script>
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default {
  name: "ThreeScene",
  mounted() {
    // create a Three.js scene
    const scene = new THREE.Scene();

    // create a Three.js camera
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near clipping plane
      1000 // far clipping plane
    );

    // create a Three.js renderer
    const renderer = new THREE.WebGLRenderer();

    // set the size of the renderer to the size of the container
    renderer.setSize(window.innerWidth, window.innerHeight);

    // add the renderer to the container
    this.$refs.container.appendChild(renderer.domElement);

    // create an instance of the OrbitControls class and pass the camera and renderer as arguments
    const controls = new OrbitControls(camera, renderer.domElement);

    // enable damping (smooth motion) and disable auto rotation
    controls.enableDamping = true;
    controls.autoRotate = false;

    // adjust other options as desired, such as the min and max distance, or the rotation speed
    controls.minDistance = 1;
    controls.maxDistance = 25;
    controls.rotateSpeed = 0.5;

    const cylinderGeometry = new THREE.CylinderGeometry(4, 4,4);
    const cylinderMaterial = new THREE.MeshToonMaterial();
    const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinder.rotateZ(-Math.PI / 2);
    scene.add(cylinder);

    // create a Three.js directional light
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.castShadow = true;
    light.position.set(5, 0, 0);
    scene.add(light);

    // position the camera
    camera.position.z = 15;

    // render the scene
    const render = () => {
      // update the controls
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };
    render();
  },
};
</script>

<style>
.carousel-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
}
</style>