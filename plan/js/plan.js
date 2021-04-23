// ServiceWorker : https://developers.google.com/web/fundamentals/primers/service-workers/?hl=ja
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service_worker.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}

console.log("hi");

/**
* タッチ操作での拡大縮小禁止
*/
function no_scaling() {
  document.addEventListener("touchmove", mobile_no_scroll, { passive: false });
  console.log('11');
}

/**
* タッチ操作での拡大縮小禁止解除
*/
function return_scaling() {
  document.removeEventListener('touchmove', mobile_no_scroll, { passive: false });
  console.log('22');
}

/**
* 拡大縮小禁止
*/
function mobile_no_scroll(event) {
  // ２本指での操作の場合
  if (event.touches.length >= 2) {
      // デフォルトの動作をさせない
      event.preventDefault();
  }
}

/** 
 * OnLoad
 * 
 */
document.addEventListener('DOMContentLoaded', () => {

    no_scaling();
    return_scaling();

}, false);