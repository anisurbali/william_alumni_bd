var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_IMG_32_name_modified_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_32_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_32_name_modified_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9993730.752469, 2683246.547939, 9996011.417591, 2686547.177185]
                            })
                        });
var lyr_IMG_32_modified_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_32_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_32_modified_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9993730.752469, 2683246.547939, 9996011.417591, 2686547.177185]
                            })
                        });
var lyr_IMG_341_name_modified_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_34 1_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_341_name_modified_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9993545.387843, 2682094.228248, 9995981.572532, 2685265.316003]
                            })
                        });
var lyr_IMG_341_modified_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_34 1_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_341_modified_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9993545.387843, 2682094.228248, 9995981.572532, 2685265.316003]
                            })
                        });
var lyr_IMG_342_modified_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_34 2_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_342_modified_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9992360.515153, 2681310.249621, 9994946.887058, 2684643.713172]
                            })
                        });
var lyr_IMG_372_modified_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_37 2_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_372_modified_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9990889.525735, 2683130.647184, 9993314.163852, 2686463.431573]
                            })
                        });
var lyr_IMG_371_modified_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_37 1_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_371_modified_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9989199.968355, 2683091.101550, 9991775.127693, 2686363.305976]
                            })
                        });
var lyr_IMG_371_name_modified_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_37 1_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_371_name_modified_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9989199.968355, 2683091.101550, 9991775.127693, 2686363.305976]
                            })
                        });
var lyr_IMG_372_name_modified_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_37 2_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_372_name_modified_9.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9990889.525735, 2683130.647184, 9993314.163852, 2686463.431573]
                            })
                        });
var lyr_JL_381_name_modified_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_38 1_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_381_name_modified_10.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9989210.053152, 2682854.981711, 9991757.128682, 2686131.220040]
                            })
                        });
var lyr_JL_381_modified_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_38 1_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_381_modified_11.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9989209.814050, 2682873.110636, 9991761.321068, 2686115.260522]
                            })
                        });
var lyr_JL_383_modified_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_38 3_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_383_modified_12.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9989465.800201, 2681463.449862, 9992022.552717, 2684804.505166]
                            })
                        });
var lyr_JL_382_name_modified_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_38 2_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_382_name_modified_13.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9988101.451561, 2681642.752402, 9990614.733344, 2684928.384042]
                            })
                        });
var lyr_JL_382_modified_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_38 2_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_382_modified_14.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9988046.660939, 2681628.882265, 9990653.292431, 2684919.993517]
                            })
                        });
var lyr_JL_383_name_modified_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_38 3_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_383_name_modified_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9989465.800201, 2681463.449862, 9992022.552717, 2684804.505166]
                            })
                        });
var lyr_JL_401_modified_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_40 1_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_401_modified_16.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9989943.450036, 2680788.314128, 9992320.228648, 2684041.238581]
                            })
                        });
var lyr_JL_401_name_modified_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_40 1_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_401_name_modified_17.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9989943.450036, 2680788.314128, 9992320.228648, 2684041.238581]
                            })
                        });
var lyr_JL_402_modified_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_40 2_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_402_modified_18.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9990920.842622, 2680720.667489, 9993547.186525, 2684182.324209]
                            })
                        });
var lyr_JL_402_name_modified_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "JL_40 2_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JL_402_name_modified_19.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9990920.842622, 2680720.667489, 9993547.186525, 2684182.324209]
                            })
                        });
var lyr_IMG_342_name_modified_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_34 2_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_342_name_modified_20.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9992360.515153, 2681310.249621, 9994946.887058, 2684643.713172]
                            })
                        });
var lyr_IMG_373_modified_21 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_37 3_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_373_modified_21.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9990831.019165, 2681617.166288, 9993271.394342, 2684881.731499]
                            })
                        });
var lyr_IMG_373_name_modified_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_37 3_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_373_name_modified_22.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9990831.019165, 2681617.166288, 9993271.394342, 2684881.731499]
                            })
                        });
var lyr_IMG_36_modified_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_36_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_36_modified_23.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9991974.865881, 2682514.312865, 9994385.591912, 2685772.836152]
                            })
                        });
var lyr_IMG_36_name_modified_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "IMG_36_name_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/IMG_36_name_modified_24.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [9991974.865881, 2682514.312865, 9994385.591912, 2685772.836152]
                            })
                        });
var format_khas_land_25 = new ol.format.GeoJSON();
var features_khas_land_25 = format_khas_land_25.readFeatures(json_khas_land_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_khas_land_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_khas_land_25.addFeatures(features_khas_land_25);
var lyr_khas_land_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_khas_land_25, 
                style: style_khas_land_25,
                popuplayertitle: "khas_land",
                interactive: true,
                title: '<img src="styles/legend/khas_land_25.png" /> khas_land'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_IMG_32_name_modified_1.setVisible(true);lyr_IMG_32_modified_2.setVisible(true);lyr_IMG_341_name_modified_3.setVisible(true);lyr_IMG_341_modified_4.setVisible(true);lyr_IMG_342_modified_5.setVisible(true);lyr_IMG_372_modified_6.setVisible(true);lyr_IMG_371_modified_7.setVisible(true);lyr_IMG_371_name_modified_8.setVisible(true);lyr_IMG_372_name_modified_9.setVisible(true);lyr_JL_381_name_modified_10.setVisible(true);lyr_JL_381_modified_11.setVisible(true);lyr_JL_383_modified_12.setVisible(true);lyr_JL_382_name_modified_13.setVisible(true);lyr_JL_382_modified_14.setVisible(true);lyr_JL_383_name_modified_15.setVisible(true);lyr_JL_401_modified_16.setVisible(true);lyr_JL_401_name_modified_17.setVisible(true);lyr_JL_402_modified_18.setVisible(true);lyr_JL_402_name_modified_19.setVisible(true);lyr_IMG_342_name_modified_20.setVisible(true);lyr_IMG_373_modified_21.setVisible(true);lyr_IMG_373_name_modified_22.setVisible(true);lyr_IMG_36_modified_23.setVisible(true);lyr_IMG_36_name_modified_24.setVisible(true);lyr_khas_land_25.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_IMG_32_name_modified_1,lyr_IMG_32_modified_2,lyr_IMG_341_name_modified_3,lyr_IMG_341_modified_4,lyr_IMG_342_modified_5,lyr_IMG_372_modified_6,lyr_IMG_371_modified_7,lyr_IMG_371_name_modified_8,lyr_IMG_372_name_modified_9,lyr_JL_381_name_modified_10,lyr_JL_381_modified_11,lyr_JL_383_modified_12,lyr_JL_382_name_modified_13,lyr_JL_382_modified_14,lyr_JL_383_name_modified_15,lyr_JL_401_modified_16,lyr_JL_401_name_modified_17,lyr_JL_402_modified_18,lyr_JL_402_name_modified_19,lyr_IMG_342_name_modified_20,lyr_IMG_373_modified_21,lyr_IMG_373_name_modified_22,lyr_IMG_36_modified_23,lyr_IMG_36_name_modified_24,lyr_khas_land_25];
lyr_khas_land_25.set('fieldAliases', {'id': 'id', 'mouja': 'mouja', 'daag': 'daag', 'photo_path': 'photo_path', });
lyr_khas_land_25.set('fieldImages', {'id': 'TextEdit', 'mouja': 'TextEdit', 'daag': 'TextEdit', 'photo_path': 'ExternalResource', });
lyr_khas_land_25.set('fieldLabels', {'id': 'no label', 'mouja': 'no label', 'daag': 'no label', 'photo_path': 'no label', });
lyr_khas_land_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});