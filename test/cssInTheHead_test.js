var grunt = require('grunt');

exports.cssInTheHead = {
  setUp: function(done) {
    done();
  },
  test_replace_css: function(test) {
    var actual = grunt.file.read('tmp/output-css.html');
    var expected = grunt.file.read('test/expected/output-css.html');
    test.equal(actual, expected, 'should replace only css tags');
    test.done();
  }
};
