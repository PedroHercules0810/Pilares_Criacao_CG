import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let model = null;

class NaveEspacial {
	constructor() {
		this.model = null;
		this.load(this);
		this.arrowUp = false;
			this.arrowDown = false;
			this.arrowLeft = false;
			this.arrowRight = false;
	}

	load(object) {
		
		const loader = new GLTFLoader();
		
		loader.load(
			// resource URL
			'models/Spaceship.gltf',
			// called when the resource is loaded
			function (gltf) {
				
				
				scene.add(gltf.scene);
				object.model = gltf.scene.children[0];
				
				// model = glb.scene.children[0];
				// console.log(model);
				// scene.add( model );
				// model = glb.scene.children[12];
				// this.scene.add = (this.model)
				
				// scene.add( gltf.scene );
				
				gltf.animations; // Array<THREE.AnimationClip>
				gltf.scene; // THREE.Group
				gltf.scenes; // Array<THREE.Group>
				gltf.cameras; // Array<THREE.Camera>
				gltf.asset; // Object
				
			},
			// called while loading is progressing
			function (xhr) {
				
				console.log((xhr.loaded / xhr.total * 100) + '% loaded');
				
			},
			// called when loading has errors
			function (error) {
				
				console.log('An error happened');
				console.log(error);
				
				
			}
			
		);
	}
	move() {
		if (this.model) {
			this.model.position.z = 15;
			this.model.scale.set(.1,.1,.1)


			


		// 	if (this.arrowUp) {
		// 		this.model.position.y += 0.5;
		// 		this.model.rotation.y += 0.5;
		// 	}
		// 	if (this.arrowDown) {
		// 		this.model.rotation.y -= 0.5;
		// 		this.model.position.y -= 0.5;
		// 	}
		// 	if (this.arrowRight) {
		// 		this.model.position.x += 0.5;
		// 		this.model.rotation.x += 0.5;
		// 	}
		// 	if (this.arrowLeft) {
		// 		this.model.position.x -= 0.5;
		// 		this.model.rotation.x -= 0.5;
		// 	}
		// }
		// renderer.setAnimationLoop( animate );
		
		// document.addEventListener("keydown", onDocumenteKeyDown, false)
		
		// function onDocumenteKeyDown(event) {
		// 	console.log(event.key);
		// 	console.log(event.keyCode);
		// 	switch(event.key){
		// 		case "ArrowUp":
		// 			this.arrowUp = true;
		// 		break;
		// 		case "ArrowDown":
		// 			this.arrowDown = true;
		// 		break;
		// 		case "ArrowLeft":
		// 			this.arrowLeft = true;
		// 		break;
		// 		case "ArrowRight":
		// 			this.arrowRight = true;
		// 		break;
		// 		case " ":
		// 			this.space = true;
		// 		break;
		// 	}
		// }
		
		// document.addEventListener("keyup", onDocumenteKeyUp, false)
		
		// function onDocumenteKeyUp(event) {
		// 	console.log(event.key);
		// 	console.log(event.keyCode);
		// 	switch(event.key){
		// 		case "ArrowUp":
		// 			this.arrowUp = false;
		// 		break;
		// 		case "ArrowDown":
		// 			this.arrowDown = false;
		// 		break;
		// 		case "ArrowLeft":
		// 			this.arrowLeft = false;
		// 		break;
		// 		case "ArrowRight":
		// 			this.arrowRight = false;
		// 		break;
		// 		case " ":
		// 			this.space = false;
		// 		break;
		// 	}
		// }
		// 
	}
	}
}

class Sun {
	constructor() {
		this.model = null;
		this.light = null
		this.load(this);
	}
	
	load(object) {
		
		const loader = new GLTFLoader();
		
		loader.load(
			// resource URL
			'models/Sun.gltf',
			// called when the resource is loaded
			function (gltf) {
				
				
				scene.add(gltf.scene);
				object.model = gltf.scene.children[0];
				
				const light = new THREE.PointLight(0xff0000, 1, 100);
				object.light = light;
				object.model.add(light);
				
				// model = glb.scene.children[0];
				// console.log(model);
				// scene.add( model );
				// model = glb.scene.children[12];
				// this.scene.add = (this.model)
				
				// scene.add( gltf.scene );
				
				gltf.animations; // Array<THREE.AnimationClip>
				gltf.scene; // THREE.Group
				gltf.scenes; // Array<THREE.Group>
				gltf.cameras; // Array<THREE.Camera>
				gltf.asset; // Object
				
			},
			// called while loading is progressing
			function (xhr) {
				
				console.log((xhr.loaded / xhr.total * 100) + '% loaded');
				
			},
			// called when loading has errors
			function (error) {
				
				console.log('An error happened');
				console.log(error);
				
				
			}
			
		);
	}
	move() {
		if (this.model) {
			
			this.model.rotation.y += 0.01; // Rotate the Sun (optional)
			this.model.scale.set(5,5,5)
			this.model.position.z = 0
		}

	}
}

