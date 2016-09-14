/*
 * data.js
 * Copyright (C) 2016 disoul <disoul@disoul-surface>
 *
 * Distributed under terms of the MIT license.
 */
'use strict';

var data = [];

var des = [
  '欢迎来到江南大学校史馆全景展示，通过鼠标来移动和缩放，通过点击上方按钮进行翻页',
  '这里展示了江南大学多年来的变化和历史',
  '这里是我们美丽校区的模型',
  '好了我编不下去了...',
];

for(var i = 1; i <= 10; i++) {
  data.push({
    path: '../imgs/' + i + '.jpg',
    des: des[i - 1],
    index: i - 1,
  });
}

module.exports = data;
