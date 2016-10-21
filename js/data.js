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
  [// {
    //   plane: (function() {
    //     let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
    //     plane.position.x = 390
    //     plane.position.z = -320
    //     plane.position.y = -360
    //     plane.rotation.y = 75
    //     plane.rotation.x = -27
    //     plane.rotation.z = 90
    //     return plane
    //   })(),
    //   jumpto: 0
    // },
    {
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
  [// {
    //   plane: (function() {
    //     let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
    //     plane.position.x = -510
    //     plane.position.z = 0
    //     plane.position.y = -490
    //     plane.rotation.y = 0
    //     plane.rotation.x = -45
    //     plane.rotation.z = 90
    //     return plane
    //   })(),
    //   jumpto: 2
    // },
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -190
        plane.position.z = 590
        plane.position.y = -300
        plane.rotation.y = 0
        plane.rotation.x = 135
        plane.rotation.z = 0
        return plane
      })(),
      jumpto: 4
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.PlaneGeometry(140, 250, 1, 1), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -380
        plane.position.z = -380
        plane.position.y = -250
        plane.rotation.y = 0
        plane.rotation.x = -45
        plane.rotation.z = 0
        return plane
      })(),
      jumpto: 5
    }
    // , {
    //   plane: (function() {
    //     let plane = new THREE.Mesh(new THREE.SphereGeometry(70, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
    //     plane.position.x = 220
    //     plane.position.z = 500
    //     plane.position.y = -250
    //     plane.rotation.y = -180
    //     plane.rotation.x = 145
    //     plane.rotation.z = 149
    //     return plane
    //   })(),
    //   jumpto: 5
    // }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(70, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = 350
        plane.position.z = -380
        plane.position.y = -250
        return plane
      })(),
      jumpto: 12
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(70, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -260
        plane.position.z = 550
        plane.position.y = -140
        return plane
      })(),
      jumpto: 7
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(70, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -10
        plane.position.z = 550
        plane.position.y = -120
        return plane
      })(),
      jumpto: 8
    }, {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(70, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -10
        plane.position.z = -550
        plane.position.y = -150
        return plane
      })(),
      jumpto: 9
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(70, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -300
        plane.position.z = -500
        plane.position.y = -100
        return plane
      })(),
      jumpto: 10
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(60, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -260
        plane.position.z = -550
        plane.position.y = -300
        return plane
      })(),
      jumpto: 7
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(60, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -120
        plane.position.z = -550
        plane.position.y = -200
        return plane
      })(),
      jumpto: 11
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(60, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = 0
        plane.position.z = -550
        plane.position.y = -160
        return plane
      })(),
      jumpto: 9
    }
  ],
  [
    {
      plane: (function() {
        let plane = new THREE.Mesh(new THREE.SphereGeometry(70, 6, 6), new THREE.MeshBasicMaterial({color: 0x000}))
        plane.position.x = -120
        plane.position.z = 580
        plane.position.y = -150
        return plane
      })(),
      jumpto: 6
    }
  ]
]
var latConstrains = [
  15,
  6,
  5,
  5,
  1,
  1,
  12,
  5,
  10,
  11,
  5,
  5,
  15
]
var fovMaxs = [
  70,
  70,
  70,
  90,
  70,
  50,
  70,
  70,
  70,
  70,
  70,
  70,
  70
]
var fields = [
  4,
  4,
  4,
  3,
  3,
  3,
  1,
  0,
  0,
  0,
  0,
  0,
  2
]
var initLons = [
  -33,
  -206,
  -206,
  -5,
  -85,
  -111,
  -35,
  0,
  0,
  -75,
  -33,
  -70,
  -80
]

var lonmins = [
  NaN,
  NaN,
  NaN,
  -66,
  -89,
  -96,
  NaN,
  -75,
  -42,
  -62,
  -60,
  -57,
  NaN
]
var lonmaxs = [
  NaN,
  NaN,
  NaN,
  58,
  89,
  107,
  NaN,
  74,
  36,
  52,
  56,
  56,
  NaN
]
for (var i = 0; i < 13; i++) {
  data.push({
    path: './imgs/' + (i + 1) + '.jpg',
    index: i,
    jump: jump[i],
    latConstrain: latConstrains[i],
    fovMax: fovMaxs[i],
    initLon: initLons[i],
    lonmin: lonmins[i],
    lonmax: lonmaxs[i],
    field: fields[i]
  })
}

module.exports = data
