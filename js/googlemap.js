/////////////////* GOOGLE MAP *////////////////////

/* GOOGLE MAP FOR BIG SCREENS */

    function googlemap(mapId) {
        "use strict";
        // Coordinates
        var latlng = new google.maps.LatLng(30.099906, 31.370788);

        var stylez = [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            { saturation: -100 }
          ]
        }
    ];
        // Map Options
        var myMapOptions = {
            zoom: 15,
            scrollwheel: true,
            disableDefaultUI: true,
            mapTypeControl: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.MEDIUM,
                position: google.maps.ControlPosition.LEFT_TOP
            },
            center: latlng,
            mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
        }
        };

        var map = new google.maps.Map(document.getElementById(mapId), myMapOptions);

        var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
        map.mapTypes.set('tehgrayz', mapType);
        map.setMapTypeId('tehgrayz');
        // Map marker
        var image = 'images/pin.png';
        // Map marker options
        var marker = new google.maps.Marker({
            draggable: false,
            animation: google.maps.Animation.DROP,
            map: map,
            position:latlng
        });
    }

    /* GOOGLE MAP FOR MOBILE DEVICES */


    googlemap("google-map");
    googlemap("mobile-map");
    //mobilemap();

    jQuery(window).on('resize orientationchange', function () {
        "use strict";
        if (jQuery(window).width() > 1024) {
            googlemap("google-map");
        }
        else {
            googlemap("mobile-map");
            //mobilemap();
        }
    });
