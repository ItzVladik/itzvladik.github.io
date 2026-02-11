async function initializePage() {    
    try {
        const instructions = await loadInstructions();
        const files = await loadFileList();
        displayFilesWithInstructions(files, instructions);
    } catch (error) {
        console.error('Something went wrong:', error);
        showError(error.message);
    }
}

async function loadInstructions() {
    return SITE_CONFIG.INSTRUCTIONS;
}

async function loadFileList() {
    return FILE_LIST;
}

async function displayFilesWithInstructions(files, instructions) {
    const container = document.getElementById('file-list-container');
    
    if (!files || files.length === 0) {
        container.innerHTML = `<div class="empty">MTY</div>`;
        return;
    }
    
    let html = '';
    
    html = renderFilesList(files, instructions);
    
    container.innerHTML = html;
}

function renderFilesList(files, instructions) {
    return files.map(file => {
        const fileInstruction = findInstructionForFile(file.name, instructions);

        return `
        <img src="${getIconPath( file.name )}" 
             loading="${SITE_CONFIG.ICON_SETTINGS.lazyLoad ? 'lazy' : 'eager'}" 
             style="width: 40px; vertical-align: middle; margin-right: 10px;">
             
        <h4 class="col s12 m8 offset-m2" style="display: inline; vertical-align: middle; margin: 0;">${getDisplayName(file.name)}</h4>
        
        <div class="card grey darken-3 white-text">
            <div class="card-panel hoverable small grey darken-3 white-text">
                <div class="card-content">
                ${file.warn ? ` <span class="badge red white-text">${file.warn}</span> ` : '' }
                    ${fileInstruction ? `
                            <p>
                                ${fileInstruction.steps.map(step => `<li>${step}</li>`).join('')}
                            </p>
                    ` : ''}
                </div>
            
                <div class="card-action">
                ${[
                    { key: 'download_url', text: 'Download APK' },
                    { key: 'resources_url', text: 'Download Resources' },
                    { key: 'patch_url', text: 'Download Patch' },
                    { key: 'touch_url', text: 'Download Touch' }
                ].map(({ key, text }) => file[key] ? `<a href="${file[key]}" target="_blank" rel="noopener noreferrer" style="margin-right: 10px; margin-bottom: 10px;" class="waves-effect waves-light blue darken-2 btn"><span>${text}</span></a>` : '').join('')}

                </div>
            </div>
        </div>
        `
    }).join('');
}

function findInstructionForFile(fileName, instructions) {
    for (const instruction of instructions) {
        if (instruction.forFile && instruction.forFile.trim() !== '') {
            if (fileName.toLowerCase().includes(instruction.forFile.toLowerCase())) {
                return instruction;
            }
        }
    }
    
    return null;
}

function showError(message) {
    const container = document.getElementById('file-list-container');
    container.innerHTML = `
        <div class="error">
            <h3>Error!</h3>
            <p>${message}</p>
            <p><strong>Failed to load repo</strong></p>
        </div>
    `;
}

function getDisplayName(fileName) {
    return SITE_CONFIG.FILE_NAMES[fileName];
}

function getIconFileName(fileName) {
    const newFilename = fileName + ".png";
    return newFilename;
}

function getIconPath(fileName) {
    const iconFile = getIconFileName(fileName);
    return `${SITE_CONFIG.PATHS.icons}${iconFile}`;
}

function preloadIcons() {
    const iconsToPreload = new Set();
    Object.values(getIconPath( FILE_LIST.name ) ).forEach(icon => iconsToPreload.add(icon));
    
    iconsToPreload.add('ic_launcher.png');
    
    iconsToPreload.forEach(iconName => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = `${SITE_CONFIG.PATHS.icons}${iconName}`;
        document.head.appendChild(link);
    });
}

async function checkIconExists(iconPath) {
    try {
        const response = await fetch(iconPath, { method: 'HEAD' });
        return response.ok;
    } catch {
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    preloadIcons();
    initializePage();
});