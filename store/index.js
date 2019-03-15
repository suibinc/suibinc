function compileModule(files, basedir, runInNewContext) {
    var compiledScripts = {};
    var resolvedModules = {};

    function getCompiledScript(filename) {
        if (compiledScripts[filename]) {
            return compiledScripts[filename]
        }
        var code = files[filename];
        var wrapper = NativeModule.wrap(code);
        var script = new vm.Script(wrapper, {
            filename: filename,
            displayErrors: true
        });
        compiledScripts[filename] = script;
        return script
    }

    function evaluateModule(filename, sandbox, evaluatedFiles) {
        if (evaluatedFiles === void 0) evaluatedFiles = {};

        if (evaluatedFiles[filename]) {
            return evaluatedFiles[filename]
        }

        console.log('before getCompiledScript');
        var script = getCompiledScript(filename);
        console.log('after getCompiledScript');
        var compiledWrapper = runInNewContext === false
            ? script.runInThisContext()
            : script.runInNewContext(sandbox);
        var m = { exports: {} };
        var r = function (file) {
            file = path$2.join('.', file);
            if (files[file]) {
                console.log('evaluateModule');
                return evaluateModule(file, sandbox, evaluatedFiles)
            } else if (basedir) {
                console.log('basedir');
                return require(
                    resolvedModules[file] ||
                    (resolvedModules[file] = resolve.sync(file, { basedir: basedir }))
                )
            } else {
                console.log('require', file);
                return require(file)
            }
        };
        compiledWrapper.call(m.exports, m.exports, r, m);

        var res = Object.prototype.hasOwnProperty.call(m.exports, 'default')
            ? m.exports.default
            : m.exports;
        evaluatedFiles[filename] = res;
        return res
    }

    return evaluateModule
}
