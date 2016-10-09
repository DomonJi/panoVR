/*
 * data.js
 * Copyright (C) 2016 disoul <disoul@disoul-surface>
 *
 * Distributed under terms of the MIT license.
 */
'use strict'
import THREE from 'three'
var data = []

var des = ['欢迎来到江南大学校史馆全景展示，通过鼠标来移动和缩放，通过点击上方按钮进行翻页', '这里展示了江南大学多年来的变化和历史', '这里是我们美丽校区的模型', '好了我编不下去了...']
var jump = [
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
      jumpto: 1
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
  []
]
for (var i = 0; i < 10; i++) {
  data.push({
    path: './imgs/' + (i + 1) + '.jpg',
    des: des[i],
    index: i,
    jump: jump[i]
  })
}

module.exports = data
