var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-room",
      "name": "LIVING ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1436800771042825
      },
      "linkHotspots": [
        {
          "yaw": 0.6849895617091182,
          "pitch": 0.031160517543586508,
          "rotation": 1.5707963267948966,
          "target": "1-tv-unit"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.42257499693373646,
          "pitch": 0.09465162926230519,
          "title": "MAIN DOOR",
          "text": "<br>"
        }
      ]
    },
    {
      "id": "1-tv-unit",
      "name": "TV UNIT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.943232704709652
      },
      "linkHotspots": [
        {
          "yaw": 0.6623082916038783,
          "pitch": 0.0029254171085177916,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.8510611775893162,
          "pitch": 0.019235580371768535,
          "rotation": 1.5707963267948966,
          "target": "3-common-wash"
        },
        {
          "yaw": 1.0134830876757874,
          "pitch": -0.00009111635785430394,
          "rotation": 6.283185307179586,
          "target": "2-dining"
        },
        {
          "yaw": 1.527351735105655,
          "pitch": 0.004086225146384237,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": -0.8580734241173715,
          "pitch": 0.02746619034789788,
          "rotation": 0,
          "target": "4-bedroom-1"
        },
        {
          "yaw": -2.036275527756544,
          "pitch": 0.07909946905962073,
          "rotation": 0,
          "target": "5-bedroom-2"
        },
        {
          "yaw": 2.0646883318279725,
          "pitch": 0.04171277599130008,
          "rotation": 1.5707963267948966,
          "target": "6-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.0895023083769935
      },
      "linkHotspots": [
        {
          "yaw": -1.3306471304565086,
          "pitch": 0.06886604957887243,
          "rotation": 0,
          "target": "3-common-wash"
        },
        {
          "yaw": -0.4400307955489673,
          "pitch": 0.0343559602827348,
          "rotation": 0,
          "target": "1-tv-unit"
        },
        {
          "yaw": -2.0816618018794166,
          "pitch": 0.08995060283840317,
          "rotation": 4.71238898038469,
          "target": "8-kitchen"
        },
        {
          "yaw": -1.748572814150652,
          "pitch": 0.05166159672238635,
          "rotation": 0,
          "target": "7-bedroom-4"
        },
        {
          "yaw": -0.9619380836986551,
          "pitch": 0.047908834142130985,
          "rotation": 0,
          "target": "6-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-common-wash",
      "name": "COMMON WASH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.026363200931067254,
        "pitch": 0,
        "fov": 1.137224482440964
      },
      "linkHotspots": [
        {
          "yaw": -0.8468394422224819,
          "pitch": 0.11708230399261943,
          "rotation": 0,
          "target": "7-bedroom-4"
        },
        {
          "yaw": -2.8961248338055654,
          "pitch": 0.26511825960563584,
          "rotation": 0,
          "target": "2-dining"
        },
        {
          "yaw": -1.5520347261054166,
          "pitch": 0.11050063084821637,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": 2.4977118742138087,
          "pitch": 0.11000977924896382,
          "rotation": 0,
          "target": "0-living-room"
        },
        {
          "yaw": 1.6242358225701778,
          "pitch": 0.22491675271183986,
          "rotation": 0,
          "target": "1-tv-unit"
        },
        {
          "yaw": 0.8797510603882248,
          "pitch": 0.0927574130690978,
          "rotation": 0,
          "target": "6-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9010430699255381
      },
      "linkHotspots": [
        {
          "yaw": 0.9010716193016037,
          "pitch": 0.0487871739894814,
          "rotation": 0,
          "target": "1-tv-unit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-2",
      "name": "BEDROOM 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9947732910418502
      },
      "linkHotspots": [
        {
          "yaw": -0.9273968115792002,
          "pitch": 0.13154182202830889,
          "rotation": 0,
          "target": "1-tv-unit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom-3",
      "name": "BEDROOM 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 0.9190595163762393
      },
      "linkHotspots": [
        {
          "yaw": -2.2628222928282824,
          "pitch": 0.0783036256730476,
          "rotation": 4.71238898038469,
          "target": "3-common-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom-4",
      "name": "BEDROOM 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.017896274078634
      },
      "linkHotspots": [
        {
          "yaw": 2.3619721719389126,
          "pitch": -0.0005326183238700821,
          "rotation": 1.5707963267948966,
          "target": "3-common-wash"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1734082532213463
      },
      "linkHotspots": [
        {
          "yaw": 1.704950867499452,
          "pitch": 0.04995976687997583,
          "rotation": 0,
          "target": "9-workarea"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-workarea",
      "name": "WORKAREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1283230968566351
      },
      "linkHotspots": [
        {
          "yaw": 1.869256422346636,
          "pitch": 0.09196763204250225,
          "rotation": 0,
          "target": "10-store-room"
        },
        {
          "yaw": -2.223404356754303,
          "pitch": 0.08640936133008736,
          "rotation": 1.5707963267948966,
          "target": "8-kitchen"
        },
        {
          "yaw": -2.668283521526609,
          "pitch": 0.09539014535789647,
          "rotation": 0,
          "target": "2-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-store-room",
      "name": "STORE ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1146481453374077
      },
      "linkHotspots": [
        {
          "yaw": -1.1663461412887326,
          "pitch": 0.10249180555326731,
          "rotation": 0,
          "target": "9-workarea"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DEEPU RESIDENCE",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
