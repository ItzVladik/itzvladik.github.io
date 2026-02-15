const FILE_LIST = [
  {
    "name": "episodic",
    "apk": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=episodic-1.06_96.apk",
    "resources": "https://store.steampowered.com/app/220/HalfLife_2/",
  },
  {
    "name": "cstrike",
    "apk": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=cstrike-1.09_96.apk",
    "resources": "https://store.steampowered.com/app/240/CounterStrike_Source/",
  },
  {
    "name": "hl2dm",
    "apk": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=hl2mp-1.07_96.apk",
    "resources": "https://store.steampowered.com/app/320/HalfLife_2_Deathmatch/",
    "patch": "patch.html",
  },
  {
    "name": "dod",
    "apk": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=dod-1.06_96.apk",
    "resources": "https://store.steampowered.com/app/300/Day_of_Defeat_Source/",
  },
  {
    "name": "portal",
    "apk": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=portal-1.05_96.apk",
    "resources": "https://store.steampowered.com/app/400/Portal/",
    "patch" : "patch.html",
  },
  {
    "name": "hl1",
    "apk": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=hl1-1.06_96.apk",
    "resources": "https://store.steampowered.com/app/280/HalfLife_Source/",
    "patch": "patch.html",
  },
];

const SITE_CONFIG = {
    PATHS: {
        icons: 'icons/',
    },
    
    FILE_NAMES: {
        'episodic': 'Episode 1 & 2',
        'cstrike': 'Counter-Strike: Source',
        'hl2dm': 'Half-Life 2: Deathmatch',
        'dod': 'Day of Defeat: Source',
        'portal': 'Portal',
        'hl1': 'Half-Life: Source',
    },

    INSTRUCTIONS: [
        {
            "forFile": "episodic",
            "steps": [
                "Only steam_legacy beta branch is supported.",
            ]
        },

        {
            "forFile": "cstrike",
            "steps": [
                "Only previous_build beta branch is supported.",     
            ]
        },

        {
            "forFile": "hl2dm",
            "steps": [
                "Use the latest version from Steam + universal patch after installation or buildnumbers patch if you install only hl2mp files and you already have hl2 from steam_legacy.",
            ]
        },

        {
            "forFile": "dod",
            "steps": [
                "Only previous_build beta branch is supported."
            ]
        },

        {
            "forFile": "portal",
            "steps": [
                "Apply universal patch from the and then install portal patch in portal folder"
            ]
        },

        {
            "forFile": "hl1",
            "steps": [
                "Apply universal patch after installation if you haven't installed hl2 files before."
            ]
        },
    ],
    
    ICON_SETTINGS: {
        size: '35px',
        lazyLoad: true
    }
};