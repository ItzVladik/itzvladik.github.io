const FILE_LIST = [
  {
    "name": "alone",
    "apk": "external",
    "resources": "https://www.moddb.com/mods/half-life-2-alone-mod",
  },
  {
    "name": "ez",
    "apk": "external",
    "patch": "https://files.workbench.network/srceng/itzvladik/patch/az_c2_3.bsp",
    "resources": "https://store.steampowered.com/app/714070/Entropy__Zero/",
  },
  {
    "name": "ez2",
    "apk": "external",
    "resources": "https://files.workbench.network/srceng/Entropy%20Zero%202/ez2.zip",
    "touch": "external",
    "warn" : "ARM64 ONLY!",
  },
  {
    "name": "gunmod",
    "apk": "external",
    "resources": "external",
    "warn" : "UNSTABLE!",
  },
  {
    "name": "kl",
    "apk": "external",
    "resources": "external",
    "touch" : "external",
    "warn" : "UNSTABLE!",
  },
  {
    "name": "lc",
    "apk": "external",
    "resources": "https://store.steampowered.com/app/220/HalfLife_2/",
  },
  {
    "name": "mi",
    "apk": "external",
    "resources": "https://www.moddb.com/mods/missing-information/downloads/missing-information-16-full",
    "patch" : "external",
  },
  {
    "name": "nh2",
    "apk": "external",
    "resources": "https://www.moddb.com/mods/nightmare-house-2/downloads/nightmare-house-2-2015",
  },
  {
    "name": "ovr",
    "apk": "external",    
    "resources": "https://archive.org/details/hl2oc",
    "touch" : "external",
    "warn" : "UNSTABLE AND ARM64 ONLY!",
  },
  {
    "apk": "external",    
    "name": "p3",
    "resources": "https://archive.org/details/postal-iii",
    "patch": "external",
    "warn" : "UNSTABLE!",
  },
  {
    "name": "sde",
    "apk": "external",
    "resources": "https://www.moddb.com/mods/sde/downloads/snowdrop-escape",
    "touch" : "external",
    "warn" : "ARM64 ONLY!",
  },
  {
    "name": "te120",
    "apk": "external",
    "resources": "https://store.steampowered.com/app/365300/Transmissions_Element_120/",
    "warn" : "ARM64 ONLY!",
  },
  {
    "name": "tf2",
    "apk": "external",
    "resources": "https://mega.nz/file/fMIThQqZ#_qq1b0ZGj_92UMd4FkIJ7QhJ7emJAs5hHwGOHF8rACk",
    "touch" : "external",
  },
  {
    "name": "swelter",
    "apk": "external",
    "resources": "https://www.moddb.com/mods/swelter",
    "touch": "external",
    "warn": "UNSTABLE!",
  }
];

