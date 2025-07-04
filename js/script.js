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
    egt: { name: 'GDTOT', regex: /\[egt id='(.*?)'\]/g, url: 'https://new20.gdtot.dad/file/' },
  };

  const containers = document.querySelectorAll('.download-links, .single-links, .zip-links');

  containers.forEach(container => {
    let content = container.innerHTML;
    for (const key in shortcodes) {
      content = content.replace(shortcodes[key].regex, (match, id) => {
        return `<a href='${shortcodes[key].url}${id}' target='_blank' class="f-links">${shortcodes[key].name}</a>`;
      });
    }
    container.innerHTML = content;
  });
}
