// remove the "Subscribe to Premium" element
const removeSubscribePremium = () => {
    document.querySelectorAll('aside[aria-label="Subscribe to Premium"]').forEach(el => el.remove());
};

// remove the grok image generation button
const removeGrokImgGen = () => {
    document.querySelectorAll('button[data-testid="grokImgGen"]').forEach(el => el.remove());
};

// remove grok in sidebar
const removeGrokLink = () => {
    document.querySelectorAll('a[aria-label="Grok"]').forEach(el => el.remove());
};

// remove stupid grok logo in bottom right
const removeGrokDrawer = () => {
    document.querySelectorAll('[data-testid="GrokDrawer"]').forEach(el => el.remove());
};

// remove Grok actions button in each tweet
const removeGrokActions = () => {
    document.querySelectorAll('button[aria-label="Grok actions"]').forEach(el => el.remove());
};

// remove Verified Orgs link
const removeVerifiedOrgs = () => {
    document.querySelectorAll('a[aria-label="Verified Orgs"]').forEach(el => el.remove());
};

// remove Premium link
const removePremium = () => {
    document.querySelectorAll('a[aria-label="Premium"]').forEach(el => el.remove());
};

// remove Communities link
const removeCommunities = () => {
    document.querySelectorAll('a[aria-label="Communities"]').forEach(el => el.remove());
};

// remove Jobs link
const removeJobs = () => {
    document.querySelectorAll('a[aria-label="Jobs"]').forEach(el => el.remove());
};

// remove Lists link
const removeLists = () => {
    document.querySelectorAll('a[aria-label="Lists"]').forEach(el => el.remove());
};

// rename "posts" back to "tweets"
const replacePostWithTweet = () => {
    document.querySelectorAll('span').forEach(el => {
        if (el.textContent.trim() === "Post") {
            el.textContent = "Tweet";
        }
    });
};

// stupid white glow effect on everything
const removeWhiteGlowEffect = () => {
    const styleElem = document.createElement("style");
    styleElem.textContent = `
      *, *::before, *::after {
        box-shadow: none !important;
      }
    `;
    document.head.appendChild(styleElem);
};

// Remove the footer navigation containing the legal and corporate links
const removeFooterLinks = () => {
    document.querySelectorAll('nav[aria-label="Footer"]').forEach(el => el.remove());
};

// remove the trending section container
const removeTrendingNowSection = () => {
    document.querySelectorAll('section[aria-labelledby="accessible-list-0"]').forEach(section => {
        const heading = section.querySelector('h1');
        if (heading && heading.textContent.trim().includes("Trending now")) {
            section.remove();
        }
    });
};

// remove blue checks lol
const removeVerifiedCheckmarks = () => {
    document.querySelectorAll('svg[aria-label="Verified account"]').forEach(el => el.remove());
};

// annoying css dividers
function removeRemnants() {
    document.querySelectorAll('div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x').forEach(el => el.remove());
    document.querySelector('div.css-175oi2r.r-kemksi.r-1kqtdi0.r-1867qdf.r-1phboty.r-rs99b7.r-1ifxtd0.r-1udh08x > div.css-175oi2r.r-1bro5k0')?.remove();
    document.querySelector('div.css-175oi2r.r-1kqtdi0.r-1867qdf.r-1phboty.r-1ifxtd0.r-1udh08x.r-1niwhzg.r-1yadl64')?.remove();
}


// remove the "Who to follow" sidebar section
const removeWhoToFollowSection = () => {
    document.querySelectorAll('aside[aria-label="Who to follow"]').forEach(el => el.remove());
};


const replaceXWithTwitterBird = () => {
    const xLink = document.querySelector('a[aria-label="X"]');
    if (xLink && !xLink.dataset.replaced) {
        const twitterSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
             width="60" height="60">
          <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162
            c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,
            9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,
            1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,
            1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0,0,0.022,0,0.086
            c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135
            c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104
            C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945
            C39.763,15.197,41.013,13.905,42,12.429"/>
        </svg>
      `;
        xLink.innerHTML = twitterSvg;
        xLink.dataset.replaced = "true";
    }
};

// get rid of stupid x logo and rename back to twitter
const updateFaviconAndTitle = () => {
    const birdSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="40" height="40">
        <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162
        c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,
        33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67
        c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,
        1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0,0,0.022,0,0.086
        c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135
        c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104
        C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945
        C39.763,15.197,41.013,13.905,42,12.429"/>
      </svg>`;

    const svgDataUrl = "data:image/svg+xml," + encodeURIComponent(birdSvg);

    document.querySelectorAll("link[rel*='icon']").forEach(el => el.remove());
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = svgDataUrl;
    document.head.appendChild(link);

    document.title = "demuskified twitter :)";
};

const removeUnwantedElements = () => {
    removeVerifiedCheckmarks();
    removeRemnants();
    removeFooterLinks();
    removeTrendingNowSection();
    removeWhoToFollowSection();
    removeSubscribePremium();
    removeGrokImgGen();
    removeGrokLink();
    removeGrokDrawer();
    replaceXWithTwitterBird();
    removeGrokActions();
    removeVerifiedOrgs();
    removePremium();
    removeCommunities();
    removeJobs();
    removeLists();
    replacePostWithTweet();
    removeWhiteGlowEffect();
    updateFaviconAndTitle();
};

removeUnwantedElements();

const observer = new MutationObserver(() => removeUnwantedElements());
observer.observe(document.body, { childList: true, subtree: true });
