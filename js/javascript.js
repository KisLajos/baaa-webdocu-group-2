/**-----------------------

 docSlider.js - ver.3.0.1
 URL : https://prjct-samwest.github.io/docSlider/
 created by SamWest
 Copyright (c) 2020 SamWest.
 This plugin is released under the MIT License.

 -----------------------**/

docSlider.init({
    speed: 600,
    startSpeed: null,
    easing: 'ease',
    scrollReset: false,
    /* horizontal: true */
});

/* Datamaps by Mark DiMarco
  Source: https://github.com/markmarkoh/datamaps */

let current_country = ''

var map = new Datamap({
    element: document.getElementById('container'),
    projection: 'mercator',
    fills: {
        defaultFill: "#62B0BA",
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
                console.log(map)

                getPersonDetails(geography.id);
            }
        });
    }
});

/* Aperture video play button/reveal -- clip-path approach by Eric Johnson
Source: https://codepen.io/ericdjohnson/pen/bKVxem */

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

/* Typewriter by Coding in Public (Chris Pennington)
Source: https://codepen.io/Coding-in-Public/pen/yLPYjrv */

class Typewriter {
    constructor(element, options) {
        this.element = element
        this.words = [... this.element.dataset.typewriter.split(',')]
        this.speed = options?.speed || 150
        this.delay = options?.delay || 1500
        this.repeat = options?.repeat
        this.initTyping()
    }

    wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

    toggleTyping = () => this.element.classList.toggle('typing')

    async typewrite(word) {
        await this.wait(this.delay) //wait a bit
        this.toggleTyping() //remove blinking cursor
        for (const letter of word.split('')) {
            //add each letter based on the passed speed
            this.element.textContent += letter
            await this.wait(this.speed)
        }
        this.toggleTyping() //add back cursor
        await this.wait(this.delay) //wait a bit
        this.toggleTyping() //remove blinking cursor
        while (this.element.textContent.length !== 0) {
            //as long as there are letters in the word
            //remove them one by one
            this.element.textContent = this.element.textContent.slice(0, -1)
            await this.wait(this.speed)
        }
        this.toggleTyping() //add back cursor
    }

    async initTyping() {
        for (const word of this.words) {
            await this.typewrite(word)
        }

        if (this.repeat) {
            await this.initTyping()
        }
        else {
            this.element.style.animation = 'none'
        }
    }
}

new Typewriter(
    document.querySelector('[data-typewriter]'),

    {
        speed: 70,
        delay: 500,
        repeat: true
    }
)

/* Handling scrolling out of the video */

let observer = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            document.getElementById("video-button").dataset.aperture = 'closed';
            let video = document.getElementById("actual-video");
            video.pause();
            video.progress = 0;

            if (document.getElementById('auto-arrows1').style.display = "block") {
                document.getElementById('auto-arrows1').style.display = "none";
            }

            console.log(entry.target.id);
        }
        else {
            console.log('not intersecting')
        }
    };
}, { threshold: 1 });

const sections = document.getElementsByClassName("docSlider-scroll");
for (const section of sections) {
    observer.observe(section)
}

/* Scroll arrows appear when the video has ended */

const video = document.getElementById("actual-video");

video.addEventListener('ended', (event) => {
    console.log('Video reached its end.');
    document.getElementById('auto-arrows1').style.display = "block";
});
