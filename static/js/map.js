// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {
        lat: 23.067083,
        lng: 113.391866
    };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 12,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        label: {
            color: '#000000',
            fontWeight: 'bold',
            fontSize: '14px',
            text: 'Sun Yat-sen University'
        }
    });
}

