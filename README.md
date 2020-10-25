## Welcome

Thank you for cheking out my project! Here's a short overview of the project.

## JSON

There are 2 JSON files, one for page content and one for card content.
infoForDribbble.json has the content for the navigation and is used in ex. header.js who then feeds it forward to navBarComponent.js.
cardContent.json has the information for the cards in the grid. This is used by cardComponent.

## Components

### buttonComponent.js

This is a basic component that can create buttons with an class ID and name if used correctly. When creating the button use {class ='example'} to set class ID to 'example and {name = 'content'} to set the content of the button to 'content'.

### cardComponent.js

One of the main components for this projects. The CardComponent maps thorugh the items it gets from a JSON and creates the cards in the grid. 

### navComponent and NavBarComponent

navComponent creates a list of items it receives. If not specified it will just create a list, however if receives a True boolean it will create a different class for the list placing it on the right side of the page. This was used for the header, because I needed to get some information strictly on the right side. NavBarComponent is a basic flexcontainer wrapper, not much to see here.

### CSS
There are alof of configruation in the css. When it comes to repsonsiveness to changes it reacts at <750px, <1200px and >1200px. Divs like "header" and "navbar" are changed at <750px by hiding some divs and showing others.
