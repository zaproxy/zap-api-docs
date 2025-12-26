(function () {
  'use strict';

  var startX = 0;
  var startY = 0;
  var threshold = 60; // Minimum distance for a swipe in pixels
  var verticalThreshold = 100; // Max vertical movement allowed to still count as a horizontal swipe

  // Guard so multiple listeners don't process the same touch twice
  var activeTouchId = null;

  function isMobileNavEnabled() {
    // Only enable swipes if the nav button is visible (meaning we are on mobile/tablet)
    return !$("#nav-button").is(":hidden");
  }

  function startedInHorizScrollableElement(target) {
    var el = target;

    while (el && el !== document.body) {
      // Explicitly check for code blocks and lang selector which are known to scroll
      if (
        el.tagName === 'PRE' ||
        el.tagName === 'CODE' ||
        (el.classList && (el.classList.contains('highlight') || el.classList.contains('lang-selector')))
      ) {
        if (el.scrollWidth > el.clientWidth) return true;
      }

      // Generic check for overflow-x
      var style = window.getComputedStyle(el);
      if (
        (style.overflowX === 'auto' || style.overflowX === 'scroll') &&
        el.scrollWidth > el.clientWidth
      ) {
        return true;
      }

      el = el.parentElement;
    }

    return false;
  }

  function openDrawer() {
    $(".toc-wrapper").addClass('open');
    $("#nav-button").addClass('open');
    // Ensure ARIA state is synced
    $("#nav-button").attr("aria-expanded", "true");
  }

  function closeDrawer() {
    $(".toc-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
    // Ensure ARIA state is synced
    $("#nav-button").attr("aria-expanded", "false");
  }

  function resetTracking() {
    activeTouchId = null;
    startX = 0;
    startY = 0;
  }

  function onTouchStart(e) {
    if (!isMobileNavEnabled()) return;

    // Ignore if more than one finger
    if (!e.touches || e.touches.length !== 1) return;

    // If we're already tracking a touch, ignore duplicates from other listeners
    if (activeTouchId !== null) return;

    // If touch started in a horizontally scrollable element, ignore swipes
    if (startedInHorizScrollableElement(e.target)) {
      resetTracking();
      return;
    }

    var t = e.touches[0];
    activeTouchId = t.identifier;
    startX = t.clientX;
    startY = t.clientY;
  }

  function onTouchEnd(e) {
    if (activeTouchId === null) return;
    if (!e.changedTouches || e.changedTouches.length === 0) return;

    // Find the matching touch end
    var t = null;
    for (var i = 0; i < e.changedTouches.length; i++) {
      if (e.changedTouches[i].identifier === activeTouchId) {
        t = e.changedTouches[i];
        break;
      }
    }
    if (!t) return;

    var endX = t.clientX;
    var endY = t.clientY;

    var diffX = endX - startX;
    var diffY = Math.abs(endY - startY);

    // Must be a horizontal-ish swipe
    if (Math.abs(diffX) > threshold && diffY < verticalThreshold) {
      if (diffX > 0) {
        // Swipe Right -> Open
        openDrawer();
      } else {
        // Swipe Left -> Close
        closeDrawer();
      }
    }

    resetTracking();
  }

  function bindSwipe(el) {
    if (!el) return;

    // capture:true helps ensure we still see events even if something inside stops propagation
    el.addEventListener('touchstart', onTouchStart, { passive: true, capture: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true, capture: true });
    el.addEventListener('touchcancel', resetTracking, { passive: true, capture: true });
  }

  function setupSwipe() {
    // Bind to BOTH the drawer and the page areas so a swipe can start anywhere
    bindSwipe(document.querySelector('.toc-wrapper')); // sidebar/drawer

    // Fallback: ensure the rest of the viewport is covered without using an overlay
    bindSwipe(document.documentElement);
  }

  $(function () {
    setupSwipe();
  });
})();
