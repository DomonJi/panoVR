/*
 * controller.js
 * Copyright (C) 2016 disoul <disoul@disoul-surface>
 *
 * Distributed under terms of the MIT license.
 */
'use strict';

var data = require('./data');

function Controller() {
  var index = 0;

  this.getCurrentScene = function() {
    return data[index];
  }

  this.toNextScene = function() {
    if (index == data.length - 1) {
      index = index;
    } else {
      index = index + 1;
    }
  }

  this.toPreviousScene = function() {
    if (index == 0) {
      index = 0;
    } else {
      index = index - 1;
    }
  }
}

var controller = new Controller();

document.getElementById('next').addEventListener('click', function(e) {
  controller.toNextScene();
});

document.getElementById('previous').addEventListener('click', function(e) {
  controller.toPreviousScene();
});


module.exports = controller;
