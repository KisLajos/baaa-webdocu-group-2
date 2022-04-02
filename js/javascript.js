console.log('hello world')

docSlider.init({
    speed: 600,
    startSpeed: null,
    easing: 'ease',
    scrollReset: false
});

let current_country = ''

var map = new Datamap({
    element: document.getElementById('container'),
    projection: 'mercator',
    fills: {
        defaultFill: "#ABDDA4",
        authorHasTraveledTo: "#fa0fa0"
    },
    data: {
        HUN: { fillKey: "authorHasTraveledTo" },
        GBR: { fillKey: "authorHasTraveledTo" },
        CZE: { fillKey: "authorHasTraveledTo" },
        DNK: { fillKey: "authorHasTraveledTo" },
        POL: { fillKey: "authorHasTraveledTo" },
    },
    setProjection: function (element) {
        var projection = d3.geo.mercator()
            .center([10.166667, 52.4444])
            .scale(500)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);

        var path = d3.geo.path().projection(projection);
        return { path: path, projection: projection };
    },
    geographyConfig: {
        dataUrl: null, //if not null, datamaps will fetch the map JSON (currently only supports topojson)
        hideAntarctica: true,
        borderWidth: 1,
        borderOpacity: 1,
        borderColor: '#eee',
        popupTemplate: function (geography, data) { //this function should just return a string
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>';
        },
        popupOnHover: true, //disable the popup while hovering
        highlightOnHover: true,
        highlightFillColor: '#FC8D59',
        highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
        highlightBorderWidth: 2,
        highlightBorderOpacity: 1
    },
    done: function (datamap) {
        datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
            let our_countries = ['CZE', 'DNK', 'GBR', 'HUN', 'POL'];
            if (our_countries.includes(geography.id)) {
                current_country = geography.properties.name
                console.log(current_country)

                // Grab the modal and display it
                var modal = document.getElementById("myModal");
                modal.style.display = "block";

                // When the user clicks on <span> (x), close the modal
                var span = document.getElementsByClassName("close")[0];
                span.onclick = function () {
                    modal.style.display = "none";
                }

                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
            }
        });
    }
});

/* const pol = document.getElementsByClassName('POL')
console.log(pol)

document.addEventListener('click', function (event) {
    if (!event.target.closest('.POL')) return;
    console.log('Clicked');
}, false); */

console.clear();

var videoEl = document.querySelector('video');
document.querySelector('.video-button').addEventListener('click', function () {
    if (this.dataset.aperture === 'open') {
        this.dataset.aperture = 'closed';
        videoEl.pause();
        videoEl.progress = 0;
    } else {
        this.dataset.aperture = 'open';
        videoEl.play();
    }
});