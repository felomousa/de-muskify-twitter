// function to remove any element with data-testid "GrokDrawer"
const removeGrokDrawer = () => {
    document.querySelectorAll('[data-testid="GrokDrawer"]').forEach(el => el.remove());
};

removeGrokDrawer();

const observer = new MutationObserver(() => removeGrokDrawer());
observer.observe(document.body, { childList: true, subtree: true });
