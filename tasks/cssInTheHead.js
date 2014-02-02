/*
 * grunt-css-in-the-head
 * https://github.com/schizdazzle/grunt-css-in-the-head
 *
 * Copyright (c) 2014 Aqeel Akbar
 * Licensed under the MIT license.
 *
 * Lots of thanks to https://github.com/dayvson and his plugin
 * https://github.com/dayvson/grunt-static-inline
 */

'use strict';

module.exports = function(grunt) {
  
  var path = require('path');

  var description = 'Takes your css from your external file, minifies it and then adds it to the <head> of your index.html'; 

  grunt.registerMultiTask('cssInTheHead', description, function(){
    var options = this.options({
      prefix: '{',
      suffix: '}'
    });

    this.files.forEach(function(f){
      var destFile = f.dest;
      var srcFile = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });
      
      var content = grunt.file.read(srcFile);
      content = findThenReplaceCss(options, srcFile, content);      
      grunt.file.write(destFile, content);
    });
  });

  var fileLocation = function(templatePath, src, basepath){
    var srcPath;
    if(!grunt.file.isPathAbsolute(src)){
      srcPath = path.resolve(path.dirname(templatePath), src);
      if(grunt.file.exists(srcPath)){
        return srcPath;
      }
    }
    return srcPath;
  };

  var findThenReplaceCss = function(options, templatePath, content){
    return content.replace(/<link.*href=['"]([^'"]+)['"].*inline=['"]true['"].*\/?\s*>/g, function(match, src){
      var result;
      var srcPath = fileLocation(templatePath, src, options.basepath);
      if(srcPath){
        result = '<TAG>\nCONTENT\n</TAG>'
                   .replace(/CONTENT/g, grunt.file.read(srcPath))
                   .replace(/TAG/g, "style");
      }
      return result;
    });
  };

};
