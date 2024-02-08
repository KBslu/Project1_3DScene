require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/FeatureLayer",
  "esri/widgets/LayerList"
], function(Map, SceneView, FeatureLayer, LayerList) {
  
  var map = new Map({
    basemap: "streets-night-vector",
    ground: "world-elevation"
  });

  var view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [-90.1994, 38.6270, 3000], // longitude, latitude, elevation
      tilt: 75
    }
  });

  var popupTemplate = {
    title: "Ward Information",
    content: "One of the STL wards"
  };

  var wardsLayer = new FeatureLayer({
    url: 'https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/wards_stl/FeatureServer/0',
    popupTemplate: popupTemplate
  });

  var roadsLayer = new FeatureLayer({
    url: 'https://services2.arcgis.com/bB9Y1bGKerz1PTl5/arcgis/rest/services/roads_stl/FeatureServer/0'
  });

  map.add(wardsLayer);
  map.add(roadsLayer);

  
  var layerList = new LayerList({
    view: view
  });

  view.ui.add(layerList, "top-right");

});
