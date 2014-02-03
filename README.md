# grunt-static-inline

> A grunt plugin to replace url from static files such as img,js,css and variables an put inline in a template.

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-in-the-head --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-in-the-head');
```

## The "cssInTheHead" task

### Overview
In your project's Gruntfile, add a section named `cssInTheHead` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
	cssInTheHead: {
		main: {
			options: {
				prefix: '{',
				suffix: '}',
				basepath: 'test/fixtures/'
			},
			files: {
				'base_output.html': 'base_input.html',
			}
		}
	}
})
```

### In your template file you should add inline="true" where you want to replace it for inline content *(the inline attributes will be removed after grunt file)
```html
@{DOCTYPE}@
<html>
    <head>
        <title>CSS In The Head</title>
        <link href="/css/main.css" rel="stylesheet" inline="true"/> <!-- absolute url will use basepath option -->
    </head>
    <body>
        <h1>@{hello}@, Grunt css in the head</h1>
        <script src="js/app.js" inline="true"></script>
        <script src="js/common.js" inline="true"></script> 
    </body>
</html>

```


## Contributing
Take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. 
Lint and test your code using [Grunt](http://gruntjs.com/).
Open a pull request :)
