# de-muskify-twitter

this repo's a browser extension that strips twitter down to what it should be. it kills off junk like premium ads, grok buttons, verified checkmarks, and ditches the “X” logo for the old-school bird. classic. everything updates on the fly as you scroll, thanks to mutation observers.

## before vs after

**Before:**

![before](https://github.com/user-attachments/assets/857b6be5-db7e-4116-8592-e061902db7a6)

**After:**

![after](https://github.com/user-attachments/assets/22b2ab39-c7fc-41c5-b7f5-dc17534d615f)

## what it does

**Removes UI clutter:**
- The "Subscribe to Premium" element  
- The Grok image generation button  
- Grok links in the sidebar  
- The Grok drawer (logo in bottom right)  
- Grok actions buttons in tweets  
- Verified Orgs, Premium, Communities, Jobs, and Lists links  
- Removes the white glow effect on everything  
- Removes the footer navigation  
- Removes the trending section (that always features musk somehow)
- Removes blue check marks  
- Removes the "Who to follow" sidebar section  

**Customization:**  
  It swaps the default “X” logo with the classic Twitter bird and updates the favicon and tab title to “twitter”. It even renames “Post” to “Tweet.”

**Dynamic changes:**  
  Uses MutationObservers to ensure that even if new elements are injected by Twitter, they get removed.

## how to install

1. **Clone or download this repository:**

   ```bash
   git clone https://github.com/your-username/de-muskify-twitter.git
   cd de-muskify-twitter
   ```

2. **Open your browser:**

   - For Chrome, go to `chrome://extensions/`  
   - For Edge, go to `edge://extensions/`

3. **Enable Developer Mode** (toggle in the corner).

4. **Load the unpacked extension:**  
   Click **Load unpacked** and select the folder.

Once loaded, the extension will start working immediately.

## Skills & Technical Insights

- **DOM Manipulation:** Used query selectors and MutationObservers to identify and remove dynamically injected elements.
- **Browser Extension Development:** Configured manifest files and wrote content scripts to inject JavaScript into web pages.
- **CSS Overriding & Injection:** Implemented JavaScript to dynamically insert custom CSS, overriding default site styles.
- **Resilient Selector Design:** Developed CSS selectors capable of handling frequent changes in HTML element class names.

o7
