'use strict';

const fs = require('fs');
const input = 'font-awesome.txt';
const output = 'output.txt';

fs.writeFileSync(output, '');

var lineByLine = require('n-readlines');
var liner = new lineByLine(input);

var line;
var lineNumber = 0;
var fonts = [];
while (line = liner.next()) {
    var l = line.toString();

    var arr = l.split(':');
    var _class = arr[0];
    _class = _class.replace('$', '');
    _class = _class.replace('var-', '');

    var code = arr[1];
    code = code.trim();
    code = code.replace('";', '');
    code = code.replace('"\\', '');

    if (fonts.indexOf(code) === -1) {
        fonts.push(code);

        var item = `'fa-${code}' => '${_class}',`;
        fs.appendFileSync(output, item + "\n");
    }

    lineNumber++;
}