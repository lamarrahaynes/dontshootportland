# Directions for viewing this website while it is in progress

You will require [git](https://git-scm.com/) to grab the code in this repository and you will require [node](https://nodejs.org/en/download/) to view the website locally.

To get the contents of this repository on your computer run these commands

```
git clone https://github.com/lamarrahaynes/dontshootportland
cd dontshootportland
```
This will copy the repository to your computer and then move you into the project's root directory.  You can update your version of the project with what is on the web by typing
```
git pull
```
at any later time.

You can now use node to view the website.  Node has a handy program called the node package manager (npm).  There are some commands that use npm that you will need to use.  Each time you pull the latest version of the project you should check for new project dependencies.  To do this run
```
npm install
```

Then you can run

```
npm start
```
to view the latest build.  Running this last command will cause the website to appear at localhost:3000 in your browser.

#Website specifications

These notes reflect the latest vision for the structure of the site and the resources that are still needed.

## All page layout

This is the content that will appear on every page
 - logo
 - nav bar across top
 - (content)
 - social media links at bottom

## Home page

 - large image
 - call to action (mission statement)
 - (eventually link to upcoming events?)
 - link to the about page

## About

 - large image
 - blocks of text (origins, future plan)
 - link to blog

## Blog

There will be several stories here.  I will set this up so that it will be updated each time a new page is added to the blog-posts directory.
 - list of images with snippet and button to show full post/hide full
 - (eventually link to photo gallery)

## Upcoming events (eventually)
 - list of images with event details

## Needed resources
 - logo
 - main image
 - about image
 - statements
  - call to action
  - origins
  - future plans
  - blog posts (image and text)
