/*
 * render.js
 * Copyright (C) 2016 disoul <disoul@disoul-surface>
 *
 * Distributed under terms of the MIT license.
 */
'use strict';
var THREE = require('three');
var controller = require('./controller');
console.log(controller);
var camera,
    scene,
    mesh,
    guid,
    element = document.getElementById('main'), // Inject scene into this
    renderer,
    onPointerDownPointerX,
    onPointerDownPointerY,
    onPointerDownLon,
    onPointerDownLat,
    fov = 70, // Field of View
    isUserInteracting = false,
    lon = 0,
    lat = 0,
    phi = 0,
    theta = 0,
    onMouseDownMouseX = 0,
    onMouseDownMouseY = 0,
    onMouseDownLon = 0,
    onMouseDownLat = 0,
    currentScene = controller.getCurrentScene(),
    width = window.innerWidth,
    height = window.innerHeight,
    ratio = width / height;

var loader = new THREE.TextureLoader();
var texture = loader.load(currentScene.path, function() {
    init();
    animate();
}, function(xhr) {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
},
// Function called when download errors
function(xhr) {
    console.log('An error happened');
});
updateDes(currentScene.des);

function init() {
    camera = new THREE.PerspectiveCamera(fov, ratio, 1, 1000);
    scene = new THREE.Scene();
    guid = new THREE.Mesh(new THREE.PlaneGeometry(130, 250, 10, 10), new THREE.MeshBasicMaterial({color: 0x000}));
    guid.position.x = -300;
    guid.position.z = 420;
    guid.position.y = -25;
    guid.rotation.y = 40;
    mesh = new THREE.Mesh(new THREE.SphereGeometry(500, 60, 40), new THREE.MeshBasicMaterial({map: texture}));
    mesh.scale.x = -1;
    scene.add(mesh);
    scene.add(guid);
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(width, height);
    element.appendChild(renderer.domElement);
    element.addEventListener('mousedown', onDocumentMouseDown, false);
    element.addEventListener('mousewheel', onDocumentMouseWheel, false);
    element.addEventListener('DOMMouseScroll', onDocumentMouseWheel, false);
    window.addEventListener('resize', onWindowResized, false);
    document.addEventListener('mousedown', detectClick, false);
    document.addEventListener('mousemove', detectMove, false);
    onWindowResized(null);
}

function detectClick(event) {
    var raycaster = new THREE.Raycaster();
    event.preventDefault();

    var mouseVector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    raycaster.setFromCamera(mouseVector, camera);
    let intersects = raycaster.intersectObject(guid);
}

function detectMove(event) {
    var raycaster = new THREE.Raycaster();
    event.preventDefault();

    var mouseVector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
    raycaster.setFromCamera(mouseVector, camera);
    let intersects = raycaster.intersectObject(guid);
    if (intersects.length > 0) {
        //console.log(intersects[0]);
        document.body.style.cursor = "pointer";
    } else
        document.body.style.cursor = "default";
    }
;

function onWindowResized(event) {
    //  renderer.setSize(window.innerWidth, window.innerHeight);
    //  camer?a.projectionMatrix.makePerspective(fov, window.innerWidth / window.innerHeight, 1, 1100);
    renderer.setSize(width, height);
    camera.projectionMatrix.makePerspective(fov, ratio, 1, 1100);
}

function onDocumentMouseDown(event) {
    event.preventDefault();
    onPointerDownPointerX = event.clientX;
    onPointerDownPointerY = event.clientY;
    onPointerDownLon = lon;
    onPointerDownLat = lat;
    isUserInteracting = true;
    element.addEventListener('mousemove', onDocumentMouseMove, false);
    element.addEventListener('mouseup', onDocumentMouseUp, false);
}
function onDocumentMouseMove(event) {
    lon = (event.clientX - onPointerDownPointerX) * -0.175 + onPointerDownLon;
    lat = (event.clientY - onPointerDownPointerY) * -0.175 + onPointerDownLat;
}
function onDocumentMouseUp(event) {
    isUserInteracting = false;
    element.removeEventListener('mousemove', onDocumentMouseMove, false);
    element.removeEventListener('mouseup', onDocumentMouseUp, false);
}
function onDocumentMouseWheel(event) {
    // WebKit
    if (event.wheelDeltaY) {
        fov -= event.wheelDeltaY * 0.05;
        // Opera / Explorer 9
    } else if (event.wheelDelta) {
        fov -= event.wheelDelta * 0.05;
        // Firefox
    } else if (event.detail) {
        fov += event.detail * 1.0;
    }
    if (fov < 45 || fov > 90) {
        fov = (fov < 45)
            ? 45
            : 90;
    }
    camera.projectionMatrix.makePerspective(fov, ratio, 1, 1100);
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.Math.degToRad(90 - lat);
    theta = THREE.Math.degToRad(lon);
    camera.position.x = 100 * Math.sin(phi) * Math.cos(theta);
    camera.position.y = 100 * Math.cos(phi);
    camera.position.z = 100 * Math.sin(phi) * Math.sin(theta);
    camera.lookAt(scene.position);
    if (currentScene != controller.getCurrentScene()) {
        currentScene = controller.getCurrentScene();
        var texture = loader.load(currentScene.path);
        mesh.material = new THREE.MeshBasicMaterial({map: texture});

        updateDes(currentScene.des);
    }
    renderer.render(scene, camera);
}

function updateDes(des) {
    if (des == undefined) {
        return;
    }

    window.desNode = document.getElementById('des');
    desNode.removeChild(desNode.childNodes[0]);
    desNode.appendChild(document.createTextNode(des));

    desNode.style.opacity = 1;
    window.setTimeout('desNode.style.opacity = 0', 5000);
}
