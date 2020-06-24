import * as THREE from 'three';
import { OctahedronBufferGeometry } from 'three';

export class NotFound {
    introWidth: number;
    introHeight: number;
    rot: number;
    scene: any;
    camera: any;
    // controls: any;
    notFoundRenderer: any;
    notFoundText: string;
    gridHelper: any;
    axesHelper: any;
    lightHelper: any;
    lightHelper2: any;

    constructor() {
        this.introWidth = window.innerWidth;
        this.introHeight = window.innerHeight;
        this.rot = 0;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(30, this.introWidth/this.introHeight, 0.1, 1000);
        // this.controls = new oc(camera);
        this.notFoundRenderer = new THREE.WebGLRenderer({
            canvas: <HTMLCanvasElement>document.getElementById("404-wrap")
        });
        this.notFoundText;
        this.gridHelper;
        this.axesHelper;
        this.lightHelper;
        this.lightHelper2;
    }

    notFoundInit(): void {
        this.scene.background = new THREE.Color(0x000);
        this.camera.position.set(27, 60, 500);
        this.notFoundRenderer.setPixelRatio(window.devicePixelRatio);
        this.notFoundRenderer.setSize(this.introWidth, this.introHeight);

        this.onResize(this.introWidth, this.introHeight, this.notFoundRenderer, this.camera);
    };

    notFoundObj(): void {
        let notFoundText: any;

        let loader = new THREE.FontLoader();
        loader.load('./../fonts/optimer_bold.typeface.json', function(font) {
            let textGeometry = new THREE.TextGeometry("404", {
                font: font,
                size: 20,
                height: 5,
                curveSegments: 10,
            });
            
            let materials = [
                new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff }),
                new THREE.MeshBasicMaterial({ color: 0x000000 })
            ]
            notFoundText = new THREE.Mesh(textGeometry, materials);
        });
    }

    animate(): void {
        this.rot = +0.3;
        const radian = (this.rot * Math.PI) / 180;
        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        this.notFoundRenderer.render(this.scene, this.camera);
        requestAnimationFrame(this.animate);
    }

    onResize(introWidth: number, introHeight: number, notFoundRenderer: any, camera: any): void {
        if (window.matchMedia("screen and (min-width: 580px)").matches) {
            window.addEventListener("resize", function() {
                introWidth = window.innerWidth;
                introHeight = window.innerHeight;
                notFoundRenderer.setPixelRatio(window.devicePixelRatio);
                notFoundRenderer.setSize(introWidth, introHeight);
                camera.aspect = introWidth / introHeight;
                camera.updateProjectionMatrix();
            });
        }
    }
}
