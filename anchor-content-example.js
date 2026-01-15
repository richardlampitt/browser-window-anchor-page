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
 *    If using multiple files to organize content, ensure that they are all assigned to the existing object:
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
  // @formatter:off

  // ----------------------------------------------------------
  // region Dashboard
  // ----------------------------------------------------------
  'dashboard': {
    title: 'Example Dashboard',
    icon: '', // an image URL can go here

    // Note:
    //  - The markdown *deliberately* does not have any indents; these would get parsed as a code block.

    markdown: /* language=markdown */ `
      
Tasks
------------
- [Thing 1](#)
- [Thing 2](#)
- [Thing 3](#)
  - [Thing 3.1](#)
  - [Thing 3.2](#)
  - [Thing No URL]()
  - [Thing No URL]()
- [Thing 4](#)

Google Docs / Sheets
------------
- [Mood Sheet](#)
- [Notes](#)
- [Development Standards](#)

Drive
------------
- [Dev Folder](#)

Code Block Examples
------------
        If items are indented, they  
        get parsed as code.

        May or may not be useful, but
        this caught me out at first
        so I'm noting it for you here

To use backtick formatting, you'll need to escape them first: 

\`\`\`php
  $example = "Example code snippet, showing the escaping";
\`\`\`

Tools
------------
- [Webmail](#)

Music
------------
- [Asteconn](https://soundcloud.com/asteconn)
- [Ambient](https://www.youtube.com/@Futurescapes-SciFiAmbience)

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
