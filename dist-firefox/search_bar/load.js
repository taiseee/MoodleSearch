"use strict";
(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // search_bar/load.tsx
  var require_load = __commonJS({
    "search_bar/load.tsx"(exports) {
      var saveCourse = (courseId, courseName) => __async(exports, null, function* () {
        yield chrome.storage.local.set({ [courseId]: courseName });
      });
      var saveAllCourse = () => __async(exports, null, function* () {
        const courseElems = document.querySelectorAll(".contentnode ul li a");
        const courseArray = Array.from(courseElems);
        yield Promise.all(courseArray.map((course) => __async(exports, null, function* () {
          const courseName = course.textContent;
          const courseUrl = course.getAttribute("href");
          const courseId = courseUrl == null ? void 0 : courseUrl.split("course=")[1].split("&")[0];
          if (courseName && courseId) {
            yield saveCourse(courseId, courseName);
          }
        })));
      });
      saveAllCourse();
    }
  });
  require_load();
})();
