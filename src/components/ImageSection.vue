<template>
  <section id="imageSection">
      
  </section>
</template>

<script>
// <img :src="big_image" class="js-image">
import big_image from "../assets/big_image.jpg";
import * as THREE from "three";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 600/400, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 600, 400, false );

let TEXTURE = new THREE.TextureLoader().load(big_image); 
let mesh = new THREE.Mesh(
	new THREE.PlaneBufferGeometry(20, 20), 
	new THREE.MeshBasicMaterial({map: TEXTURE})
)

scene.add(mesh);

camera.position.z = 5;

var animate = function() {
    requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;

	renderer.render( scene, camera );
};

export default {
    data: function() {
        return {
            big_image: big_image
        }
    },
    mounted: function() {
        document.getElementById('imageSection').appendChild( renderer.domElement);
        animate();
    }
}
</script>

<style scoped>

section {
    margin-top: 2rem;
}

img {
    width: 40rem;
}

</style>