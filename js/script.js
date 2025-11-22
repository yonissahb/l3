document.addEventListener('DOMContentLoaded', () => {
  // Load header dynamically
  document.getElementById('header').innerHTML = `
    <header>
      <h1>MovieHai</h1>
    </header>
  `;

  // Load footer disclaimer dynamically
  document.getElementById('footer-msg').innerHTML = `
    <p><span>Disclaimer:</span> We does not host any files on it's servers. All files or contents hosted on third party websites | We does not accept responsibility for contents hosted on third party websites. We just index those links which are already available in internet</p>
  `;

  // Replace shortcodes
  replaceShortcodes();
});

function replaceShortcodes() {
    const shortcodes = {
        gdf: { name: 'GDFLIX', regex: /\[gdf id='(.*?)'\]/g, url: 'https://new9.gdflix.net/file/'},
        fpd: { name: 'FILEPRESS', regex: /\[fpd id='(.*?)'\]/g, url: 'https://new1.filepress.cloud/file/'},
        apd: { name: 'APPDRIVE', regex: /\[apd id='(.*?)'\]/g, url: 'https://appdrive.life/file/'}
    };

    // Select elements with any of the target classes
    const contentContainers = document.querySelectorAll('.download-links, .single-links, .zip-links');

    contentContainers.forEach(contentContainer => {
        let content = contentContainer.innerHTML;
        for (const key in shortcodes) {
            if (shortcodes.hasOwnProperty(key)) {
                content = content.replace(shortcodes[key].regex, (match, id) => {
                    return `<a href='${shortcodes[key].url}${id}' target='_blank' class="f-links">
                                ${shortcodes[key].name}
                            </a>`;
                });
            }
        }
        contentContainer.innerHTML = content;
    });
}

document.addEventListener('DOMContentLoaded', replaceShortcodes);
