const FILE_LIST = [
  {
    "name": "alone",
    "download_url": "uploads/alone.apk",
    "resources_url": "https://www.moddb.com/mods/half-life-2-alone-mod",
  },
  {
    "name": "ez",
    "download_url": "uploads/ez.apk",
    "patch_url": "https://github.com/ItzVladik/extras/raw/refs/heads/main/mods/ez/az_c2_3.bsp",
    "resources_url": "https://store.steampowered.com/app/714070/Entropy__Zero/",
  },
  {
    "name": "ez2",
    "download_url": "uploads/ez2.apk",
    "resources_url": "https://drive.google.com/file/d/1s2evTI96tXGq8DhDu6xWkr2PA_DCfcQu/view?usp=sharing",
    "touch_url": "https://github.com/ItzVladik/extras/raw/refs/heads/main/mods/ez2/touch.7z",
    "warn" : "ARM64 ONLY!",
  },
  {
    "name": "gunmod",
    "download_url": "uploads/gunmod.apk",
    "resources_url": "https://drive.google.com/file/d/1XHqwxAbg0XWEZOL3pBgBGjxADKrBJXGT/view?usp=sharing",
    "warn" : "UNSTABLE!",
  },
  {
    "name": "kl",
    "download_url": "uploads/kl.apk",
    "resources_url": "https://drive.google.com/file/d/1D2CKNCG_dG-l2ul7dSWjwmVXRwZZPzDn/view",
    "touch_url" : "https://drive.google.com/file/d/1D2CKNCG_dG-l2ul7dSWjwmVXRwZZPzDn/view",
    "warn" : "UNSTABLE!",
  },
  {
    "name": "lc",
    "download_url": "uploads/lc.apk",
    "resources_url": "https://store.steampowered.com/app/220/HalfLife_2/",
  },
  {
    "name": "mi",
    "download_url": "uploads/mi.apk",
    "resources_url": "https://www.moddb.com/mods/missing-information/downloads/missing-information-16-full",
    "patch_url" : "https://github.com/ItzVladik/extras/raw/refs/heads/main/mods/mi/patch.7z",
  },
  {
    "name": "nh2",
    "download_url": "uploads/nh2.apk",
    "resources_url": "https://www.moddb.com/mods/nightmare-house-2/downloads/nightmare-house-2-2015",
  },
  {
    "name": "overcharged",
    "download_url": "uploads/overcharged.apk",
    "resources_url": "https://archive.org/details/hl2oc",
    "touch_url" : "https://github.com/ItzVladik/extras/raw/refs/heads/main/mods/overcharged/overcharged.zip",
    "warn" : "UNSTABLE AND ARM64 ONLY!",
  },
  {
    "name": "p3",
    "download_url": "uploads/p3.apk",
    "resources_url": "https://archive.org/details/postal-iii",
    "patch_url": "https://github.com/ItzVladik/extras/raw/refs/heads/main/mods/p3/p3.7z",
    "warn" : "UNSTABLE!",
  },
  {
    "name": "snowdrop",
    "download_url": "uploads/snowdrop.apk",
    "resources_url": "https://www.moddb.com/mods/sde/downloads/snowdrop-escape",
    "touch_url" : "https://github.com/ItzVladik/extras/raw/refs/heads/main/mods/snowdrop/snowdrop_touch.7z",
    "warn" : "ARM64 ONLY!",
  },
  {
    "name": "te120",
    "download_url": "uploads/te120.apk",
    "resources_url": "https://store.steampowered.com/app/365300/Transmissions_Element_120/",
    "warn" : "ARM64 ONLY!",
  },
  {
    "name": "tf2",
    "download_url": "uploads/tf2.apk",
    "resources_url": "https://mega.nz/file/fMIThQqZ#_qq1b0ZGj_92UMd4FkIJ7QhJ7emJAs5hHwGOHF8rACk",
    "touch_url" : "https://github.com/ItzVladik/extras/raw/refs/heads/main/mods/tf2/tf2_touch.7z",
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
        'snowdrop' :  'Snowdrop Escape',
        'swelter' :  'Swelter',
        'te120' :  'Transmissions: Element 120',
        'tf2' : 'Team Fortress 2 (2008 Version)',
        'overcharged' : 'OVERCHARGED',
        'gunmod' : 'GunMod',  
    },

    INSTRUCTIONS: [
        {
            "title": "Additional Info",
            "forFile": "alone",
            "steps": [
                "This mod have hidden panel, type cl_draweffectspanel 1 in console.",
                "Modification by WadDelz."
            ]
        },

        {
            "title": "Additional Info",
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
            "title": "Additional Info",
            "forFile": "ez",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Resources: From Steam",
                "If you don't fall in the pit on az_c2_3, download this patched map and copy and replace existing map.",
                "Modification by Breadman, 1upD and other, mapbase by Blixibon and other, patched map by Roshi/SaintSoftware."
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "gunmod",
            "steps": [
                "This mod requires Half-Life 2, Missing Information, Half-Life: Source to be installed.",
                "Modification by ItzVladik, Beta Code by VXP (LeakNet)."
            ]
        },

        {
            "title": "Additional Info",
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
            "title": "Additional Info",
            "forFile": "lc",
            "steps": [
                "This mod requires Half-Life 2, Episode 1 and Episode 2 to be installed.",
                "Resources: From Steam.",
                "You can run lostcoast with episodic launcher, but Fisherman will be without weapon_oldmanharpoon.",
                "Modification by Valve."
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "mi",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Download patch and extract to missinginfo folder.",
                "Modification by Missing Information Dev Team."
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "nh2",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "If you have white vignette try set mat_hdr_level 3 in console.",
                "Modification by WeCreateStuff."
            ]
        },

        {
            "title": "Additional Info",
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
            "title": "Additional Info",
            "forFile": "snowdrop",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Download touch and extract to snowdrop_escape folder.",
                "Modification by SDE Dev Team, touch by Eternal Cringe."
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "te120",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2 to be installed.",
                "Resources: From Steam.",
                "Modification by Shokunin, Vincent Thiele, Thomas M. Visser"
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "tf2",
            "steps": [
                "This mod requires Half-Life 2",
                "Download touch and extract to tf_port folder.",
                "For working bots, you need to download nav files for TF2 maps.",
                "Modification by Valve, Source 2013 port by NicknineTheEagle, touch by bvvth556."
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "overcharged",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2",
                "You can try any version from archive.org page, it will work, but you won't be able to try new features from newer versions.",
                "Download touch and extract to overcharged folder.",
                "Critical Issues: Long loading time (from 4 to 20 min), dynamic RTT reduce fps same as bokeh dof shader, shader editor gui is not working properly.",
                "Modification by MikeD, BriJee and other, touch by S.E.A.T.H"
            ]
        },

        {
            "title": "Additional Info",
            "forFile": "episodic",
            "steps": [
                "This mod requires Half-Life 2, Episode 1, Episode 2",
                "You can try any version from archive.org page, it will work, but you won't be able to try new features from newer versions.",
                "Download touch and extract to overcharged folder.",
                "Critical Issues: Long loading time (from 4 to 20 min), dynamic RTT reduce fps same as bokeh dof shader, shader editor gui is not working properly.",
                "Modification by MikeD, BriJee and other, touch by S.E.A.T.H"
            ]
        },
    ],
    
    ICON_SETTINGS: {
        size: '35px',
        lazyLoad: true
    }
};