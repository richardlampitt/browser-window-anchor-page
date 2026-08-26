// /////////////////////////////////////////////////////////////////////////////
// region Configuration

// @formatter:off
// Start Editing Here - - - - - - - - - - - - - - - - - - - - - - - - - - - -

////////////////////////////////////////////////////////////////////////////////
//
//
//    Rename this file to anchor.js and edit as required.
//
//
////////////////////////////////////////////////////////////////////////////////

// ====================================================================
// region Layout

const $layout = {

  /**
   * Enable a grid layout for element (true), or just display as a plain document (false):
   *
   * @type {boolean}
   * @private
   */
  grid: false,
};

// endregion Layout
// ====================================================================

// ====================================================================
// region Assets

const $assets = {
  // ----------------------------------------------------------
  // region Icon

  /**
   * A fallback icon, if needed. Should be a path to an image file.
   *
   * @type {string}
   * @private
   */
  icon_fallback: 'fallback-icon.png',

  /**
   * The path to the icon fallback. Optional. This can be relative or absolute. This value is prepended to
   * the _icon_fallback. No need for a trailing slash.
   *
   * @type {string}
   *
   * @example
   * ```
   * let _font_dir = `C:/wamp64/www/.fonts`;
   * ```
   *
   * @private
   */
  icon_fallback_dir: '',

  // endregion Icon
  // ----------------------------------------------------------

  // ----------------------------------------------------------
  // region Fonts

  /**
   * An array of objects to pull in local font files from elsewhere on your computer.
   *
   * Recommended site for downloading freely available fonts from Google: https://gwfh.mranftl.com/
   * Rename `*-regular` to `*-400` and `*-italic` to `*-400italic` for best results.
   *
   * @property {string}   $font.family       - The name of the font family.
   * @property {string}   $font.filenamebase - The remaining path to the font file(s).
   * @property {string}   $font.format       - The file format of the font file(s). Only supports (and only needs)
   *                                            one format. Mixing different formats will need a separate entry.
   * @property {boolean}  $font.italic       - Add entries for italic font styles, or not.
   * @property {number[]} $font.weights      - An array of font weights to load in.
   *
   * @example
   * ```
   * let _fonts = [
   *   { family: 'Roboto',      filenamebase: 'roboto/roboto-v47-latin_latin-ext-',           format: 'woff2', italic: true,  weights: [ 300, 400, 600 ], },
   *   { family: 'Roboto Mono', filenamebase: 'roboto-mono/roboto-mono-v22-latin-ext_latin-', format: 'woff2', italic: false, weights: [ 400, 600 ], },
   * ]
   * ```
   *
   * @type {[{family: string, filenamebase: string, format: string, italic: boolean, weights: number[]}]}
   *
   * @private
   */
  fonts: [
    // @formatter:off
    { family: 'Roboto',      filenamebase: 'roboto/roboto-v47-latin_latin-ext-',           format: 'woff2', italic: true,  weights: [ 300, 400, 600 ], },
    { family: 'Roboto Mono', filenamebase: 'roboto-mono/roboto-mono-v22-latin-ext_latin-', format: 'woff2', italic: false, weights: [ 400, 600 ], },
    // @formatter:on
  ],

  /**
   * The path to your fonts. This can be relative or absolute. This value is prepended to the filenamebase from
   *  the objects in the _fonts array. No need for a trailing slash.
   *
   * @type {string}
   *
   * @example
   * ```
   * let _font_dir = `C:/wamp64/www/.fonts`;
   * ```
   *
   * @private
   */
  font_dir: `C:/wamp64/www/.fonts`,

  // endregion Fonts
  // ----------------------------------------------------------
};

// endregion Assets
// ====================================================================

// ====================================================================
// region Warning Messages

/**
 * Warning strings used for "error" pages. These don't strictly need to be edited, but are here if required for
 *  translation or taste.
 *
 * @type {{available_contents: string, missing: string, fallback: string}}
 */
let $warnings = {
  // The intro for selecting one of the pre-defined objects above:
  available_contents: `Select one of the available contents:`,

  // Displayed when attempting to access content that doesn't have a defined content parameter key:
  fallback: {
    title   : 'Content Parameter Missing',
    domain_base: '',
    service_id: '',
    markdown: `The \`content\` requested does not exist.\n\n`,
  },

  // Displayed if the parameter key is missing entirely:
  missing: {
    title   : 'No Matching Content',
    domain_base: '',
    service_id: '',
    markdown: `Edit the URL of this page to include a \`content\` parameter, or `, // no linebreaks
  },
};

// endregion Warning Messages
// ====================================================================

// ====================================================================
// region DOM Purify Config

const $dom_purify_config = {
  ADD_TAGS: [ 'img' ],
  ADD_ATTR: [ 'alt', 'src', 'width', 'height' ],
};

// endregion DOM Purify Config
// ====================================================================

// Finish Editing Here - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// compatibility constants:
const _icon_fallback     = $assets.icon_fallback,
      _icon_fallback_dir = $assets.icon_fallback_dir,
      _fonts             = $assets.fonts,
      _font_dir          = $assets.font_dir;

// endregion Configuration
// /////////////////////////////////////////////////////////////////////////////
