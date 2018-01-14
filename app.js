// var object = new Object();
// object["data"] = "test";
// var temp = fetch('http://localhost:8000/song/foo/popularity').then(function (value) {
//     object = value["data"];
//     console.log(value);
//     console.log(object);
// });

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        search: '',
        songs: [
            {id:0, text:"September - Earth, Wind & Fire", selected:true},
            {id:1, text:"Uptown Funk - Bruno Mars", selected:false},
            {id:2, text:"Hey Ya! - Outkast", selected:false}]
    },
    methods: {
        change: function (id) {
            for (i = 0; i < songs.length; i++) {
                this.songs[i].selected = false;
            }
            this.songs[id].selected = true;
            update(id);
        }
    }
})


dates = ["02/17", "03/17", "04/17", "05/17", "06/17", "07/17", "08/17", "09/17", "10/17", "11/17", "12/17", "01/18"];
songs = ["September - Earth, Wind & Fire", "Uptown Funk - Bruno Mars", "Hey Ya! - Outkast"];
countries = ["UK", "USA", "Canada", "Australia"];
uk0 = [24,35,54,57,46,36,35,38,40,44,42,46];
us0 = [34,30,32,25,27,29,30,26,32,33,30,31];
ca0 = [30,32,33,31,32,34,30,32,35,37,39,35];
au0 = [24,25,28,30,28,26,29,28,30,32,31,32];

uk1 = [45,40,44,41,40,38,39,36,40,41,42,38];
us1 = [40,42,43,43,43,43,42,40,38,38,40,36];
ca1 = [34,33,33,28,30,29,34,30,32,33,32,31];
au1 = [31,32,32,33,32,34,35,32,30,31,30,27];

uk2 = [24,35,36,38,40,45,35,36,40,42,42,44];
us2 = [42,44,43,46,43,40,38,36,38,38,36,35];
ca2 = [30,32,33,31,32,34,32,32,35,37,39,35];
au2 = [31,32,33,33,30,34,35,32,30,31,30,27];

uk = [];
us = [];
ca = [];
au = [];

uk = uk0;
us = us0;
ca = ca0;
au = au0;

var chart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: dates,
        datasets: [{
            data: uk,
            label: "UK",
            borderColor: "#3e95cd",
            fill: false
        }, {
            data: us,
            label: "USA",
            borderColor: "#8e5ea2",
            fill: false
        }, {
            data: ca,
            label: "Canada",
            borderColor: "#3cba9f",
            fill: false
        }, {
            data: au,
            label: "Australia",
            borderColor: "#e8c3b9",
            fill: false
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Popularity of \'September\' by Country over the last year'
        }
    }
});

function update(id) {
    chart.destroy();
    if (id==0) {
        chart = new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    data: uk0,
                    label: "UK",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: us0,
                    label: "USA",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: ca0,
                    label: "Canada",
                    borderColor: "#3cba9f",
                    fill: false
                }, {
                    data: au0,
                    label: "Australia",
                    borderColor: "#e8c3b9",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Popularity of \'September\' by Country over the last year'
                }
            }
        });
    }

    if (id==1) {
        chart = new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    data: uk1,
                    label: "UK",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: us1,
                    label: "USA",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: ca1,
                    label: "Canada",
                    borderColor: "#3cba9f",
                    fill: false
                }, {
                    data: au1,
                    label: "Australia",
                    borderColor: "#e8c3b9",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Popularity of \'Uptown Funk\' by Country over the last year'
                }
            }
        });
    }

    if(id==2) {
        chart = new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    data: uk2,
                    label: "UK",
                    borderColor: "#3e95cd",
                    fill: false
                }, {
                    data: us2,
                    label: "USA",
                    borderColor: "#8e5ea2",
                    fill: false
                }, {
                    data: ca2,
                    label: "Canada",
                    borderColor: "#3cba9f",
                    fill: false
                }, {
                    data: au2,
                    label: "Australia",
                    borderColor: "#e8c3b9",
                    fill: false
                }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Popularity of \'Hey Ya!\' by Country over the last year'
                }
            }
        });
    }


}

