import * as THREE from 'three';
import { OrbitControls } from './OrbitControls';
import intro from './components/intro';
import smokes from './components/smokes';

let introObj = new intro(),
    smokesObj = new smokes();
    // oc = new OrbitControls();

export function homeWebgl() {
    let introWidth = window.innerWidth,
        introHeight = window.innerHeight,
        rot = 0,
        scene,
        camera,
        homeRenderer,
        centerMesh,
        smokes,
        directionalLight,
        directionalLight2,
        pointLight,
        ambient;
    let gridHelper,
        axesHelper,
        lightHelper,
        lightHelper2;
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000);
    camera = new THREE.PerspectiveCamera(30, introWidth/introHeight, 0.1, 1000);
    camera.position.set(27, 60, 500);
    // let controls = new oc(camera);
    // controls.autoRotate = true;

    homeRenderer = new THREE.WebGLRenderer({
        canvas: <HTMLCanvasElement>document.getElementById("intro-canvas")
    });
    homeRenderer.setPixelRatio(window.devicePixelRatio);
    homeRenderer.setSize(introWidth, introHeight);

    centerMesh = introObj.centerMesh;
    scene.add(centerMesh);
    smokes = smokesObj.smokeParticles;
    for (let i: number = 0, max = smokes.length; i < smokes.length; i++) {
        // console.log(smokes[i]);
        scene.add(smokes[i]);
    }

    directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 80, 100);
    scene.add(directionalLight);
    directionalLight2 = new THREE.DirectionalLight(0xff007b, 1);
    directionalLight2.position.set(-50, -80, -100);
    scene.add(directionalLight2);
    pointLight = new THREE.PointLight(0xffff00);
    pointLight.position.set(50, 80, 100);
    scene.add(pointLight);
    pointLight = new THREE.PointLight(0xffff00);
    pointLight.position.set(-50, -80, -100);
    scene.add(pointLight);
    pointLight = new THREE.PointLight(0x1f56fb);
    pointLight.position.set(-80, 100, -80);
    scene.add(pointLight);
    ambient = new THREE.AmbientLight(0x222222);
    scene.add(ambient);

    // gridHelper = new THREE.GridHelper(100, 5);
    // scene.add(gridHelper);
    // axesHelper = new THREE.AxesHelper(1000);
    // scene.add(axesHelper);
    // lightHelper = new THREE.DirectionalLightHelper(directionalLight, 20);
    // scene.add(lightHelper);
    // lightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 20);
    // scene.add(lightHelper2);

    homeAnimate();

    function homeAnimate() {
        centerMesh.rotation.x += 0.033;
        centerMesh.rotation.y -= 0.025;
        centerMesh.rotation.z -= -0.01;

        rot += 0.3;
        const radian = (rot * Math.PI) / 180;
        camera.position.x = 250 * Math.sin(radian);
        camera.position.z = 680 * Math.cos(radian);
        camera.position.y = 520 * Math.sin(radian);
        camera.lookAt(new THREE.Vector3(0, 0, 0));

        // controls.update();
        homeRenderer.render(scene, camera);
        requestAnimationFrame(homeAnimate);
    }

    if (window.matchMedia("screen and (min-width: 580px)").matches) {
        window.addEventListener("resize", function() {
            introWidth = window.innerWidth;
            introHeight = window.innerHeight;
            homeRenderer.setPixelRatio(window.devicePixelRatio);
            homeRenderer.setSize(introWidth, introHeight);
            camera.aspect = introWidth / introHeight;
            camera.updateProjectionMatrix();
        });
    }

}