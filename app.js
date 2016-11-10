'use strict';

const fs = require('fs');
const path_file = 'font-awesome.txt';
const output = 'output.txt';

var lineReader = require('readline').createInterface({
    input: fs.createReadStream(path_file)
});

lineReader.on('line', function (line) {
    var arr = line.split(':');
    var _class = arr[0];
    _class = _class.replace('$', '');
    _class = _class.replace('var-', '');

    var code = arr[1];
    code = code.trim();
    code = code.replace('";', '');
    code = code.replace('"\\', '');

    var item = `'fa-${code}' => '${_class}',`;

    fs.appendFileSync(output, item + "\n");
});