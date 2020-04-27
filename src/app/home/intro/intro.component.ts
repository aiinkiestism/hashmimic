import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';
import { CubeCamera } from 'three';
import { WEBGL } from './webglCheck';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  // scene = new THREE.Scene();
  // camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  // renderer = new THREE.WebGLRenderer();
  // geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  // cube = new THREE.Mesh( this.geometry, this.material );
  
  constructor() {

  }
  
  ngOnInit(): void {
    // this.renderer.setSize( window.innerWidth, window.innerHeight );
    // document.getElementById("intro").appendChild( this.renderer.domElement );
    // this.scene.add( this.cube );
    // this.camera.position.z = 5;
    // this.animate();
  }
  
  // if ( WEBGL.isWebGLAvailable() ) {
    // animate();
  // }
  
  // animate(): void {
  //   requestAnimationFrame( this.animate );

  //   this.cube.rotation.x += 0.01;
  //   this.cube.rotation.y += 0.01;

  //   this.renderer.render( this.scene, this.camera );
  // }

}
