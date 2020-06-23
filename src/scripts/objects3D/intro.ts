import * as THREE from 'three';

export default function intro() {

  // let geometry = new THREE.IcosahedronGeometry(40, 0);
  let geometry = new THREE.SphereGeometry(45, 20);
  // let material = new THREE.MeshNormalMaterial();
  let loader = new THREE.TextureLoader();
  let texture = loader.load('./../../assets/smoke.png');
  let material = new THREE.MeshLambertMaterial({
      map: texture,
      // transparent: true,
  });
  this.icosahedron = new THREE.Mesh(geometry, material);

}
