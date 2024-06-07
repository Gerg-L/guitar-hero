(async function() {
        while (!Spicetify.React || !Spicetify.ReactDOM) {
          await new Promise(resolve => setTimeout(resolve, 10));
        }
        var guitarDhero = (() => {
  // src/app.tsx
  async function main() {
    const { Platform, ReactDOM, React, LocalStorage, Player, URI } = Spicetify;
    if (!Platform || !React || !ReactDOM || !LocalStorage || !Player || !URI) {
      setTimeout(main, 250);
      return;
    }
    const container = await waitForElement(".main-nowPlayingBar-right");
    const button = document.createElement("button");
    const icon = document.createElement("img");
    icon.src = "https://icons.veryicon.com/png/o/object/material_design_icons/guitar-23.png";
    icon.alt = "Get Chords";
    icon.style.filter = "invert(100%)";
    icon.style.width = "24px";
    icon.style.height = "24px";
    button.style.marginLeft = "10px";
    button.style.backgroundColor = "transparent";
    button.style.border = "none";
    button.style.padding = "5px";
    button.style.cursor = "pointer";
    button.appendChild(icon);
    container.appendChild(button);
    button.addEventListener("click", () => {
      const queue = Spicetify.Queue;
      const currentTrack = queue.track;
      const track = currentTrack.contextTrack;
      const artistName = track.metadata.artist_name;
      const songName = track.metadata.title;
      const searchQuery = `${artistName} ${songName} chords`;
      const url = `https://www.ultimate-guitar.com/search.php?search_type=title&value=${encodeURIComponent(searchQuery)}`;
      console.log(url);
      window.open(url, "_blank");
    });
    container.appendChild(button);
  }
  async function waitForElement(selector, parent = document) {
    return new Promise((resolve) => {
      const element = parent.querySelector(selector);
      if (element) {
        resolve(element);
      } else {
        const observer = new MutationObserver((mutations) => {
          for (const mutation of mutations) {
            const el = mutation.target.querySelector(selector);
            if (el) {
              observer.disconnect();
              resolve(el);
              break;
            }
          }
        });
        observer.observe(parent, { childList: true, subtree: true });
      }
    });
  }
  var app_default = main;

  // ../../../../AppData/Local/Temp/spicetify-creator/index.jsx
  (async () => {
    await app_default();
  })();
})();

      })();