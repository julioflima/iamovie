<p align="center">
	<h1 align="center">
    <span>IA Movie 🎥</span>
  </h1>
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/17098382/133039368-a98cccb1-8f96-46fb-a697-20975d2a4828.png" width="100" alt="Logo">
</p>

## [DEMO!!!](https://iamovie.herokuapp.com/)

https://user-images.githubusercontent.com/17098382/133042338-5358e9e3-2413-45f7-973b-4a2df98528c0.mp4


## Design

<p align="justify">
  The name <strong>IA Movie</strong>, was taken from <strong>Instituto Atlântico</strong> acronym.
</p>
<p align="justify">
  The base of inspiration of design and UX was the example app, sent in spec document.
</p>
<p align="justify">
  Follow in below the majors colors of design.
</p>
<p align="center">
    <img src="https://user-images.githubusercontent.com/17098382/133041108-eddc4887-7934-4a2b-bf7a-df7dedde0370.png" width="400" alt="ai_movie_colors">
</p>


## Getting Started

First, run the development server:
```bash
npm run dev
# or
yarn dev
```

## Hosting

### Backend:

<p align="justify">
  The application is hosted on Heroku.
</p>

### Frontend:

<p align="justify">
  The application is hosted on Heroku.
</p>

##### Docker:

`sudo docker ps`

`sudo docker stop "hash"`

`sudo docker build -t iamovie .`

`docker run -d iamovie`

##### Heroku:

`heroku login`

`heroku container:login`

`heroku container:push web -a iamovie`

`heroku container:release web -a iamovie`

## Back End

<p align="justify">
To not expose the enviroment secrets to call the backend of <a href="https://developers.themoviedb.org/4/getting-started/authorization">TMDB API</a>, was used Serverless Functions that the NextJS provide to use.
<p align="justify">
By this way, every page called is generated on backend, so no "env" is exposed and in case of some call to api happening in frontend gonna be call a Serverless Function available on <strong><i>/api/*</i></strong>.
</p>
<p align="justify">
The <a href="https://nextjs.org/docs/api-routes/introduction">API routes</a> can be accessed on <a href="http://localhost:3000/api/favorites">http://localhost:3000/api/favorites</a>. This endpoint can be edited in <strong><i>pages/api/favorites.ts</i></strong>.
</p>
<p align="justify">
The <strong><i>pages/api</i></strong> directory is mapped to <strong><i>/api/*</i></strong>. Files in this directory are treated as <a href="https://nextjs.org/docs/api-routes/introduction">API routes</a> instead of React pages.
</p>

## Front End

<p align="justify">
The aplication was developed in NextJS using the most possible otimizations tha the NextJS provides, follow in below more. This aplication has a good responsivity, but that part is not completed (just missed the header to be more responsive, in this version was really easy and fast to implement it).
</p>
<p align="justify">
Open <a href="http://localhost:3000">http://localhost:3000</a> with your browser to see the result.
<p align="justify">
</p>
You can start editing the page by modifying <strong><i>pages/index.tsx</i></strong>. The page auto-updates as you edit the file.
</p>

### NextJS:

<p align="justify">
NextJS is the best in now days framework for frontend, it provides the productivity of React with a lot of features that could improve a lot the SEO and by consequence the UX. 
</p>
<p align="justify">
The most tecnologies that it provides that put Next in the top is the native SSG (Static Site Generation), like the old PHP, so the are much less time of rendering, and if you need rerender something you could do because Next is made in the base oc CRA (Create React App). So we can build dynamic pages, being pre-render in build.
</p>
<p align="justify">
 Another technologie that Next provides is the Image and Fonts optimization. 
</p>
<p align="justify">
Is good to quote too the ISR (Incremental Static Regeneration), with this you could generate on build some pages, but you could determine when they gonna be revalidated, and even generate pages tha was not generated on build, buy demand.
</p>


## Bonus
<p align="justify">
During this project I discover a hook created by <strong>Dellean Santos</strong>, that could help me, to update the FavoritesContext without much complexity after add a favorite film to List of Favorites. So was added some configurations to make that possible, parsed the repository to Typescript. Works so good that I decided create a package in NPM. Follow the repository <a href="https://github.com/julioflima/use-fetching">useFetch</a> and the NPM package <a href="https://www.npmjs.com/search?q=use-fetching">useFetching</a>.
</p>
