function loadCSS(src){
    link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.media = 'screen';
    link.href = src;
    links.parentNode.insertBefore(link, links);
}
