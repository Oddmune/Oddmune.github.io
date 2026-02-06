---
title: "Cocktail Hour"
image: "https://imported-rubidium-c25.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf426fa9-315c-4c07-b8cd-92ef2da301ff%2Fa1e92aa5-930b-49e7-8b7a-ba250b2f693b%2F%25EC%258B%259C%25EC%259E%2591%25ED%2599%2594%25EB%25A9%25B4_%25EB%25B0%25B0%25EA%25B2%25BD-01-01.jpg?table=block&id=e4b9f7b2-e26b-431c-a93d-dc04beceef03&spaceId=df426fa9-315c-4c07-b8cd-92ef2da301ff&width=2000&userId=&cache=v2"
layout: project
subtitle: Tycoon game balancing humor, pacing, and economy.
featured: true
category: game
role: Lead Game Designer
team: Team of 5
engine: Pygame
type: Student project
genre: 2D Tycoon
platforms: Python 3+
duration: Sep 1, 2023 to Nov 30, 2023 (91 days)
status: Completed
tools: ["Python", "Pygame"]
focus: [Gameplay Systems, Technical Design]
---

<div class="video-embed">\n  <iframe src="https://www.youtube.com/embed/bPCbSQJAFus" title="Cocktail Hour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>\n</div>

<div class="slideshow-container">
  <div class="slides-wrapper">
    <div class="slide"><img src="https://imported-rubidium-c25.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf426fa9-315c-4c07-b8cd-92ef2da301ff%2Fb92a5799-b240-4831-8a13-ae9dd08893de%2F%25ED%258F%25AC%25EC%258A%25A4%25ED%2584%25B0.png?table=block&id=54e34bc0-318f-4976-af50-622c00bce02d&spaceId=df426fa9-315c-4c07-b8cd-92ef2da301ff&width=1420&userId=&cache=v2" alt="Cocktail Hour"></div>
    <div class="slide"><img src="/assets/images/cocktail_hour_exhibition_preparation_0.jpg" alt="Cocktail Hour Exhibition Preparation 0"></div>
    <div class="slide"><img src="/assets/images/cocktail_hour_exhibition_preparation_1.jpg" alt="Cocktail Hour Exhibition Preparation 1"></div>
    <div class="slide"><img src="/assets/images/cocktail_hour_exhibition_preparation_2.jpg" alt="Cocktail Hour Exhibition Preparation 2"></div>
    <div class="slide"><img src="/assets/images/cocktail_hour_exhibition_preparation_3.jpg" alt="Cocktail Hour Exhibition Preparation 3"></div>
    <div class="slide"><img src="/assets/images/cocktail_hour_exhibition_0.jpg" alt="Cocktail Hour Exhibition 0"></div>
    <div class="slide"><img src="/assets/images/cocktail_hour_exhibition_1.jpg" alt="Cocktail Hour Exhibition 1"></div>
    <div class="slide"><img src="/assets/images/cocktail_hour_exhibition_2.jpg" alt="Cocktail Hour Exhibition 2"></div>
    <div class="slide"><img src="/assets/images/cocktail_hour_exhibition_3.jpg" alt="Cocktail Hour Exhibition 3"></div>
  </div>
</div>

<style>
  .slideshow-container {
    max-width: 600px;
    width: 100%;
    position: relative;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    aspect-ratio: 523 / 651; /* Maintain a proper aspect ratio */
    background-color: black; /* Prevents white flashes */
  }

  .slides-wrapper {
    display: flex;
    transition: transform 1s ease-in-out;
    width: 100%;
  }

  .slide {
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slide img {
    max-width: 100%;
    height: auto; /* Keeps aspect ratio */
    object-fit: contain; /* Ensures the image fits properly */
  }
</style>

<script>
  let slideIndex = 0;
  function showSlides() {
    let slidesWrapper = document.querySelector(".slides-wrapper");
    let totalSlides = document.querySelectorAll(".slide").length;

    slideIndex++;
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }

    slidesWrapper.style.transform = `translateX(${-slideIndex * 100}%)`;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
  }

  document.addEventListener("DOMContentLoaded", showSlides);
</script>

## Overview

"I`'ll have a martini, please! But hold the vermouth."

In the year 5033, at the space station Moonshine Station. As interplanetary travel becomes more convenient, space travel has become part of everyday life. The small cocktail bar "Cocktail Hour," located in Moonshine Station, has become a resting place for weary travelers from various planets. The bar is run by the protagonist's parents. After a long time, the protagonist heads back to their hometown, Moonshine Station. However, the parents suddenly leave, saying they are going on a space trip and leaving only a note asking the protagonist to take care of the bar. Will the protagonist be able to successfully run the cocktail bar?

* Genre: 2D Tycoon
* Type of project: Student project (for the course "Game Design")
* Engine: Pygame
* Supported platforms: Python 3+
* Schedule: September 1, 2023 &rarr; November 30, 2023 (91 days)
* Team/solo: Team of five
* Status: Completed
* Role: Leader, Game Designer

## Responsibilities

## Design Goals

* Design a humorous tycoon game

## Highlights / Major Contributions

* Lead Game Design
  * I did all the design work except worldbuilding and narrative design
  * Tycoon rules, systems
    * Defined the parameters that determines each customers' cocktail tastes, cocktail ingredients
    * Designed the rating system with the game programmer
  * Gameplay mechanics

## Major Challenges

* How to run a game team
  * Lack of game dev experiences of the team members
  * How to communicate with different roles (designers to programmers, etc.)
    * It was especially challenging for me as a designer to communicate with the artists
      * Artists was not used to 2D sprites, so the no one understood the concept of "number of pixels per block", spritesheets for animations
  * How to deal with file extensions

## Possible Improvements

* There were too many artists
  * I learned that the structure of a team is very important
* Scheduling problem
  * The goal and the design we set was too much for a single semester project based on the fact that this was the first time creating a game for most of us 
* UI design
* Utilizing the con-world
  * The world we built was very attractive, but the game has failed to convey that immersion properly



## Outcomes

* Completed student project

## Design Artifacts

* Exhibition preparation and showcase photos (images above)





