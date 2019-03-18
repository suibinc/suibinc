export function insertScript(script, callback) {
    if (script instanceof Array) {
        script.forEach(item => {
            insertScripts(item);
        });
        return true;
    }

    let instance = document.createElement('script');
    instance.type = "text/javascript";
    instance.src = script;
    if (callback) {
        instance.onload = callback;
    }
    document.body.appendChild(instance);
}

export function insertScripts(script) {
    if (script instanceof Array) {
        script.forEach(item => {
            insertScripts(item);
        });
        return true;
    }

    let instance = document.createElement('script');
    instance.type = "text/javascript";
    instance.src = script;
    document.body.appendChild(instance);
}

export function insertStyleLink(link) {
    if (link instanceof Array) {
        link.forEach(item => {
            insertStyleLink(item);
        });
        return true;
    }

    let instance = document.createElement('link');
    instance.rel = 'stylesheet';
    instance.href = link;
    document.body.appendChild(instance);
}
