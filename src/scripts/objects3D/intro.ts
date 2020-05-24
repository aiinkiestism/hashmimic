import * as THREE from 'three';


export function intro() {
  let introWidth = window.innerWidth,
      introHeight = window.innerHeight,
      rot = 0,
      introCanvas = document.getElementById("intro-canvas");

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000);
  const camera = new THREE.PerspectiveCamera(30, introWidth/introHeight, 0.1, 1000);
  camera.position.set(0, 60, 500);
  // let controls = new THREE.OrbitControls(camera);
  // controls.autoRotate = true;

  const renderer = new THREE.WebGLRenderer({
      canvas: <HTMLCanvasElement>document.getElementById("intro-canvas")
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(introWidth, introHeight);

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

      rot += 0.3;
      const radian = (rot * Math.PI) / 180;
      camera.position.x = 300 * Math.sin(radian);
      camera.position.z = 800 * Math.cos(radian);
      camera.position.y = 300 * Math.sin(radian);
      camera.lookAt(new THREE.Vector3(0, 0, 0));

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
  }

  if(window.matchMedia("screen and (min-width: 580px)").matches) {
    window.addEventListener("resize", function() {
        introWidth = window.innerWidth;
        introHeight = window.innerHeight;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(introWidth, introHeight);
        camera.aspect = introWidth / introHeight;
        camera.updateProjectionMatrix();
    });
  }


}