const SITE_CONFIG = {
    PATHS: {
        icons: 'icons/',
    },
    
    FILE_NAMES: {
        'alone' : 'Half-Life 2: Alone',
        'ez2' :  'Entropy: Zero 2',
        'ez'  : 'Entropy: Zero',
        'kl'  : 'Kayf-Life (Leaked Version)',
        'lc' : 'Half-Life 2: Lost Coast',
        'mi' : 'Missing Information',
        'nh2' :  'Nightmare House 2',
        'p3' :  'Postal III',
        'sde' :  'Snowdrop Escape',
        'swelter' :  'Swelter',
        'te120' :  'Transmissions: Element 120',
        'tf2' : 'Team Fortress 2 (2008 Version)',
        'ovr' : 'OVERCHARGED',
        'gunmod' : 'GunMod',  
    },

    INSTRUCTIONS: [
        {
            "forFile": "alone",
            "steps": [
                "This mod have hidden panel, type cl_draweffectspanel 1 in console.",
                "Modification by WadDelz."
            ]
        },

        {
            "forFile": "ez2",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Download touch and exract touch.vpk to ez2/custom, touch.cfg to ez2/cfg.",
                "Game load usual GameUI by default, but you can try gamepadui with -gamepadui arg.",
                "If you have CUtlRBTree error, just restart EZ2, its bug with Source Engine.",
                "And if you have red night vision in first chapter - enable colorcorrection in settings.",
                "Modification by Breadman, 1upD and other, mapbase by Blixibon and other, touch by _scorpion_, Bad Cop and Eternal Cringe."
            ]
        },

        {
            "forFile": "ez",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Resources: From Steam",
                "If you don't fall in the pit on az_c2_3, download this patched map and copy and replace existing map.",
                "Modification by Breadman, 1upD and other, mapbase by Blixibon and other, patched map by Roshi/SaintSoftware."
            ]
        },

        {
            "forFile": "gunmod",
            "steps": [
                "This mod requires Half-Life 2, Missing Information, Half-Life: Source to be installed.",
                "Modification by ItzVladik, Beta Code by VXP (LeakNet)."
            ]
        },

        {
            "forFile": "kl",
            "steps": [
                "This mod requires Half-Life 2 to be installed.",
                "Download touch and extract kl/custom/ path",
                "If you catch random disconnect on d2_coast_04, turn off subtitles.",
                "If d2_coast_08 loads save, delete kl/maps/d2_coast_08.bsp",
                "Modification by Antinomy Collective, touch by Eternal Cringe and SanyaSho."
            ]
        },

        {
            "forFile": "lc",
            "steps": [
                "This mod requires Half-Life 2, Episode 1 and Episode 2 to be installed.",
                "Resources: From Steam.",
                "You can run lostcoast with episodic launcher, but Fisherman will be without weapon_oldmanharpoon.",
                "Modification by Valve."
            ]
        },

        {
            "forFile": "mi",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Download patch and extract to missinginfo folder.",
                "Modification by Missing Information Dev Team."
            ]
        },

        {
            "forFile": "nh2",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "If you have white vignette try set mat_hdr_level 3 in console.",
                "Modification by WeCreateStuff."
            ]
        },

        {
            "forFile": "p3",
            "steps": [
                "Download patch and extract content of this archive to the path where the p3 folder is located and agree to gameinfo replace.",
                "If the menu is white, then you need to run maps directly from the command line arguments, for example '+map pdb'",
                "Rename p3_english to android system language, ex: p3_russian, p3_polish and etc.",
                "Run launcher, set directory and play!",
                "Modification by Trashmasters."
            ]
        },

        {
            "forFile": "sde",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Download touch and extract to snowdrop_escape folder.",
                "Modification by SDE Dev Team, touch by Eternal Cringe."
            ]
        },

        {
            "forFile": "te120",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Resources: From Steam.",
                "Modification by Shokunin, Vincent Thiele, Thomas M. Visser"
            ]
        },

        {
            "forFile": "tf2",
            "steps": [
                "This mod requires Half-Life 2",
                "Download touch and extract to tf_port folder.",
                "For working bots, you need to download nav files for TF2 maps.",
                "Modification by Valve, Source 2013 port by NicknineTheEagle, touch by bvvth556."
            ]
        },

        {
            "forFile": "ovr",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2",
                "You can try any version from archive.org page, it will work, but you won't be able to try new features from newer versions.",
                "Download touch and extract to overcharged folder.",
                "Critical Issues: Long loading time (from 4 to 20 min), dynamic RTT reduce fps same as bokeh dof shader, shader editor gui is not working properly.",
                "Modification by MikeD, BriJee and other, touch by S.E.A.T.H"
            ]
        },

        {
            "forFile": "swelter",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Download touch and extract to swelter folder.",
                "Rainbow reflections are a bug that appears on low-end devices. The solution is to disable reflections using the console command mat_sepecular 0.",
                "For some reason the sound from the VPK doesn't work, so you need to unpack the VPK with the sound for it to appear, I don't know how to fix this yet.",
                "Modification by SDE Dev Team, touch by Eternal Cringe.",
            ]
        },
    ],
    
    ICON_SETTINGS: {
        size: '35px',
        lazyLoad: true
    }
};