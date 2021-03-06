import ariaUnsupportedElements from './aria-unsupported-elements';
import clickWithKeyboardEvent from './click-with-key-event';
import controlsFormWrapped from './controls-form-wrapped';
import hasAlt from './has-alt';
import headingHasContent from './heading-has-content';
import htmlHasLang from './html-has-lang';
import labelHasFor from './label-has-for';
import linksHasUrl from './links-has-url';
import mouseEventsWithoutKeyEvents from './mouseevents-without-keyevents';
import noAudioAutoplay from './no-audio-autoplay';
import noDuplicatedAttributes from './no-duplicated-attributes';
import empty from './no-empty-links-and-buttons';
import noFormattingTags from './no-formatting-tags';
import noJumpingHeaders from './no-jumping-headers';
import noPositiveTabindex from './no-positive-tabindex';
import pageHasTitle from './page-has-title';
import placeholderHasLabel from './placeholder-has-label';
import tabElementsHasRightRoles from './tab-elements-has-right-roles';
import textInputHasLabel from './text-input-has-label';
import unclickableWithoutRole from './unclickable-without-role';

export default {
  noJumpingHeaders,
  noFormattingTags,
  hasAlt,
  empty,
  placeholderHasLabel,
  htmlHasLang,
  mouseEventsWithoutKeyEvents,
  headingHasContent,
  clickWithKeyboardEvent,
  ariaUnsupportedElements,
  noAudioAutoplay,
  pageHasTitle,
  noDuplicatedAttributes,
  unclickableWithoutRole,
  noPositiveTabindex,
  labelHasFor,
  linksHasUrl,
  controlsFormWrapped,
  tabElementsHasRightRoles,
  textInputHasLabel,
};
