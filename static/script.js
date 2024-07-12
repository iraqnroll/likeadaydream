import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 1, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( 250, 250 );

const loader = new GLTFLoader();

loader.load('../static/shroom.gltf', function (object) {
    object.scene.name = 'shroom';
    scene.add(object.scene);
  }, undefined, function (error) {
    console.error(error);
  });


renderer.setAnimationLoop(animate);
document.getElementById("mushroomScene").appendChild( renderer.domElement );

let light = new THREE.AmbientLight(0xFFFFFF);
light.position.set(-1,10,10);
camera.position.set(0,2,3);
scene.add(light);
//renderer.setClearColor(0xEEEEEE);

function animate(){ 
  var model = scene.getObjectByName("shroom");

  if(model != undefined){
    model.rotation.y +=  + 0.01;
  }
  
  renderer.render(scene, camera);
} 
