# Site update backlog :

- **2024-11-09** :
  - Fixed navbar (renamed sections, fixed missing pages).
  - Added a new kagami macro **HTML_NEWEST_CONTENT** :
    - Macro parses markdown pages for each subsection (notes/programming blogs) and generates a global HTML list for 5 newest posts (sorted by creation date).
  - Added **Useful links/friends** page.
  - Added **Site updates** page.
  - Found bug in kagami's automatic index generation :
    - The current implementation of md_index() appears to have a bug where the generated list of markdown files in the index page of a folder has a raw crtime value appended to each list item instead of a human-readable date. Opened an [issue](https://github.com/microsounds/kagami/issues/3), if the creator doesn't fix it, i'll make my own kagami branch with a hotfix.
- **2024-06-xx** :
  - Initial website startup.