# Implementating a Podcast app UI from Figma
In my attempt to learn some CSS and React, I ended up finding this amazing podcast app design by Flowbase on Figma and decided to implement some of the pages in React. 


## UI Design
The UI is written in React and styled with CSS. Along the way, I learned about React CSS modules to deal with class name collisions so some of the pages are using CSS modules. I planned to use TailwindCSS to make it responsive but I'm not sure if I'll have enough energy to do that. 

## Podcast Data
The app serves static podcast data from a redux store. I decided to use the new and shiny Redux Toolkit(https://redux-toolkit.js.org/) library to preserve my sanity. I looked on the internet for a free podcast API but couldn't find any.


## Known Issues
- My implementation of React Router is seriously flawed. From the landing screen, a user can click on a podcast episode to navigate to the details screen with a route which looks like `/podcast/episode/1`. From the detail screen, they are able to select another podcast from the section below it. Clicking on a podcast from this screen appends the route to the existing route `/podcast/episode/1/podcast/episode/5` causing the app to render nothing. 

# Screenshots
## Landing Screen
<img width="1330" alt="Screenshot 2022-05-03 at 15 28 40" src="https://user-images.githubusercontent.com/9197459/166472998-30a7f6c0-6a90-4713-8d68-4000e7c7b987.png">

## About
<img width="1124" alt="Screenshot 2022-05-03 at 15 12 17" src="https://user-images.githubusercontent.com/9197459/166473076-96d220c2-ba75-4224-ae38-52ed72421f40.png">

## Contact
<img width="1120" alt="Screenshot 2022-05-03 at 15 12 32" src="https://user-images.githubusercontent.com/9197459/166473132-d164c0f4-bff9-4e50-ab53-aed15705bbe5.png">

## Podcast List

<img width="1121" alt="Screenshot 2022-05-03 at 15 12 48" src="https://user-images.githubusercontent.com/9197459/166473191-d4f94c9d-8a38-4ed7-baa8-130fed946421.png">

## Podcast Detail
<img width="1325" alt="Screenshot 2022-05-03 at 15 13 08" src="https://user-images.githubusercontent.com/9197459/166473257-8f59c5b4-e358-4bed-a390-ce20f6e0bd01.png">


### Credits
- A very big thank you to Flowbase for creating these amazing figma designs for the community. Check out some of their free community designs from https://www.figma.com/@flowbase.
- The specific figma design I used can be found at: https://www.figma.com/community/file/1093368153627239554
