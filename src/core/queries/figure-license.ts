/** Published license texts for figure assets; unknown names remain plain text. */
export function figureLicenseUrl(license: string): string | undefined {
  switch (license) {
    case 'CC BY 4.0':
      return 'https://creativecommons.org/licenses/by/4.0/';
    case 'MIT':
      return 'https://spdx.org/licenses/MIT.html';
    case 'Apache-2.0':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    default:
      return undefined;
  }
}
