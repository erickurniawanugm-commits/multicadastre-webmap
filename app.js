import maplibregl from './node_modules/maplibre-gl/dist/maplibre-gl.js';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/style.json',
    center: [114.035, -8.65], // contoh koordinat Bali Utara
    zoom: 12
});
