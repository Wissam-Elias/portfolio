<template>
  <div ref="container"></div>
</template>
  
  <script>
import * as THREE from "three";

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
    renderer.setSize( window.innerWidth, window.innerHeight );

    // add the renderer to the container
    this.$refs.container.appendChild(renderer.domElement);

    // create a Three.js cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // position the camera
    camera.position.z = 5;

    // render the scene
    const render = () => {
      console.log("component rendered");
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    render();
  },
};
</script>