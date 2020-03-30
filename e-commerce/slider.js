
    var i = 0; //start point
    var images = [];
    var time = 3000;

    //Image list
    images[0] = 'https://steamcdn-a.akamaihd.net/steam/apps/454650/header.jpg?t=1580309095';
    images[1] = 'https://www.smashbros.com/assets_v2/img/movie/20180613_1.jpg';
    images[2] = 'https://hfphoenix.com/wp-content/uploads/2019/04/mortalkombat11-900x450.jpg';
    images[3] = 'https://steam.cryotank.net/wp-content/gallery/sonicadventure2/Sonic-Adventure-2-Battle-02-HD.png';
    images[4] = 'https://i.ytimg.com/vi/y6AopdaBW-I/maxresdefault.jpg'
    //Change Image
    function changeImg(){
        document.getElementById("slide").src = images[i];
// var slides = document.getElementById(slide);
// images [i] = slides;
        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout("changeImg()", time);
    }

    window.onload = changeImg;
