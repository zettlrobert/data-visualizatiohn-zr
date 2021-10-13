# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Thoughts
Originally I wanted to use a visually appealing method to display the data in the json file 'nicely'.
As I was tight on time i decided to make a classic table without a libray but good old recursion.

To Provide the entire allocaitonl.json as context to the Applicaiton is not the most performant solution.
If we had multiple Endpoints and or decided to implement Pagination and more detailed seperation.
A store with the appropriate slices would be better suited.


## Available Scripts

### `yarn start`
### `yarn lint:fix`
### `yarn lint`

## To get all cssClasses referended in the allocaiton.json file:
````
bat allocation.json | grep 'cssClass*' | sed -e 's/^ *//g' -e 's/,//g' | sort --unique -u

returns:
"cssClass": "Allocation"
"cssClass": "blue"
"cssClass": "Classification"
"cssClass": "gray"
"cssClass": "light"
"cssClass": "Ownership"
"cssClass": "Security"
````

