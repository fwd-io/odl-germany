window.onsvgload = function() {
    var cities = {
        hamburg: {
            heading: "Hamburg",
            position: {
                    x: 236,
                    y: 140
                },
            links: [
                {
                    name: "Open Device Lab Hamburg",
                    link: "http://www.fwd.io"
                },
                {
                    name: "Beta Haus Hamburg",
                    link: "http://www.example.com"
                }]
        },
        berlin: {
            heading: "Berlin",
            position: {
                x: 420,
                y: 225
            },
            links: [
                {
                    name: "Open Device Lab Berlin",
                    link: "http://www.example.com"
                },
                {
                    name: "Beta Haus Berlin",
                    link: "http://www.example.com"
                }]
        }
    };

    for (var index in cities) {
        if (cities.hasOwnProperty(index)) {
            createCircle(cities[index]);

            var city = cities[index];
            
            createTooltip(city);

            function getClickFunction(city) {
                return function() {
                    if (city.tooltip.style.visibility === "hidden") {
                        city.tooltip.style.visibility = "visible";
                    }
                    else {
                        city.tooltip.style.visibility = "hidden";
                    }
                }
            }
            city.circle.onclick = getClickFunction(city);
            city.tooltip.onclick = getClickFunction(city);
        }
    }

    window.onresize = function() {
        for (var index in cities) {
            if (cities.hasOwnProperty(index)) {
                setTooltipPosition(cities[index]);
            }
        }
    }
}

if (!Modernizr.svg) {
    window.onsvgload();
}

function createCircle(city) {
    if (Modernizr.svg) {
        var svg = document.getElementsByClassName("map")[0].contentDocument;
        var circle = svg.createElementNS(svgns, 'circle');
        circle.setAttribute('cx', city.position.x);
        circle.setAttribute('cy', city.position.y);
        circle.setAttribute('r', 10);
        circle.setAttribute('fill', '#e47a52');
        circle.setAttribute('class', 'hotspot')
        circle.style.cursor = "pointer";
        svg.getElementById('myGroup').ownerSVGElement.appendChild(circle);
        city.circle = circle;
    }
    else {
        var container = document.getElementsByClassName("map-container")[0];

        var img = document.createElement("img");
        img.setAttribute("src", "/assets/img/bitmaps/circle.png");
        img.style.width = "20px";
        img.style.position = "absolute";
        var XOffset = ($(".map-container").width()/2)-($(".map").width()/2);
        var mapWidthRatio = $(".map").width()/520;
        img.style.left = (city.position.x + XOffset - 20)*mapWidthRatio + "px";
        var mapHeightRatio = $(".map").height()/703;
        img.style.top = (city.position.y -20)*mapHeightRatio +"px";
        container.appendChild(img);
        city.circle = img;
    }
}

function createTooltip(city) {
    var container = document.getElementsByClassName("map-container")[0];

    var tooltip = document.createElement("div");
    if (city.position.x > 260) {
        var arrowPosition = "left";
    } else {
        var arrowPosition = "right";
    }
    tooltip.setAttribute("class", "tooltip " + arrowPosition);

    var heading = document.createElement("h3");
    heading.innerHTML = city.heading;
    tooltip.appendChild(heading);

    var ul = document.createElement("ul");

    for (var link in city.links) {
        if (city.links.hasOwnProperty(link)) {
            var li = document.createElement("li");
            var linkElement = document.createElement("a");

            linkElement.setAttribute("target", "_blank");
            linkElement.setAttribute("href", city.links[link].link);
            linkElement.innerHTML = city.links[link].name;

            li.appendChild(linkElement);
            ul.appendChild(li);
        }
    }

    tooltip.appendChild(ul);
    container.insertBefore(tooltip, null);
    tooltip.style.visibility = "hidden";

    city.tooltip = tooltip;

    setTooltipPosition(city, arrowPosition);
}

function setTooltipPosition(city, arrowPosition) {
    tooltip = city.tooltip;

    var mapOffset = ($(".map-container").width()/2)-($(".map").width()/2);
    var mapWidthRatio = $(".map").width()/520;
    var XOffset = mapOffset + city.position.x * mapWidthRatio;

    if (arrowPosition == "right") {
        tooltip.style.left = (XOffset - $(tooltip).width() - 30) + "px";
    } else {
        tooltip.style.left = (XOffset + 30) + "px";
    }

    var mapHeightRatio = $(".map").height()/703;
    tooltip.style.top = (city.position.y * mapHeightRatio - 83) + "px";
}