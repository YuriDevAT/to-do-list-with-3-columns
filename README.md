# To-do-list

Live view:  [![Netlify Status](https://api.netlify.com/api/v1/badges/f9a7f8d3-58ca-44ed-a038-ae8d2efd31a5/deploy-status)](https://yuridevat-react-todo-list.netlify.app/)

## Description

The **To-do-list** was created with Reactjs and styled with TailwindCSS (mobile first).
As a user, you can add tasks, check them as done and delete them. A sorting function gives the user the possibility to change the task view between all, done or undone tasks. The tasks will be stored in local storage (This means, that after refreshing the page, your data is still there).

## Homescreen To Do List

![App screen](https://github.com/YuriDevAT/React-ToDoList/blob/master/final-app.PNG)

## How it works

I started the project by creating a new repository with **create-react-app**. I installed TailwindCSS by following the description of [the official documentation](https://tailwindcss.com/docs/guides/create-react-app). In addition to the already existing component App I created a folder called components with three extra components, called **Form**, **ToDoList** (which acts as a parent component for the ToDo), and **ToDo**. Let's take a closer look on the code in the different components:

### App
Since there is input which also get changed, the hook `useState` will be used. All `const` where the hook is used were created in the App component. To get access to all of them, they were passed down in the particular component. Instead of using `props` I add the `const` within `{}` in the function of each component to have immediate access without writing `props`.

### Form
`...todos` means, that when something is in the list/array, just spread it. 

![Spread operator]()

To use `select` and show "all", or just "completed" / "uncompleted" tasks, two states are needed. The original state should not be touched, instead the filtered state should show its selected todos. `useEffect` is needed here. It allows to run a function every time a piece changes. By adding a value, the function runs again. 

### ToDoList & ToDo
`filtered.map` means, that there is access now to each todo: for each todo from the state that exists, it will be rendered out a `todo` component. To be able to delete a taks, every todo has to have an **id** or **unique key**.

![Unique key]()
