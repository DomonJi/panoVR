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
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(57, 90, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -369
        plane.position.z = 287
        plane.position.y = -219
        plane.rotation.y = 75
        plane.rotation.x = -27
        return plane
      })(),
      jumpto: 1
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -350
        plane.position.z = 420
        plane.position.y = -25
        plane.rotation.y = 40
        return plane
      })(),
      jumpto: 2
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -350
        plane.position.z = 420
        plane.position.y = -25
        plane.rotation.y = 40
        return plane
      })(),
      jumpto: 3
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -350
        plane.position.z = 420
        plane.position.y = -25
        plane.rotation.y = 40
        return plane
      })(),
      jumpto: 4
    }
  ],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
]
for (var i = 0; i < 12; i++) {
  data.push({
    path: './imgs/' + (i + 1) + '.jpg',
    des: des[i],
    index: i,
    jump: jump[i]
  })
}

module.exports = data
