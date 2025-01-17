(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"tmeasday:check-npm-versions":{"check-npm-versions.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/tmeasday_check-npm-versions/check-npm-versions.js                                                       //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
!function (module1) {
  module1.export({
    checkNpmVersions: () => checkNpmVersions
  });
  let semver;
  module1.link("semver", {
    default(v) {
      semver = v;
    }

  }, 0);

  // Returns:
  //   - true      if a version of the package in the range is installed
  //   - false     if no version is installed
  //   - version#  if incompatible version is installed
  const compatibleVersionIsInstalled = (name, range) => {
    try {
      const installedVersion = require("".concat(name, "/package.json")).version;

      if (semver.satisfies(installedVersion, range)) {
        return true;
      } else {
        return installedVersion;
      }
    } catch (e) {
      // XXX add something to the tool to make this more reliable
      const message = e.toString(); // One message comes out of the install npm package the other from npm directly

      if (message.match("Cannot find module") || message.match("Can't find npm module")) {
        return false;
      } else {
        throw e;
      }
    }
  };

  const checkNpmVersions = (packages, packageName) => {
    if (!Meteor.isDevelopment) {
      return;
    }

    const failures = {};
    Object.keys(packages).forEach(name => {
      const range = packages[name];
      const failure = compatibleVersionIsInstalled(name, range);

      if (failure !== true) {
        failures[name] = failure;
      }
    });

    if (Object.keys(failures).length === 0) {
      return true;
    }

    const errors = [];
    Object.keys(failures).forEach(name => {
      const installed = failures[name];
      const requirement = "".concat(name, "@").concat(packages[name]);

      if (installed) {
        errors.push(" - ".concat(name, "@").concat(installed, " installed, ").concat(requirement, " needed"));
      } else {
        errors.push(" - ".concat(name, "@").concat(packages[name], " not installed."));
      }
    });
    const qualifier = packageName ? "(for ".concat(packageName, ") ") : '';
    console.warn("WARNING: npm peer requirements ".concat(qualifier, "not installed:\n").concat(errors.join('\n'), "\n\nRead more about installing npm peer dependencies:\n  http://guide.meteor.com/using-packages.html#peer-npm-dependencies\n"));
  };
}.call(this, module);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"semver":{"package.json":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/tmeasday_check-npm-versions/node_modules/semver/package.json                                 //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.exports = {
  "name": "semver",
  "version": "5.1.0",
  "main": "semver.js"
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"semver.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// node_modules/meteor/tmeasday_check-npm-versions/node_modules/semver/semver.js                                    //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.useNode();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/tmeasday:check-npm-versions/check-npm-versions.js");

/* Exports */
Package._define("tmeasday:check-npm-versions", exports);

})();

