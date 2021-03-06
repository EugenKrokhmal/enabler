export function getLineNumberByHTMLSegment($elem: any, template: string): number {
  const start = $elem.startIndex;
  const lineNumber = template.substr(0, start).split('\n').length;

  return lineNumber;
}

export function _ecranizeForRegexp(strToEcranize: string): string {
  return strToEcranize.replace(/-/g, '\\-');
}

export function getDuplicateAttributes($elem: any, content: string) {
  const dom = $elem.get(0);
  const start = dom.startIndex;
  const end = dom.children.length
    ? dom.children[0].startIndex
    : dom.endIndex + 1;
  const html = content.slice(start, end);

  return Object.keys(dom.attribs)
    .map(attr => {
      let regexp;
      const attrForRegexp = _ecranizeForRegexp(attr);

      try {
        regexp = new RegExp(`\\s${attrForRegexp}="(.*?)"`, 'gi');
      } catch (ex) {
        console.log(ex);
        console.log(html);
      }
      const matched = html.match(regexp as any);

      return matched !== null && matched.length > 1 ? attr : null;
    })
    .filter(Boolean);
}

export function hasAttribute($elem: any, attrs: string[]): boolean {
  const attributes = $elem.attr();

  return attrs.some((attr: string) => attr in attributes);
}

export function getAttrValue($elem: any, attrs: string[]): string {
  const filledAttrs = attrs.filter(attr => $elem.attr(attr));

  return filledAttrs.length ? $elem.attr(filledAttrs[0]) : '';
}

export function isAngular(): boolean {
  return (global as any).framework === 'angular';
}

export function isVue(): boolean {
  return (global as any).framework === 'vue';
}

export function getFrameworkName(): string {
  return (global as any).framework;
}
