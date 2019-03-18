const fs = require('fs');
const path = require('path');

function compile(content) {
    if (content === undefined) {
        return '';
    }
    return content.replace(/<% include\(([^%>]+)\) %>/g, function (match, p, key, n) {
        let filepath = p.substr(1, p.length - 2);
        if (filepath.charAt(0) === '~') {
            filepath = filepath.substr(1, p.length - 1);
        }
        filepath = path.resolve(__dirname, '../includes') + filepath;
        if (!fs.existsSync(filepath)) {
            return '';
        }
        let stat = fs.statSync(filepath);
        if (!stat.isFile()) {
            return '';
        }
        let tmpl = fs.readFileSync(filepath);
        return tmpl || '';
    });
}

module.exports = function (source) {
    return compile(source);
};
