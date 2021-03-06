import { getAttrValue } from '../utils';
import Validator from '../validator';

export default function noPositiveTabindex($: any,content: string) {
  return new Validator({
    $template: $,
    content,
    selectors: '*',
    assocAttrs: ['tabindex'],
    isInvalid: ($elem: any, attrs?: string[], events?: string[]) => {
      const tabIndex = attrs ? getAttrValue($elem, attrs) : '';

      return Number(tabIndex) > 0;
    },
    warningMessage: 'Avoid positive tabindex.'
  });
}
