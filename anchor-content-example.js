if ( typeof $content_details === 'undefined' ) {
  var $content_details = {};
}
// @formatter:off
// Start Editing Here - - - - - - - - - - - - - - - - - - - - - - - - - - - -

/** //////////////////////////////////////////////////////////////////////////////
 *
 *
 *    Rename this file to content.js and edit as required.
 *
 *    If using multiple files to organize content, ensure that they are al assigned to the existing object:
 *    ```js
 *    $content_details = Object.assign($content_details, {
 *      // details
 *    });
 *    ```
 *
 * /////////////////////////////////////////////////////////////////////////// */

// ====================================================================
// region Content Details

/**
 * Add the details of your projects / dashboards / collections of pages and so forth here. The keys shall be
 *  used for a `?content=key` parameter in the URL.
 *
 * @type {{"item-name-without-spaces": {markdown: string, title: string}}}
 */
$content_details = Object.assign($content_details, {
  // ----------------------------------------------------------
  // region Dashboard

  'dashboard': {
    title: 'Work Dashboard',
    icon: '',
    markdown: /* language=markdown */ `
## Sub Heading 1
- [Link 1](https://example.com)
- [Link 2](https://example.com)
  - [Link 2.1](https://example.com)
  - [Link 2.2](https://example.com)
  - [Link 2.3](https://example.com)
  - [Link 2.4](https://example.com)

## Sub Heading 2
- [Link 3](https://example.com)
- [Link 4](https://example.com)
- [Link 5](https://example.com)
          `,
  },

  // endregion Dashboard
  // ----------------------------------------------------------

  // ----------------------------------------------------------
  // region Updates

  'backdrop': {
    title: 'Backdrop Updates',
    icon: 'https://backdropcms.org/files/inline-images/Backdrop-Logo-Vertical_0.png',
    markdown: /* language=markdown */ `
## Sub Heading 1
- [Link 1](https://example.com)
- [Link 2](https://example.com)
  - [Link 2.1](https://example.com)
  - [Link 2.2](https://example.com)
  - [Link 2.3](https://example.com)
  - [Link 2.4](https://example.com)

## Sub Heading 2
- [Link 3](https://example.com)
- [Link 4](https://example.com)
- [Link 5](https://example.com)
          `,
  },

  // ----------------------------------------------------------

  'wordpress': {
    title: 'WordPress Updates',
    icon: 'https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png',
    markdown: /* language=markdown */ `
## Sub Heading 1
- [Link 1](https://example.com)
- [Link 2](https://example.com)
  - [Link 2.1](https://example.com)
  - [Link 2.2](https://example.com)
  - [Link 2.3](https://example.com)
  - [Link 2.4](https://example.com)

## Sub Heading 2
- [Link 3](https://example.com)
- [Link 4](https://example.com)
- [Link 5](https://example.com)
          `,
  },

  // endregion Updates
  // ----------------------------------------------------------

  // ----------------------------------------------------------
  // region Projects

  'project1': {
    title: 'Exciting Project!',
    icon: '',
    markdown: /* language=markdown */ `
## Sub Heading 1
- [Link 1](https://example.com)
- [Link 2](https://example.com)
  - [Link 2.1](https://example.com)
  - [Link 2.2](https://example.com)
  - [Link 2.3](https://example.com)
  - [Link 2.4](https://example.com)

## Sub Heading 2
- [Link 3](https://example.com)
- [Link 4](https://example.com)
- [Link 5](https://example.com)

\`\`\`php
  $example = "Example code snippet, showing the escaping";
\`\`\`
          `
  },

  'project2': {
    title: 'Boring Project',
    icon: '',
    markdown: /* language=markdown */ `
## Sub Heading 1
- Oh no a boring project! :(
          `
  },

  // endregion Projects
  // ----------------------------------------------------------

});

// endregion Content Details
// ====================================================================
