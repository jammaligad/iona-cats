# IONA Cats

- IONA's coding exercise using ReactJS
- Developed by Juan Alphonso D. Maligad

## How to run

- use node version indicated in `.nvmrc`
- use `yarn` to install packages
- create `.env` file in root folder

```
// below are the required variables that the .env should have
CATS_API_BASE_URL=https://api.thecatapi.com/v1
CATS_API_PRODUCTION_KEY=<insert cats api key here>
SERVER_PORT=5000
FRONTEND_PORT=8080
VITE_BASE_URL=http://127.0.0.1:5000 // since we're using node v18, there's an issue with using localhost for the proxy settings in vite config, using 127.0.0.1 would fix it
```

- run command `yarn dev`

## Technologies

- ReactJS (Typescript)
- `react-router-dom`
- `axios`
- `tailwindcss`

## Developer's Notes

#### Deadline

- Project Start Date: `17-NOV-2023` (Friday)
- Indicated Deadline/Submission: `21-NOV-2023` (Tuesday)

#### Notes

- I decided to create a proxy server under the `server`folder in the root directory, this is where Cat API requests will be handled. In a real dev scenario, I believe this is good as it would hide the necessary production API keys needed for the API requests as suppose to handling the request via client side.

## Instructions

```
1. Create a React app that loads images of cats. There are 2 pages: Homepage and Single Cat Page.

2. The homepage has a select input box where you can choose a breed of cats. Selecting a breed should load images of cats from the API listed under the corresponding breed. Clicking on the "Load more" button should display more images that haven't been loaded yet. Once the images already reach the end of the list, the "Load more" button should disappear. Selecting a different breed should clear the previous images of cats and display a new list of images.

3. Clicking on "View details" under each image should redirect to the Single Cat Page. The Single Cat Page should display the following data: image, breed name, origin, temperament, and description. Clicking "Back" at the top of the Single Cat Page should go back to the homepage with the current breed already selected, therefore, the Homepage should immediately load images of cats under the previously selected breed.

4. The API to use is at https://docs.thecatapi.com/. It is your responsibility to study and figure out the correct endpoints to use. Please, handle any possible API exceptions by notifying the user that fetching has failed. Message as an alert / banner: “Apologies but we could not load new cats for you at this time! Miau!”

5. Commit all code to a public git repository.
```

## Evaluation Criteria

```
1. Does it work according to the specifications?
Your code should support the specifications written above.

2. Effective class, method, comments, and variable names
Names chosen for classes, methods, and variables should effectively convey the purpose and meaning of the named entity. Functions and important parts of the code must be commented.

3. Effective top-down decomposition of algorithms
Code duplication should be avoided by factoring out common code into separate routines.

4. Code layout should be readable and consistent
The layout of your code should be readable and consistent. This means things like placement of curly braces, code indentation, wrapping of long lines, layout of parameter lists, etc.

5. Effective source tree directory structure and separation of concerns
The source code for your project should be effectively organized into subdirectories applying the separation of concerns principle.

6. Effective file organization
Your source code should be effectively organized into multiple files. Lumping all of your code in one or two files is not acceptable.

7. Correct exception handling
Your program should handle exceptions properly as described in the project specification.

8. Source control usage (git)
Commits tell the story. Please, make sure your commits follow good practices, we will read them.
```
