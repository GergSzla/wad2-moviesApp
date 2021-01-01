# Web App Development Assignment 1 
## ReactJS
BSc (Hons) Software Systems Development,
Gergo Szilagyi,
20079738

# Web App
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

# Testing
## Cypress Testing (E2E)
### Automated UI Tests
- cypress/
  - integration/..
    - account.spec.js `(test for account page)`
    - discTVShows.spec.js `(test for discover shows page)`
    - discUpcomingMovs.spec.js `(test for discover movies page)`
    - favTVShows.spec.js `(test for favorite shows page)`
    - followingPersons.spec.js `(test for followed actors page)`
    - home-page.spec.js `(test for home (discover movies) page)`
    - logreg-spec.js `(test for login/register page)`
    - movieDetails-page.spec.js `(test for movie details page)`
    - personsDetails.spec.js `(test for actor details page)`
    - tvShowDetails.spec.js `(test for show details page)`
    - trendingMovies.spec.js `(test for trending movies page)`
    - trendingPersons.spec.js `(test for trending actors page)`
    - trendingTVShows.spec.js `(test for trending shows page)`
    - viewReview.js `(test for viewing reviews 

### Custom Commands
- cypress/
    - support/
       - commands.js/...
            - register() `Registers Test User`
            - incorrect_pass_register() `tests registration errors`
            - logout() `Logout Test User`
            - incorrect_login() `Test Login Errors`
            - login() `Login Test User`

### [Cypress Dashboard](https://dashboard.cypress.io/projects/cjwgj1/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D "Cypress Dashboard")
![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609525434/WAD%201/Capture.png)
>As shown in the screenshot above, the part marked in red, the test failed because the app was running the tests in the wrong order. After making changes to `cypress.json`, the test passed. The updated cypress.json is shown below. 
```json
{
    "baseUrl": "http://localhost:3000/",
    "projectId": "cjwgj1",
    "testFiles": [
        "logreg-spec.js",
        "account.spec.js",
        "discTVShows.spec.js",
        "discUpcomingMovs.spec.js",
        "favTVShows.spec.js",
        "followingPersons.spec.js",
        "home-page.spec.js",
        "movieDetails-page.spec.js",
        "personDetails.spec.js",
        "tvShowDetails.spec.js",
        "trendingMovies.spec.js",
        "trendingPersons.spec.js",
        "trendingTVShows.spec.js",
        "viewReview.spec.js"
      ]
}
```


![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609525369/WAD%201/Screenshot_2021-01-01_wad2-moviesApp1.png)![](https://res.cloudinary.com/dkdptqakb/image/upload/v1609525369/WAD%201/Screenshot_2021-01-01_wad2-moviesApp.png)
>The successful test is shown above in the two additional screenshots.

## Gitlab
Gitlab repo link can be found in the section below.

## Links
- [Github](https://github.com/GergSzla/wad2-moviesApp)
- [GitLab](https://gitlab.com/GergSzla/moviesapp-ci)
- [Cypress Dashboard](https://dashboard.cypress.io/projects/cjwgj1/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D)
- [YouTube](https://youtu.be/slmw-jArWeM)

## References
### Firebase
- https://www.npmjs.com/package/firebase
- https://stackoverflow.com/questions/64191896/usestate-in-useeffect-does-not-update-state
- https://stackoverflow.com/questions/62211434/firebase-react-read-document-in-auth-state-changed-and-add-it-to-context
- https://firebase.google.com/docs/web/setup#available-libraries

### Priv Routing
- https://codedaily.io/tutorials/49/create-a-protectedroute-for-logged-in-users-with-route-redirect-and-a-render-prop-in-react-router




