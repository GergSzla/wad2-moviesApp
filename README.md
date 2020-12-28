# Web App Development Assignment 1 
## ReactJS
BSc (Hons) Software Systems Development,
Gergo Szilagyi,
20079738
## Features
-	Discover Movies Page
-	Discover TV Shows Page
-	Upcoming Movies Page
-	Trending Movies Page
-	Trending TV Shows Page
-	Trending Actors Page
-	Favourite Movies Page
-	Favourite TV Shows Page
-	Followed Actors Page
-   Firebase Authentication for Login / Registration
- Account Page



## APIs Used
- https://api.themoviedb.org/3/discover/movie (Get Movies)
- https://api.themoviedb.org/3/trending/person (Get Trending Actors)
- https://api.themoviedb.org/3/discover/tv (Get TV Shows)
- https://api.themoviedb.org/3/movie/${id} (Get Specific Movie)
- https://api.themoviedb.org/3/person/${id} (Get Specifc Actor)
- https://api.themoviedb.org/3/genre/movie/list (Get Genres)
- https://api.themoviedb.org/3/tv/${id} (Get Specific TV Show)
- https://api.themoviedb.org/3/movie/${id}/reviews (Get Specific Movie's Reviews)
- https://api.themoviedb.org/3/tv/${id}/reviews (Get Specific TV Show's Reviews)
- https://api.themoviedb.org/3/movie/upcoming (Get Upcoming Movies)
- https://api.themoviedb.org/3/trending/movie (Get Trending Movies)
- https://api.themoviedb.org/3/trending/tv (Get Trending TV Shows)
- https://api.themoviedb.org/3/tv/${tv_id}/season/${season_number} (Get specific TV show's specific season)

## App
### Login / Register
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101787/WAD%201/Screenshot_2020-12-27_React_App.png)
>The login and registration which are located on the same page, uses Firebase Authentication to sign in users. Users can use the small registration form on the right side to create an account, then proceed to use the form on the left side to sign in.

### Account
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101787/WAD%201/Screenshot_2020-12-27_React_App1.png)
>The account page shows the user's details and also allows the user to sign out.

### Upcoming Movies
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609104113/WAD%201/3.png)
>This page shows twenty upcoming movies.

### Discover Movies
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609104031/WAD%201/1.png)
>This page shows twenty movies for the user to discover.

### Discover TV Shows
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609104030/WAD%201/2.png)
>This page shows twenty TV Shows for the user to discover.

### Trending Movies
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609104502/WAD%201/4.png)
>This page shows twenty currently trending movies for the user.

### Trending TV Show
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609104505/WAD%201/5.png)
>This page shows currently Trending TV Shows 

### Trending Actors
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609104503/WAD%201/6.png)
>This page shows currently Trending Actors

### Favourite Movies
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609107323/WAD%201/7.png)
>The user has the ability to add movies to favourites. They're listed on this page.

### Favourite TV Shows
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609107329/WAD%201/Capture8.png)
>The user has the ability to add shows to favourites. They're listed on this page.

### Followed Actors
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609107329/WAD%201/actors.png)
>The user has the ability to follow actors. Followed actors are listed on this page.

## Pages
### Movie Pages
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609107623/WAD%201/newmoviecard.png)
>Every movie has a page with the necessary information displayed. Movie pages show details such as Overview, budget, length, release date, genre etc. 

### TV Show Pages
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609107624/WAD%201/newtvshowcard.png)
>Every show has a page with the necessary information displayed. TV Show pages show details such as Overview, first air date, languages spoken, the series' status, popularity etc. and even lists all of the series' season which can also be viewed.

### Season Pages
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609104996/WAD%201/11.png)
>Seasons can be viewed by clicking them within the TV Show details page. Season pages display and overview, air date and all of the season's episodes in a table.

### Actor Pages
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609107623/WAD%201/newactorcard.png)
>Every actor has a page with the necessary information displayed. Actor pages show details such as Biography, birthday, gender,popularity, place of birth, and other names they may be know by.

## Cards
### Movie Cards
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101797/WAD%201/Screenshot_2020-12-27_React_App11.png)
>Movie Cards show release date and rating.

### TV Show Cards
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101796/WAD%201/Screenshot_2020-12-27_React_App12.png)
>TV Show Cards show first air date and rating.

### Season Cards
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101785/WAD%201/Screenshot_2020-12-27_React_App14.png)
>Seasons Cards show first air date and number of episodes.

### Actor Cards
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101784/WAD%201/Screenshot_2020-12-27_React_App13.png)
>Seasons Cards show first air date and number of episodes.

## Reviews
### Page Detail Review
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101784/WAD%201/Screenshot_2020-12-27_React_App19.png)
>Short Reviews can be viewed within the details page for either show or movie within a table view

### Full Review
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101788/WAD%201/Screenshot_2020-12-27_React_App20.png)
>To view the full review, the user should click "Full Review" which opens up a new page with a button asking the user to show review.

![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101788/WAD%201/Screenshot_2020-12-27_React_App21.png)
>After clicking the button, a modal or popup will show the full review.

### Write Review
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609101788/WAD%201/Screenshot_2020-12-27_React_App22.png)
>Reviews can be written using the form provided.

## References
### Firebase
- https://www.npmjs.com/package/firebase
- https://stackoverflow.com/questions/64191896/usestate-in-useeffect-does-not-update-state
- https://stackoverflow.com/questions/62211434/firebase-react-read-document-in-auth-state-changed-and-add-it-to-context
- https://firebase.google.com/docs/web/setup#available-libraries

### Priv Routing
- https://codedaily.io/tutorials/49/create-a-protectedroute-for-logged-in-users-with-route-redirect-and-a-render-prop-in-react-router




