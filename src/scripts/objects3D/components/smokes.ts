import * as THREE from 'three';

export default function smokes() {
    
    this.smokeParticles = [];

    let geometry = new THREE.SphereGeometry(23, 30);
    let loader = new THREE.TextureLoader();
    let texture = loader.load('./../../assets/smoke3.png');
    let material = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
    });
    let loader2 = new THREE.TextureLoader();
    let texture2 = loader2.load('./../../assets/smoke2.png');
    let material2 = new THREE.MeshLambertMaterial({
        map: texture2,
        transparent: true,
    });
    
    for (let i: number = 0; i < 5; i++) {
        
        let particle = new THREE.Mesh(geometry, material);
        particle.position.x = Math.random() * 350 / i;
        particle.position.y = Math.random() * 250;
        particle.position.z = Math.random() * 300;
        
        this.smokeParticles.push(particle);

    }
    
    for (let i: number = 0; i < 5; i++) {
        
        let particle = new THREE.Mesh(geometry, material2);
        particle.position.x = Math.random() * -400 / i;
        particle.position.y = Math.random() * 250;
        particle.position.z = Math.random() * -300;
        
        this.smokeParticles.push(particle);

    }
    
    for (let i: number = 0; i < 5; i++) {
        
        let particle = new THREE.Mesh(geometry, material2);
        particle.position.x = Math.random() * -130 / i;
        particle.position.y = Math.random() * -300;
        particle.position.z = Math.random() * 300;
        
        this.smokeParticles.push(particle);

    }
    
    for (let i: number = 0; i < 5; i++) {
        
        let particle = new THREE.Mesh(geometry, material2);
        particle.position.x = Math.random() * -100 / i;
        particle.position.y = Math.random() * 300;
        particle.position.z = Math.random() * 340;
        
        this.smokeParticles.push(particle);

    }

    for (let i: number = 0; i < 5; i++) {
        
        let particle = new THREE.Mesh(geometry, material);
        particle.position.x = Math.random() * 300 / i;
        particle.position.y = Math.random() * -250;
        particle.position.z = Math.random() * -280;
        
        this.smokeParticles.push(particle);

    }

    for (let i: number = 0; i < 5; i++) {

        let particle = new THREE.Mesh(geometry, material);
        particle.position.x = Math.random() * 600 / i;
        particle.position.y = Math.random() * -550;
        particle.position.z = Math.random() * 500;
        
        this.smokeParticles.push(particle);

    }

}
