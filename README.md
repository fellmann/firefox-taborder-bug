# Example Repo to demonstrate firefox tab bug

Find example at https://test.hanno-fellmann.de/firefox-tab-bug

## How to reproduce

- Open https://test.hanno-fellmann.de/firefox-tab-bug in Firefox
- Click on the first input in the second row
- Press tab
- The focus jumps to the first input in the first row. Expected: The focus should jump to the second input in the second row.
- Going back and forth between the inputs works as expected