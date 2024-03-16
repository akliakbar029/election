var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_layer_1 = new ol.format.GeoJSON();
var features_layer_1 = format_layer_1.readFeatures(json_layer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_1.addFeatures(features_layer_1);
var lyr_layer_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_layer_1, 
                style: style_layer_1,
                popuplayertitle: "layer",
                interactive: true,
                title: '<img src="styles/legend/layer_1.png" /> layer'
            });
var format_layer_2 = new ol.format.GeoJSON();
var features_layer_2 = format_layer_2.readFeatures(json_layer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_2.addFeatures(features_layer_2);
var lyr_layer_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_layer_2, 
                style: style_layer_2,
                popuplayertitle: "layer",
                interactive: true,
                title: '<img src="styles/legend/layer_2.png" /> layer'
            });
var format_layer_3 = new ol.format.GeoJSON();
var features_layer_3 = format_layer_3.readFeatures(json_layer_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_3.addFeatures(features_layer_3);
var lyr_layer_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_layer_3, 
                style: style_layer_3,
                popuplayertitle: "layer",
                interactive: true,
                title: '<img src="styles/legend/layer_3.png" /> layer'
            });
var format_layer_4 = new ol.format.GeoJSON();
var features_layer_4 = format_layer_4.readFeatures(json_layer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_4.addFeatures(features_layer_4);
var lyr_layer_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_layer_4, 
                style: style_layer_4,
                popuplayertitle: "layer",
                interactive: true,
                title: '<img src="styles/legend/layer_4.png" /> layer'
            });
var format_layer_5 = new ol.format.GeoJSON();
var features_layer_5 = format_layer_5.readFeatures(json_layer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_5.addFeatures(features_layer_5);
var lyr_layer_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_layer_5, 
                style: style_layer_5,
                popuplayertitle: "layer",
                interactive: true,
                title: '<img src="styles/legend/layer_5.png" /> layer'
            });
var format_layer_6 = new ol.format.GeoJSON();
var features_layer_6 = format_layer_6.readFeatures(json_layer_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_layer_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_layer_6.addFeatures(features_layer_6);
var lyr_layer_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_layer_6, 
                style: style_layer_6,
                popuplayertitle: "layer",
                interactive: true,
                title: '<img src="styles/legend/layer_6.png" /> layer'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_layer_1.setVisible(true);lyr_layer_2.setVisible(true);lyr_layer_3.setVisible(true);lyr_layer_4.setVisible(true);lyr_layer_5.setVisible(true);lyr_layer_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_layer_1,lyr_layer_2,lyr_layer_3,lyr_layer_4,lyr_layer_5,lyr_layer_6];
lyr_layer_1.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'osm_id': 'osm_id', 'type': 'type', 'Shape_Le_1': 'Shape_Le_1', });
lyr_layer_2.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'osm_id': 'osm_id', 'type': 'type', 'Shape_Le_1': 'Shape_Le_1', });
lyr_layer_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'osm_id': 'osm_id', 'type': 'type', 'Shape_Le_1': 'Shape_Le_1', });
lyr_layer_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'osm_id': 'osm_id', 'type': 'type', 'Shape_Le_1': 'Shape_Le_1', });
lyr_layer_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'osm_id': 'osm_id', 'type': 'type', 'Shape_Le_1': 'Shape_Le_1', });
lyr_layer_6.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'osm_id': 'osm_id', 'type': 'type', 'Shape_Le_1': 'Shape_Le_1', });
lyr_layer_1.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', 'osm_id': '', 'type': '', 'Shape_Le_1': '', });
lyr_layer_2.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', 'osm_id': '', 'type': '', 'Shape_Le_1': '', });
lyr_layer_3.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', 'osm_id': '', 'type': '', 'Shape_Le_1': '', });
lyr_layer_4.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', 'osm_id': '', 'type': '', 'Shape_Le_1': '', });
lyr_layer_5.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', 'osm_id': '', 'type': '', 'Shape_Le_1': '', });
lyr_layer_6.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', 'Shape_Area': '', 'osm_id': '', 'type': '', 'Shape_Le_1': '', });
lyr_layer_1.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'osm_id': 'no label', 'type': 'no label', 'Shape_Le_1': 'no label', });
lyr_layer_2.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'osm_id': 'no label', 'type': 'no label', 'Shape_Le_1': 'no label', });
lyr_layer_3.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'osm_id': 'no label', 'type': 'no label', 'Shape_Le_1': 'no label', });
lyr_layer_4.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'osm_id': 'no label', 'type': 'no label', 'Shape_Le_1': 'no label', });
lyr_layer_5.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'osm_id': 'no label', 'type': 'no label', 'Shape_Le_1': 'no label', });
lyr_layer_6.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'osm_id': 'no label', 'type': 'no label', 'Shape_Le_1': 'no label', });
lyr_layer_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});