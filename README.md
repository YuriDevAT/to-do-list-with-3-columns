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
Since there is input which also get changed, the hook `useState` will be used. All `const` where the hook is used were created in the App component. To get access to all of them, they were passed down in the particular component.

### Form


### ToDoList


### ToDo


## How to use it


