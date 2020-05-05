import { Component, OnInit, ViewChild } from '@angular/core';

import * as THREE from 'three';
import { CubeCamera } from 'three';
import { WEBGL } from './webglCheck';

import { IntroService } from './intro.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  introWidth = window.innerWidth;
  introHeight = window.innerHeight;
  rot = 0;
  camera = new THREE.PerspectiveCamera(30, this.introWidth/this.introHeight, 0.1, 1000);
  // let controls = new THREE.OrbitControls(camera);
  // controls.autoRotate = true;

  renderer = new THREE.WebGLRenderer({
      // canvas: document.getElementById("intro-canvas")
  });

  constructor(private introService: IntroService) {

  }

  ngOnInit(): void {
    // document.getElementById("intro-canvas").insertBefore(this.renderer.domElement, null);
    // this.intro();
  }

  // if ( WEBGL.isWebGLAvailable() ) {
    // animate();
  // }

  // window.onResize = this.resize;

  public intro(): void {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000);
    // const camera = new THREE.PerspectiveCamera(30, this.introWidth/this.introHeight, 0.1, 1000);
    this.camera.position.set(0, 60, 500);
    // let controls = new THREE.OrbitControls(camera);
    // controls.autoRotate = true;

    // const renderer = new THREE.WebGLRenderer({
    //     canvas: document.getElementById("intro-canvas")
    // });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.introWidth, this.introHeight);

    const geometry = new THREE.IcosahedronGeometry(40, 0);
    const material = new THREE.MeshNormalMaterial();
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);

    // const directionalLight = new THREE.DirectionalLight(0xffffff);
    // directionalLight.position.set(1, 1, 1);
    // scene.add(directionalLight);
    const pointLight = new THREE.PointLight(0xffff00);
    pointLight.position.set(80, 0, 25);
    scene.add(pointLight);

    animate();

    function animate() {
        icosahedron.rotation.x += 0.01;
        icosahedron.rotation.y = -0.25;
        // contorls.update();

        this.rot += 0.3;
        const radian = (this.rot * Math.PI) / 180;
        this.camera.position.x = 300 * Math.sin(radian);
        this.camera.position.z = 800 * Math.cos(radian);
        this.camera.position.y = 300 * Math.sin(radian);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.renderer.render(scene, this.camera);
        requestAnimationFrame(animate);
    }

    this.resize();

    // loading.setAttribute("style", "display: none;");
  }

  public resize(): void {
    this.introWidth = window.innerWidth;
    this.introHeight = window.innerHeight;
    this.intro();
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.introWidth, this.introHeight);
    this.camera.aspect = this.introWidth / this.introHeight;
    this.camera.updateProjectionMatrix();
  }

}
