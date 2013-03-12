window.onsvgload = function() {
    var cities = {
        hamburg: {
            heading: "Hamburg",
            position: {
                    x: 240,
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
            var city = cities[index];
            
            createCircle(city);
            createTooltip(city);

            city.circle.onclick = getClickFunction(city);

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

function createCircle(city) {
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

function createTooltip(city) {
    var container = document.getElementsByClassName("map-container")[0];

    var tooltip = document.createElement("div");
    tooltip.setAttribute("class", "tooltip");

    var heading = document.createElement("h3");
    heading.innerHTML = city.heading;
    tooltip.appendChild(heading);

    var ul = document.createElement("ul");

    for (var link in city.links) {
        if (city.links.hasOwnProperty(link)) {
            var li = document.createElement("li");
            var linkElement = document.createElement("a");

            linkElement.setAttribute("href", city.links[link].link);
            linkElement.innerHTML = city.links[link].name;

            li.appendChild(linkElement);
            ul.appendChild(li);
        }
    }

    tooltip.appendChild(ul);
    container.appendChild(tooltip);
    tooltip.style.visibility = "hidden";

    city.tooltip = tooltip;

    setTooltipPosition(city);
}

function setTooltipPosition(city) {
    var offset = ($(".map-container").css("width").match(/\d+/)/2)-($(".map").css("width").match(/\d+/)/2);
    offset -= offset % 1;
    tooltip = city.tooltip;
    tooltip.style.left = (offset + city.position.x - $(tooltip).width() - 20) + "px";
    console.log($(tooltip).width());
    tooltip.style.top = (city.position.y - 81) + "px";
}