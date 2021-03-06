# Component Hierarchy

* `Root`
    * `App`
        * `NavBar`
        * `MainPage`
        * `Footer`

**Note**: All other components are rendered inside of `MainPage`

***
## Users

* Users Show Page
    * Routes
        * `/users/:userId`
    * Components
        * `UserShowContainer`
        * `UserShow`
    * State
      * `users[:id]`, `photos`, `albums`, `favorites`
* Users Form Page
    * Routes
        * `/signup`
        * `/users/:userId/edit`
    * Components
        * `UserFormContainer`
            * `UserNew`
            * `UserEdit`
    * State
        *`users[:id]`
***
## Photos

* Photos Index Page
    * Routes
        * `/`
        * `/photos`
    * Components
        * `PhotoIndexContainer`
        * `PhotoIndex`
        * `PhotoIndexItem`
    * State
        * `photos[:id]`, `users[:id]`, `ui`
* Photo Show Page
    * Routes
        * `/photos/:photoId`
    * Components
        * `PhotoShowContainer`
        * `PhotoShow`
        * `Comments`
        * `Tags`
    * State
        * `photos[:id]`, `users[:id]`, `comments[:id]`, `tags[:id]`
* New Photo Page
    * Routes
        * `/photos/new`
    * Components
        * `NewPhotoForm`
        * `NewPhotoContainer`
    * State
        * `errors`
***
## Albums

* Album Index
    * Routes
        * `/users/:userId/albums`
    * Components
        * `AlbumIndexContainer`
        * `AlbumIndex`
        * `AlbumIndexItem`
    * State
        * `album[:id]`, `users[:id]`, ui
* Album Show
    * Routes
        * `/albums/:albumId`
    * Components
        * `AlbumShowContainer`
        * `AlbumShow`
    * State
        `album[:id]`, `photos`, `users[:id]`, `ui`
* Album New
    * Routes
        * `/albums/new`
    * Components
        * `AlbumNewContainer`
        * `AlbumNew`
    * State
        * `errors`
***
## NavBar

* `NavBar`
    * `Components`
        * `SessionButtonsContainer`
            * `SessionButtons`
        * `UserNavContainer`
            * `UserNav`
    * State: `session`

***
## Tags
* Tag Show
    * Routes
        * `/tags/tagId`
    * Components
        * `TagShowContainer`
        * `TagShow`
    * State
        * `tags[:id]`, `photos`
***
## Session
* Session
    * Routes
        * `/login`
        * `/signup`
    * Components
        * `NewSessionContainer`
        * `NewSession`
    * State
        * `errors`
