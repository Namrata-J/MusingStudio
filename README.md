<p align="center">
  <img src="https://user-images.githubusercontent.com/82696858/184495857-efa1da2a-8768-43ef-be22-9d53159f48b7.png" width="100">
</p>
<h2 align="center">Musing Studio</h2> 

<p align="center">A video library app providing list of songs and albums of different artists and categories.</p>
<p align="center">SPA responsive video player integrated application made using ReactJs.</p>

#### Tech Stack
* ReactJS
* CSS3
* React Router
* Context API
* Mockbee for backend.

#### Features
- Authentication
- Toasts, video listing, Filter functionality
- Playlist/watch later/history management
- Like/unlike functionality

<hr>

## Table Of Contents
1. [Deployment Status](#status)
2. [Screens](#screens)
3. [Social PLatforms](#social)
4. [Contribution Guidlines](#contribution)

<hr>

## Deployment Status<a name="status"></a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/6dca3fac-b054-4a4b-87c4-ed96685bc172/deploy-status)](https://app.netlify.com/sites/musingstudio/deploys)

[Visit site to know more -->](https://docs.netlify.com/monitor-sites/status-badges/?_ga=2.197489321.74730842.1660376495-236702144.1656589951)

<hr>

## Screens<a name="screens"></a>
* Home Page
* Single Video Listing Page
* Video Listing Page
* Playlist Page
* Liked Videos
* Watch Later
* 404 Page
* History
* Authentication Pages
  - SignUp
  - LogIn
  - LogOut
  
#### Home Page
The very front opening of Musing studio comprise of a carousel component.

![image](https://user-images.githubusercontent.com/82696858/183913491-15ebaeb9-8e15-43f2-9941-f2848c6b95d4.png)

Clicking on any slide of carousel would navigate you to the product listing page with the selected carousel category.

Further going down on landing page you would see music categories.
![image](https://user-images.githubusercontent.com/82696858/183913901-23c1e637-1a1e-4626-aadf-5db3f2ab5710.png)

Below it are you artists category.
![image](https://user-images.githubusercontent.com/82696858/183914078-a0b6cd30-4493-41b2-aa3e-1b8a49e20cca.png)

If you click on any one of the categories you will be redirected to the video list page with the selected category.

#### Videos Page(Video Listing Page)
- You would see a video listing page where all the videos are listed.
![image](https://user-images.githubusercontent.com/82696858/183914609-99047a13-0feb-4ede-95e2-8905d96a0208.png)

    ![image](https://user-images.githubusercontent.com/82696858/183916226-e83b4092-dae8-445f-a1d6-f5c538af76f6.png)

- On video Card, you would be able to see call to action button, clicking on it would popup options.<br>
![image](https://user-images.githubusercontent.com/82696858/183916669-94d8619a-9133-4f0a-94d4-3999936df851.png)

 - Those options would contain:
   * Add To Liked - Add to liked videos and could also remove it.<br>
   ![image](https://user-images.githubusercontent.com/82696858/183939016-42719219-a7a5-4ae2-8a23-a5aeded4c286.png)

   * Add To Playlist - When clicked on add to playlist option, it would open the create playlist dialog box.<br>
   ![image](https://user-images.githubusercontent.com/82696858/183939555-ef518bbf-e33b-4821-b9a7-0466c0f2a62c.png)

      - Create as many playlist as you want to.<br>
      ![image](https://user-images.githubusercontent.com/82696858/183939965-e4155a67-1fa6-4887-a03e-b7321f738f9d.png)

      - To add the video in any of playlist that you have click on any of the playlist, and it will add your video in your desired playlist. You would also be able to see the count of videos a particular playlist has.<br>
      ![image](https://user-images.githubusercontent.com/82696858/183940980-199dcb74-a0d2-4a50-875a-934c50f91dc3.png)
    
          ![image](https://user-images.githubusercontent.com/82696858/183941288-1415208d-910e-48e1-8070-ca44562b6e74.png)
      
   * Add To WatchLater - Add or remove from watchlater.<br>
   ![image](https://user-images.githubusercontent.com/82696858/183939171-1c6d9023-386a-4745-9f63-5418442b34a1.png)

#### Playlist Page
![image](https://user-images.githubusercontent.com/82696858/183938740-157b3956-19c3-4737-8009-aa5799d62e3c.png)

![image](https://user-images.githubusercontent.com/82696858/183940824-67ffb7d7-9810-44c9-b383-0ae398cff226.png)

![image](https://user-images.githubusercontent.com/82696858/183941776-dd307c59-a336-4102-96a9-5c8e8c9c2728.png)

- From the navbar, you can navigate to your playlist page where all your playlists would be present.
- On the Playlist Page,
    - You would be able to delete a playlist.
    - You would be able to delete a particular video from a playlist.
    
![image](https://user-images.githubusercontent.com/82696858/183943490-6fdd31ce-d27c-425b-adca-9e50aec5c95c.png)

#### Liked Videos
![image](https://user-images.githubusercontent.com/82696858/183943844-305d450f-7fe5-44f9-9a25-b2e30fad349d.png)

![image](https://user-images.githubusercontent.com/82696858/183944472-3b4991a9-fa9e-4c79-a852-2f5cfeb556bb.png)

You would be able to remove the video from the Liked Videos List.

#### Watch Later
![image](https://user-images.githubusercontent.com/82696858/183944978-fc58d1dd-b7c5-4e64-8b89-394e4cb9c048.png)

![image](https://user-images.githubusercontent.com/82696858/183945185-8382c9a8-86e0-45c4-915f-f12a13474c39.png)

You would be able to remove the video from the Watch Later list.

#### History Page
![image](https://user-images.githubusercontent.com/82696858/183945500-ecc32e7b-948d-4b3e-af53-ab0503ff6011.png)

![image](https://user-images.githubusercontent.com/82696858/183946077-432b4bd8-4116-4b9d-8abf-3794ff75f169.png)

- When you view a particular video that will add it to the history.
- You can delete a particular video from the history.
- You can see a button to "Clear full history" which will clear all the history at once.

#### Single Video Listing Page
Click on any video you want to see, and you will be navigated to the single video listing page.

![image](https://user-images.githubusercontent.com/82696858/183947609-5b240af5-9e8a-451d-8452-5a4ae2181b6e.png)

Click on the play button and it will play the video, and will also add it into your history. On this page you would also be able to see recommendation container, which lists all other similar recommendations.

![image](https://user-images.githubusercontent.com/82696858/183948614-86699daf-c5d0-4618-92ab-0ab4d2687b06.png)

The recommendation card would look something like this<br>
![image](https://user-images.githubusercontent.com/82696858/183949062-0b291d5a-a986-48c8-a3c4-cc09aa4e2143.png)

On clicking the options icon on this recommendation card will popUp the options.<br>
![image](https://user-images.githubusercontent.com/82696858/183949480-1b5fb608-84fb-45b3-bb93-639ba0d025ac.png)

Also take care of fallbacks.
![image](https://user-images.githubusercontent.com/82696858/183953322-744a88df-27c9-42f9-bfcd-c80ff112dcee.png)


#### Authentication Pages
#### SignUp Page
The user would be able to signUp using his/her credentials.
![image](https://user-images.githubusercontent.com/82696858/183950282-709cc8ce-16e9-486a-bb21-0457826ad1db.png)

#### LogIn Page
Login if already have an account or do a guest login.
![image](https://user-images.githubusercontent.com/82696858/183951200-c90c8af8-a6c3-40cf-8acd-d36917f051eb.png)

#### LogOut Page
![image](https://user-images.githubusercontent.com/82696858/183951667-9397e02d-e7e8-4f49-8ef5-454583be8c8b.png)

#### 404 page
Take care of page not found, displays 404 page if route not found.
![image](https://user-images.githubusercontent.com/82696858/183952622-365f6363-275d-409f-aaf1-953ff9b7f728.png)

<hr>

## Connect to us via social platforms<a name="social"></a>
[Twitter](https://twitter.com/muse_the_coder) <br>
[LinkedIn](https://www.linkedin.com/in/namrata-jain-2b6203216/) <br>
[Instagram](https://www.instagram.com/the_dexterous_me/?r=nametag) <br>
[Gmail](mailto: namratajain29001@gmail.com) <br>

<hr>

## Contribution guidlines<a name="contribution"></a>
For contributing to expeditech UI,
1. Clone & Fork the repo.
2. Make a feature branch from dev.
3. Commit and push those changes.
4. Raise the PR(pull request).