//# sourceURL=meteor://💻app/packages/tmeasday_check-npm-versions.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvdG1lYXNkYXk6Y2hlY2stbnBtLXZlcnNpb25zL2NoZWNrLW5wbS12ZXJzaW9ucy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUxIiwiZXhwb3J0IiwiY2hlY2tOcG1WZXJzaW9ucyIsInNlbXZlciIsImxpbmsiLCJkZWZhdWx0IiwidiIsImNvbXBhdGlibGVWZXJzaW9uSXNJbnN0YWxsZWQiLCJuYW1lIiwicmFuZ2UiLCJpbnN0YWxsZWRWZXJzaW9uIiwicmVxdWlyZSIsInZlcnNpb24iLCJzYXRpc2ZpZXMiLCJlIiwibWVzc2FnZSIsInRvU3RyaW5nIiwibWF0Y2giLCJwYWNrYWdlcyIsInBhY2thZ2VOYW1lIiwiTWV0ZW9yIiwiaXNEZXZlbG9wbWVudCIsImZhaWx1cmVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmYWlsdXJlIiwibGVuZ3RoIiwiZXJyb3JzIiwiaW5zdGFsbGVkIiwicmVxdWlyZW1lbnQiLCJwdXNoIiwicXVhbGlmaWVyIiwiY29uc29sZSIsIndhcm4iLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLFNBQU8sQ0FBQ0MsTUFBUixDQUFlO0FBQUNDLG9CQUFnQixFQUFDLE1BQUlBO0FBQXRCLEdBQWY7QUFBd0QsTUFBSUMsTUFBSjtBQUFXSCxTQUFPLENBQUNJLElBQVIsQ0FBYSxRQUFiLEVBQXNCO0FBQUNDLFdBQU8sQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNILFlBQU0sR0FBQ0csQ0FBUDtBQUFTOztBQUFyQixHQUF0QixFQUE2QyxDQUE3Qzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFNQyw0QkFBNEIsR0FBRyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDcEQsUUFBSTtBQUNGLFlBQU1DLGdCQUFnQixHQUFHQyxPQUFPLFdBQUlILElBQUosbUJBQVAsQ0FBZ0NJLE9BQXpEOztBQUNBLFVBQUlULE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQkgsZ0JBQWpCLEVBQW1DRCxLQUFuQyxDQUFKLEVBQStDO0FBQzdDLGVBQU8sSUFBUDtBQUNELE9BRkQsTUFFTztBQUNMLGVBQU9DLGdCQUFQO0FBQ0Q7QUFDRixLQVBELENBT0UsT0FBT0ksQ0FBUCxFQUFVO0FBQ1Y7QUFDQSxZQUFNQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0UsUUFBRixFQUFoQixDQUZVLENBR1Y7O0FBQ0EsVUFBSUQsT0FBTyxDQUFDRSxLQUFSLENBQWMsb0JBQWQsS0FBdUNGLE9BQU8sQ0FBQ0UsS0FBUixDQUFjLHVCQUFkLENBQTNDLEVBQW1GO0FBQ2pGLGVBQU8sS0FBUDtBQUNELE9BRkQsTUFFTztBQUNMLGNBQU1ILENBQU47QUFDRDtBQUNGO0FBQ0YsR0FsQkQ7O0FBb0JPLFFBQU1aLGdCQUFnQixHQUFHLENBQUNnQixRQUFELEVBQVdDLFdBQVgsS0FBMkI7QUFDekQsUUFBSSxDQUFDQyxNQUFNLENBQUNDLGFBQVosRUFBMkI7QUFDekI7QUFDRDs7QUFDRCxVQUFNQyxRQUFRLEdBQUcsRUFBakI7QUFFQUMsVUFBTSxDQUFDQyxJQUFQLENBQVlOLFFBQVosRUFBc0JPLE9BQXRCLENBQStCakIsSUFBRCxJQUFVO0FBQ3RDLFlBQU1DLEtBQUssR0FBR1MsUUFBUSxDQUFDVixJQUFELENBQXRCO0FBQ0EsWUFBTWtCLE9BQU8sR0FBR25CLDRCQUE0QixDQUFDQyxJQUFELEVBQU9DLEtBQVAsQ0FBNUM7O0FBRUEsVUFBSWlCLE9BQU8sS0FBSyxJQUFoQixFQUFzQjtBQUNwQkosZ0JBQVEsQ0FBQ2QsSUFBRCxDQUFSLEdBQWlCa0IsT0FBakI7QUFDRDtBQUNGLEtBUEQ7O0FBU0EsUUFBSUgsTUFBTSxDQUFDQyxJQUFQLENBQVlGLFFBQVosRUFBc0JLLE1BQXRCLEtBQWlDLENBQXJDLEVBQXdDO0FBQ3RDLGFBQU8sSUFBUDtBQUNEOztBQUVELFVBQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUFMLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZRixRQUFaLEVBQXNCRyxPQUF0QixDQUErQmpCLElBQUQsSUFBVTtBQUN0QyxZQUFNcUIsU0FBUyxHQUFHUCxRQUFRLENBQUNkLElBQUQsQ0FBMUI7QUFDQSxZQUFNc0IsV0FBVyxhQUFNdEIsSUFBTixjQUFjVSxRQUFRLENBQUNWLElBQUQsQ0FBdEIsQ0FBakI7O0FBRUEsVUFBSXFCLFNBQUosRUFBZTtBQUNiRCxjQUFNLENBQUNHLElBQVAsY0FBa0J2QixJQUFsQixjQUEwQnFCLFNBQTFCLHlCQUFrREMsV0FBbEQ7QUFDRCxPQUZELE1BRU87QUFDTEYsY0FBTSxDQUFDRyxJQUFQLGNBQWtCdkIsSUFBbEIsY0FBMEJVLFFBQVEsQ0FBQ1YsSUFBRCxDQUFsQztBQUNEO0FBQ0YsS0FURDtBQVdBLFVBQU13QixTQUFTLEdBQUdiLFdBQVcsa0JBQVdBLFdBQVgsVUFBNkIsRUFBMUQ7QUFDQWMsV0FBTyxDQUFDQyxJQUFSLDBDQUErQ0YsU0FBL0MsNkJBQ0FKLE1BQU0sQ0FBQ08sSUFBUCxDQUFZLElBQVosQ0FEQTtBQU1ELEdBdkNNIiwiZmlsZSI6Ii9wYWNrYWdlcy90bWVhc2RheV9jaGVjay1ucG0tdmVyc2lvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcic7XG5cbi8vIFJldHVybnM6XG4vLyAgIC0gdHJ1ZSAgICAgIGlmIGEgdmVyc2lvbiBvZiB0aGUgcGFja2FnZSBpbiB0aGUgcmFuZ2UgaXMgaW5zdGFsbGVkXG4vLyAgIC0gZmFsc2UgICAgIGlmIG5vIHZlcnNpb24gaXMgaW5zdGFsbGVkXG4vLyAgIC0gdmVyc2lvbiMgIGlmIGluY29tcGF0aWJsZSB2ZXJzaW9uIGlzIGluc3RhbGxlZFxuY29uc3QgY29tcGF0aWJsZVZlcnNpb25Jc0luc3RhbGxlZCA9IChuYW1lLCByYW5nZSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGluc3RhbGxlZFZlcnNpb24gPSByZXF1aXJlKGAke25hbWV9L3BhY2thZ2UuanNvbmApLnZlcnNpb247XG4gICAgaWYgKHNlbXZlci5zYXRpc2ZpZXMoaW5zdGFsbGVkVmVyc2lvbiwgcmFuZ2UpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGluc3RhbGxlZFZlcnNpb247XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gWFhYIGFkZCBzb21ldGhpbmcgdG8gdGhlIHRvb2wgdG8gbWFrZSB0aGlzIG1vcmUgcmVsaWFibGVcbiAgICBjb25zdCBtZXNzYWdlID0gZS50b1N0cmluZygpO1xuICAgIC8vIE9uZSBtZXNzYWdlIGNvbWVzIG91dCBvZiB0aGUgaW5zdGFsbCBucG0gcGFja2FnZSB0aGUgb3RoZXIgZnJvbSBucG0gZGlyZWN0bHlcbiAgICBpZiAobWVzc2FnZS5tYXRjaChcIkNhbm5vdCBmaW5kIG1vZHVsZVwiKSB8fCBtZXNzYWdlLm1hdGNoKFwiQ2FuJ3QgZmluZCBucG0gbW9kdWxlXCIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgY2hlY2tOcG1WZXJzaW9ucyA9IChwYWNrYWdlcywgcGFja2FnZU5hbWUpID0+IHtcbiAgaWYgKCFNZXRlb3IuaXNEZXZlbG9wbWVudCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmYWlsdXJlcyA9IHt9O1xuXG4gIE9iamVjdC5rZXlzKHBhY2thZ2VzKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgcmFuZ2UgPSBwYWNrYWdlc1tuYW1lXTtcbiAgICBjb25zdCBmYWlsdXJlID0gY29tcGF0aWJsZVZlcnNpb25Jc0luc3RhbGxlZChuYW1lLCByYW5nZSk7XG5cbiAgICBpZiAoZmFpbHVyZSAhPT0gdHJ1ZSkge1xuICAgICAgZmFpbHVyZXNbbmFtZV0gPSBmYWlsdXJlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGZhaWx1cmVzKS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IGVycm9ycyA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKGZhaWx1cmVzKS5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgY29uc3QgaW5zdGFsbGVkID0gZmFpbHVyZXNbbmFtZV07XG4gICAgY29uc3QgcmVxdWlyZW1lbnQgPSBgJHtuYW1lfUAke3BhY2thZ2VzW25hbWVdfWA7XG5cbiAgICBpZiAoaW5zdGFsbGVkKSB7XG4gICAgICBlcnJvcnMucHVzaChgIC0gJHtuYW1lfUAke2luc3RhbGxlZH0gaW5zdGFsbGVkLCAke3JlcXVpcmVtZW50fSBuZWVkZWRgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXJyb3JzLnB1c2goYCAtICR7bmFtZX1AJHtwYWNrYWdlc1tuYW1lXX0gbm90IGluc3RhbGxlZC5gKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHF1YWxpZmllciA9IHBhY2thZ2VOYW1lID8gYChmb3IgJHtwYWNrYWdlTmFtZX0pIGAgOiAnJztcbiAgY29uc29sZS53YXJuKGBXQVJOSU5HOiBucG0gcGVlciByZXF1aXJlbWVudHMgJHtxdWFsaWZpZXJ9bm90IGluc3RhbGxlZDpcbiR7ZXJyb3JzLmpvaW4oJ1xcbicpfVxuXG5SZWFkIG1vcmUgYWJvdXQgaW5zdGFsbGluZyBucG0gcGVlciBkZXBlbmRlbmNpZXM6XG4gIGh0dHA6Ly9ndWlkZS5tZXRlb3IuY29tL3VzaW5nLXBhY2thZ2VzLmh0bWwjcGVlci1ucG0tZGVwZW5kZW5jaWVzXG5gKTtcbn07XG4iXX0=
