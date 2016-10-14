/*
 * data.js
 * Copyright (C) 2016 disoul <disoul@disoul-surface>
 *
 * Distributed under terms of the MIT license.
 */
'use strict'
import THREE from 'three'
var data = []
var jump = [
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(80, 80, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = 79
        plane.position.z = 467
        plane.position.y = -279
        plane.rotation.y = 75
        plane.rotation.x = -27
        return plane
      })(),
      jumpto: 1
    }, {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(80, 80, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -349
        plane.position.z = -317
        plane.position.y = -259
        plane.rotation.y = 0
        plane.rotation.x = 0
        plane.rotation.z = 90
        return plane
      })(),
      jumpto: 2
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = 390
        plane.position.z = -290
        plane.position.y = -360
        plane.rotation.y = 75
        plane.rotation.x = -27
        plane.rotation.z = 90
        return plane
      })(),
      jumpto: 0
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = 390
        plane.position.z = -320
        plane.position.y = -360
        plane.rotation.y = 75
        plane.rotation.x = -27
        plane.rotation.z = 90
        return plane
      })(),
      jumpto: 0
    }, {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = 550
        plane.position.z = 220
        plane.position.y = -400
        plane.rotation.y = 75
        plane.rotation.x = -27
        plane.rotation.z = 90
        return plane
      })(),
      jumpto: 3
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = 300
        plane.position.z = -200
        plane.position.y = -300
        plane.rotation.y = 75
        plane.rotation.x = -27
        plane.rotation.z = 90
        return plane
      })(),
      jumpto: 2
    }
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
for (var i = 0; i < 14; i++) {
  data.push({
    path: './imgs/' + (i + 1) + '.jpg',
    des: des[i],
    index: i,
    jump: jump[i]
  })
}

module.exports = data
