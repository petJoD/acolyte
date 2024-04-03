var acolyte = acolyte || {};

acolyte.avatar = (function(){
    const coords = [
        { x: 15, y:15, m:true},
        { x: 25, y:15, m:true},
        { x: 35, y:15, m:true},
        { x: 45, y:15, m:false},
        { x: 15, y:25, m:true},
        { x: 25, y:25, m:true},
        { x: 35, y:25, m:true},
        { x: 45, y:25, m:false},
        { x: 15, y:35, m:true},
        { x: 25, y:35, m:true},
        { x: 35, y:35, m:true},
        { x: 45, y:35, m:false},
        { x: 15, y:45, m:true},
        { x: 25, y:45, m:true},
        { x: 35, y:45, m:true},
        { x: 45, y:45, m:false},
        { x: 15, y:55, m:true},
        { x: 25, y:55, m:true},
        { x: 35, y:55, m:true},
        { x: 45, y:55, m:false},
        { x: 15, y:65, m:true},
        { x: 25, y:65, m:true},
        { x: 35, y:65, m:true},
        { x: 45, y:65, m:false},
        { x: 15, y:75, m:true},
        { x: 25, y:75, m:true},
        { x: 35, y:75, m:true},
        { x: 45, y:75, m:false}
    ];
    return {
        drawAvatar: function (hash, dest, size) {
            dest.replaceChildren();
            let svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
            svg.setAttribute("class", "avatar");
            svg.setAttribute("width", ""+size+"px");
            svg.setAttribute("height", ""+size+"px");
            dest.appendChild(svg);
            let group = document.createElementNS("http://www.w3.org/2000/svg","g");
            svg.appendChild(group);
            for (let i = 0; i < coords.length; i++) {
                const m = 1 << i;
                if (hash & m) {
                    var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
                    newElement.setAttribute("x",""+ coords[i].x + "%");
                    newElement.setAttribute("y",""+ coords[i].y + "%"); 
                    newElement.setAttribute("width","10%");
                    newElement.setAttribute("height","10%");
                    group.appendChild(newElement);
                    if (coords[i].m) {
                        var newElement = document.createElementNS("http://www.w3.org/2000/svg", 'rect'); //Create a path in SVG's namespace
                        newElement.setAttribute("x",""+ (90 - coords[i].x) + "%");
                        newElement.setAttribute("y",""+ coords[i].y + "%"); 
                        newElement.setAttribute("width","10%");
                        newElement.setAttribute("height","10%");
                        group.appendChild(newElement);
                    }
                }
            }
        },
        hashText: function(text) {
            var hash = 0;
            if (text.length == 0) return hash;
            for (let i = 0; i < text.length; i++) {
                const chr = text.charCodeAt(i);
                hash = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
                hash = hash % (1 << 28);
            }
            return hash;
        }
    };
})();

