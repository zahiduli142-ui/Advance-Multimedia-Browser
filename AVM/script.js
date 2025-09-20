// Load saved shortcuts
function loadShortcuts() {
  const shortcutsContainer = document.getElementById('shortcuts');
  shortcutsContainer.innerHTML = '';
  const shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];

  shortcuts.forEach(shortcut => {
    const link = document.createElement('a');
    link.href = shortcut.url;
    link.target = "_blank";
    link.textContent = shortcut.name;
    shortcutsContainer.appendChild(link);
  });
}

// Add new shortcut
document.getElementById('addShortcut').addEventListener('click', () => {
  const name = prompt("Enter shortcut name:");
  const url = prompt("Enter shortcut URL (include https://):");
  if (name && url) {
    const shortcuts = JSON.parse(localStorage.getItem('shortcuts')) || [];
    shortcuts.push({ name, url });
    localStorage.setItem('shortcuts', JSON.stringify(shortcuts));
    loadShortcuts();
  }
});

window.onload = loadShortcuts;
