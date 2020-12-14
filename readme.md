# Hit Parade in React

 Challenge: create a hit parade. We don't have an API to fetch but you need to create it on your own.

![homepage](./assets/homepage-popular-song.png)
![homepage](./assets/styles.png)
![homepage](./assets/styles/stylename.png)
![homepage](./assets/lyrics.png)
![homepage](./assets/add.png)
![homepage](./assets/cart.png)


 ### Tasks
 - There is already songs rendering in the list by default.
 - In the homepage I can see that list of songs. Path `"/"`
 - I should can add a new song.
 - I should can see the list of song that has been cart.
 - I should can update upvote and downvote.
 - I should can change the list item into cart and I should be able to remove it from cart.
 - Show the song lyrics when I click the three dots.
 - I can favourite any song I want.
 - When I add more song in the cart I can see the total price for them.
 - This is the process when the user buy the song by clicking the buy button. The `textContent` of the button should change into `In process`. After a while , the textContent should be back to what it was before and the cart list should be empty.
- I save it in local storage so that I can see where I have left before

 ### Instructions : 
 - I code this hit parade with react, react-router and context!
 - Create my own local json file to store the data

 ### Routes (path) : 

- / : Hit parade route, where you’re showing a list of songs, sorted by their popularity. You can inscrease or decrease the votes by clicking the icons. You can also favorite a song by clicking the heart icon. There is also a possibility to add a song to the cart. If you click on the three dots, you’ll be redirected to the song’s page, with the lyrics.

- /styles : It’s a page that shows the list of possible styles a song can have. Those styles of music are hardcoded, you don’t need to generate them dynamically.

- /styles/:styleName : it’s a page that lists all the songs from a specific style. If you click on a song, it will take you to the specific song page.

- /song/:songId : it’s a page that shows a specific song, and also the lyrics of a song

- /add : page with a form to add a song to the song catalog

- /cart: page where all the songs you added to your cart, appears. You can delete one from the list if you changed your mind. You can see the total of your cart value, and you can submit the order once you’re ready! (it should just show the complete price on the console)


**Design**: https://www.figma.com/file/Nab1pgPVU2dciFofy4AOEe/Hit-Parade?node-id=0%3A1

**Icon** : https://remixicon.com/

Since I use remic icon I need to add this link in my html file: `<link href="https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css" rel="stylesheet">` to get access to the icon.

**Demo** : https://hit-parade-noeline.netlify.app/


 ## Get started:

- Create a new repo or if you want to clone this [repo](https://github.com/vakodrazan/hit-parade-react)
- `npm init` to install package or if you had clone it you don't need to these three steps but instead `npm install` then run it.
- `npm install react react-dom` to install react.
- `npm react-router-dom` to get access to the Link and the router.
- Run `parcel index.html` or `npm start`
- Don't forget to add the browser list to avoid generator runtime.
