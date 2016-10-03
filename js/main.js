/*
 * index.js
 * Copyright (C) 2016 disoul <disoul@disoul-surface>
 *
 * Distributed under terms of the MIT license.
 */
'use strict'

require('../libs/three.min.js')
require('../js/render')
require('../postcss/index.css')

// css动画实现淡入淡出
window.showInfo = function() {
  mask = document.getElementById('mask')
  mask.style.display = 'flex'
  window.setTimeout('mask.style.opacity = 1;', 1); // fix

  mask.addEventListener('click', function() {
    mask.style.opacity = 0
  })

  var onTransitionEnd = function(e) {
      if (mask.style.opacity == 0) {
        mask.style.display = 'none'
      }
    },
    eventName = document.body.style.webkitBorderRadius
      ? "webkitTransitionEnd"
      : "transitionend";

  mask.addEventListener(eventName, onTransitionEnd, false)
}
