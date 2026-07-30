// import { eventName } from "cluster";
// import { timeStamp } from "console";
// import { EventEmitter } from "events";

// class DomClass extends EventEmitter {
//   addEventListener(eventName, callback) {
//     this.on(eventName, callback);
//   }
//   removeEventListener(eventName, callback) {
//     this.off(eventName, callback);
//   }
//   dispatchEvent(eventName, eventData = {}) {
//     const event = {
//       type: eventName,
//       timeSpam: new Data(),
//       ...eventData,
//     };
//     this.emit(eventName, event);
//   }

// }

import { EventEmitter } from "events";
class DomClass extends EventEmitter {
  addEventListener(eventName, callback) {
    this.on(eventName, callback);
  }
  removeEventListener(eventName, callback) {
    this.off(eventName, callback);
  }
  dispatchEvent(eventName, eventData = {}) {
    const event = {
      type: eventName,
      timeStamp: new Date(),
      ...eventData,
    };
    this.emit(eventName, event);
  }
}
const dom = new DomClass();
dom.addEventListener("click", (event) => {
  console.log("Clicked!");
  console.log(event);
});
dom.dispatchEvent("click", {
  x: 100,
  y: 200,
});