const FILE_LIST = [
  {
    "name": "episodic",
    "download_url": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=episodic-1.06_96.apk",
    "resources_url": "https://store.steampowered.com/app/220/HalfLife_2/",
  },
  {
    "name": "cstrike",
    "download_url": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=cstrike-1.09_96.apk",
    "resources_url": "https://store.steampowered.com/app/240/CounterStrike_Source/",
  },
  {
    "name": "hl2dm",
    "download_url": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=hl2mp-1.07_96.apk",
    "resources_url": "https://store.steampowered.com/app/320/HalfLife_2_Deathmatch/",
    "patch_url": "patch.html",
  },
  {
    "name": "dod",
    "download_url": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=dod-1.06_96.apk",
    "resources_url": "https://store.steampowered.com/app/300/Day_of_Defeat_Source/",
  },
  {
    "name": "portal",
    "download_url": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=portal-1.05_96.apk",
    "resources_url": "https://store.steampowered.com/app/400/Portal/",
    "patch_url" : "patch.html",
  },
  {
    "name": "hl1",
    "download_url": "https://nc.workbench.network/s/gdRnpcc2zrXz5Xg/download?path=%2F&files=hl1-1.06_96.apk",
    "resources_url": "https://store.steampowered.com/app/280/HalfLife_Source/",
    "patch_url": "patch.html",
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
            "title": "Additional Info",
            "forFile": "episodic",
            "steps": [
                "Only steam_legacy beta branch is supported.",
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "cstrike",
            "steps": [
                "Only previous_build beta branch is supported.",     
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "hl2dm",
            "steps": [
                "Use the latest version from Steam + universal patch after installation or buildnumbers patch if you install only hl2mp files and you already have hl2 from steam_legacy.",
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "dod",
            "steps": [
                "Only previous_build beta branch is supported."
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "portal",
            "steps": [
                "Apply universal patch from the and then install portal patch in portal folder"
            ]
        },

        {
            "title": "Additional Info",
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