class blackHole {
	constructor() {
		this.model = null;
		this.load(this);
	}
	
	load(object) {
		
		const loader = new GLTFLoader();
		
		loader.load(
			// resource URL
			'models/Black hole.gltf',
			// called when the resource is loaded
			function (gltf) {
				
				
				scene.add(gltf.scene);
				object.model = gltf.scene.children[0];
				
				
				// model = glb.scene.children[0];
				// console.log(model);
				// scene.add( model );
				// model = glb.scene.children[12];
				// this.scene.add = (this.model)
				
				// scene.add( gltf.scene );
				
				gltf.animations; // Array<THREE.AnimationClip>
				gltf.scene; // THREE.Group
				gltf.scenes; // Array<THREE.Group>
				gltf.cameras; // Array<THREE.Camera>
				gltf.asset; // Object
				
			},
			// called while loading is progressing
			function (xhr) {
				
				console.log((xhr.loaded / xhr.total * 100) + '% loaded');
				
			},
			// called when loading has errors
			function (error) {
				
				console.log('An error happened');
				console.log(error);
				
				
			}
			
		);
	}
	move() {
		if (this.model) {
			
			this.model.rotation.y -= 0.01; // Rotate the Sun (optional)
			this.model.scale.set(5,5,5)
			this.model.position.z = -400
			this.model.position.y = -100
		}

	}
}

class Planet {
	constructor(modelPath, orbitRadius, orbitSpeed) {
		this.model = null;
		this.modelPath = modelPath;
		this.orbitRadius = orbitRadius;
		this.orbitSpeed = orbitSpeed;
		this.angle = 0;
		this.load();
	}

	load() {
		const loader = new GLTFLoader();
		const material = new THREE.MeshPhongMaterial({ color: 0xcccccc }); // Adjust color as needed

		loader.load(
			this.modelPath,
			(gltf) => {
				this.model = gltf.scene.children[0];
				scene.add(this.model);

				this.model.material = material;
			},
			(xhr) => {
				console.log((xhr.loaded / xhr.total * 100) + '% loaded');
			},
			(error) => {
				console.log('An error happened');
				console.error(error);
			}
		);
	}

	move() {
		if (this.model) {
			this.model.scale.set(3,3,3)
			this.model.rotation.y += 0.02;
	  
			this.angle += this.orbitSpeed; // Update the planet's angle for orbiting
	  
			this.model.position.x =  Math.cos(this.angle) +( this.orbitRadius *  Math.sin(this.angle)) ;
			this.model.position.z =  Math.sin(this.angle) +( this.orbitRadius *  Math.cos(this.angle)) ;
			//this.model.position.z = this.model.position.z;
		  }
	}
}

let nave = new NaveEspacial();
let sol = new Sun();
let venus = new Planet('models/Venus.gltf', 20, 0.01);
let mercurio = new Planet('models/Mercury.gltf', 15, 0.02);
let terra = new Planet('models/Earth and Moon.gltf', 22, 0.005);
let marte = new Planet('models/Mars.gltf', 24, 0.006);
let jupiter = new Planet('models/Jupiter.gltf', 30, 0.006);
let saturno = new Planet('models/Saturn.gltf', 39, 0.002);
let urano = new Planet('models/Uranus.gltf', 30, 0.004);
let netuno = new Planet('models/Neptune.gltf', 40, 0.004);
let plutao = new Planet('models/Pluto.gltf', 10, 0.04);
let buraco = new blackHole();

let light = new THREE.AmbientLight(0xffffff);
scene.add(light);

// const light = new THREE.PointLight( 0xff0000, 1, 100 );
// light.position.set( 0, 0 , -400 );
// scene.add( light );

const controls = new OrbitControls( camera, renderer.domElement );

camera.position.z = 50;
camera.rotation.x = 5.9;
camera.position.y = 5;


function animate() {
	renderer.render(scene, camera);

	buraco.move();
	nave.move();
	venus.move();
	mercurio.move();
	terra.move();
	marte.move();
	jupiter.move();	
	saturno.move();	
	urano.move();
	netuno.move();
	plutao.move();
	sol.move();

	 controls.update();

	// updatePlanetOrbit(venus);
	// updatePlanetOrbit(mercurio);


	// if (nave.model) {

	//     nave.model.rotation.y += 0.02;

	// }


	renderer.setAnimationLoop(animate);
}

animate();