var script, scripts = doc.getElementsByTagName('script')[0];
function loadJS(src, callback){
    script = doc.createElement('script');
    script.async = true;
    if (typeof(callback) == 'function'){
        if (script.readyState){  //verifica de o browser possui suporte
            script.onreadystatechange = function(){
                if (script.readyState == 'loaded'|| script.readyState == 'complete'){
                    script.onreadystatechange = null;
                    callback();
                }
            };
        }
        else{  //browsers antigos
            script.onload = function(){
                callback();
            };
        }
    }
    script.src = src;
    scripts.parentNode.insertBefore(script, scripts);
}
