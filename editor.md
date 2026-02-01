# Editor

Add a ?editor=true to the url to enter editing mode! To make changes, fork the repo and follow the instructions from the original project. 

Important links: 
- [Original project](https://github.com/TeachBooks/Wizard/tree/main)
- [Editor repository](https://github.com/luukfroling/Wizard-jb2) 

## How it works (proof of concept)

- I have hosted a version of the [original project](https://github.com/TeachBooks/Wizard/tree/main) in a [seperate repository](https://github.com/luukfroling/Wizard-jb2), which will take arguments (owner, repo, file) via the URL. 
- Using GH-actions, I add a js file to the build. This js file will add an iframe to the gh-page of the editor. 
- When `?editor` is added to the url, the js file adds the editor. 

this proof of concepts uses an iframe to minimise the changes done to the original project. I did try to add the app directly to Jupyter Book but quickly ran into issues regarding styling etc etc. 

## development

todo