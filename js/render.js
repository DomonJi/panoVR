'use strict'
import THREE from 'three'
import controller from './controller'
var camera,
  scene,
  mesh,
  jumps = -1,
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
  ratio = width / height

const cachedLoader = (progress, error) => {
  var cached = []
  var loader = new THREE.TextureLoader()
  return (currentScene, cb) => {
    return new Promise((resolve, reject) => {
      let tex = cached[currentScene.index]
      if (tex === undefined) {
        tex = loader.load(currentScene.path, () => {}, progress, error)
        cached[currentScene.index] = tex
      } else {
        console.log('cached')
      }
      resolve(tex)
    }).then(cb).then(() => {
      currentScene.jump.forEach((j) => {
        if (cached[j.jumpto] === undefined) {
          cached[j.jumpto] = loader.load(controller.getJumpScene(j.jumpto).path)
        }
      })
    })
  }
}

const initTexCb = (tex) => {
  return new Promise((res, rej) => {
    init(tex)
    animate()
    res()
  })
}

const texCb = (tex) => {
  return new Promise((res, rej) => {
    mesh.material = new THREE.MeshBasicMaterial({map: tex})
    currentScene.jump.forEach((j) => scene.add(j.plane))
    updateDes(currentScene.des)
    res()
  })
}

var cachedLoad = cachedLoader(function(xhr) {
  console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}, function(xhr) {
  console.log('An error happened');
})

cachedLoad(currentScene, initTexCb)

updateDes(currentScene.des)

function init(texture) {
  camera = new THREE.PerspectiveCamera(fov, ratio, 1, 1000);
  scene = new THREE.Scene();
  mesh = new THREE.Mesh(new THREE.SphereGeometry(500, 60, 40), new THREE.MeshBasicMaterial({map: texture}));
  mesh.scale.x = -1;
  scene.add(mesh);
  currentScene.jump.forEach((j) => scene.add(j.plane));
  // scene.add(guid);
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(width, height);
  element.appendChild(renderer.domElement);
  element.addEventListener('mousedown', onDocumentMouseDown, false);
  element.addEventListener('mousewheel', onDocumentMouseWheel, false);
  element.addEventListener('DOMMouseScroll', onDocumentMouseWheel, false);
  window.addEventListener('resize', onWindowResized, false);
  document.addEventListener('mousedown', detectClick, false);
  document.addEventListener('mouseup', detectClickUp, false);
  document.addEventListener('mousemove', detectMove, false);
  onWindowResized(null);
}
var canjump = false;
function detectClickUp(event) {
  if (jumps > -1 && canjump) {
    controller.jumpScene(jumps);
    canjump = false;
  } else {
    canjump = false
  }
}

function detectClick(e) {
  if (jumps > -1) {
    canjump = true
  } else {
    canjump = false
  }
}

function detectMove(event) {
  let raycaster = new THREE.Raycaster();
  event.preventDefault();

  let mouseVector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
  raycaster.setFromCamera(mouseVector, camera);
  jumps = -1;
  currentScene.jump.forEach(function(j) {
    let intersects = raycaster.intersectObject(j.plane)
    if (intersects.length > 0) {
      jumps = j.jumpto
    };

  });
  // let intersect2 = raycaster.intersectObjects(scene.children, true)
  // console.log(intersect2);
  if (jumps > -1) {
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
  // lat = Math.max(-85, Math.min(85, lat));
  lat = 0
  phi = THREE.Math.degToRad(90 - lat);
  theta = THREE.Math.degToRad(lon);
  camera.position.x = 100 * Math.sin(phi) * Math.cos(theta);
  camera.position.y = 100 * Math.cos(phi);
  camera.position.z = 100 * Math.sin(phi) * Math.sin(theta);
  camera.lookAt(scene.position);
  if (currentScene != controller.getCurrentScene()) {
    currentScene.jump.forEach((j) => scene.remove(j.plane));
    currentScene = controller.getCurrentScene();
    console.log(currentScene)
    cachedLoad(currentScene, texCb)
    lon = 0
    lat = 0
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
