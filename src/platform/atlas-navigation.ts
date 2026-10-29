export function rememberMap(search: string): void {
  try {
    sessionStorage.setItem('atlas:return', `${location.pathname}${search}`);
  } catch {
    // Reading and navigation remain available without storage.
  }
}

export function updateMapUrl(search: string, remember = true): void {
  if (location.search !== search) history.pushState(null, '', `${location.pathname}${search}`);
  if (remember) rememberMap(search);
}

export function markMapNavigation(): void {
  try {
    sessionStorage.setItem('atlas:from-map', '1');
  } catch {
    // The static return link remains usable without storage.
  }
}
