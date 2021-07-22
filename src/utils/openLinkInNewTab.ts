// https://stackoverflow.com/a/63627688
function openLinkInNewTab(url: string) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}

export default openLinkInNewTab;
