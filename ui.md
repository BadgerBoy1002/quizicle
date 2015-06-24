# ui

## `ui.setTitle(title);`
sets the title to `title`

## `ui.reset(title = undefined);`
sets the title to `title` and empties content

## `ui.alert(content, title = undefined, button = undefined, callback = undefined);`
sets the content to `content` and title to `title`. if button is defined, add a button with that text. calls callback on button press (if button present) or on load

## `ui.ask(questions, callback, title = undefined, button = "Submit");`
asks the user the questions in the map (or array) of strings, `questions`. takes `callback` of form `function (answers);` where `answers` is a map defined with keys as `questions`. also, sets title to `title` and the button text to `button`

## `ui.confirm(title, content, callback);`
sets the content to `content` and title to `title`. adds two buttons, `"Yes"` and `"No"`. takes `callback` of form `function (bool);` where `bool` is a boolean, meaning `"Yes"` or `"No"`.
