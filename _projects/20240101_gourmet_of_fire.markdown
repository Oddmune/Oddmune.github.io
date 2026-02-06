---
title: "Gourmet of Fire"
image: "/assets/images/gourmet_of_fire.png"
layout: project
subtitle: Cooking-first adventure where system depth drives the fantasy.
featured: true
category: game
role: Game Designer / Programmer
team: Team of 2
engine: Unity
type: Graduation project
genre: 2D top-down cooking adventure
platforms: Windows / HTML
duration: Jan 1, 2024 to Nov 15, 2024 (320 days)
status: Finished prototype
tools: ["Unity", "C#"]
focus: [Technical Design, Gameplay Systems, Level Design]
---

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/W7AT3YjdtvY" title="Gourmet of Fire" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p>

* [Link to the game](https://odd-mune.itch.io/gourmet-of-fire)
* [Instagram](https://www.instagram.com/gourmet_of_fire)
* [Devlogs](https://savory-postage-c8f.notion.site/Gourmet-of-Fire-09430cb0422e4ee8bebb1ec8d10c4811?pvs=24)

<div class="slideshow-container">
  <div class="slides-wrapper">
    <div class="slide"><img src="/assets/images/gourmet_of_fire.png" alt="Gourmet of Fire"></div>
    <div class="slide"><img src="/assets/images/gourmet_of_fire_cooking_ui.jpg" alt="Cooking UI"></div>
    <div class="slide"><img src="/assets/images/gourmet_of_fire_cooking_animation.jpg" alt="Cooking Animation"></div>
    <div class="slide"><img src="/assets/images/gourmet_of_fire_princess_concept.png" alt="Princess Concept"></div>
    <div class="slide"><img src="/assets/images/gourmet_of_fire_dialog.jpg" alt="Dialog"></div>
    <div class="slide"><img src="/assets/images/gourmet_of_fire_field_level.jpg" alt="Field Level"></div>
    <div class="slide"><img src="/assets/images/gourmet_of_fire_village_level.jpg" alt="Village Level"></div>
    <div class="slide"><img src="/assets/images/gourmet_of_fire_in_house_level.jpg" alt="In-House Level"></div>
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
    aspect-ratio: 16 / 9; /* Maintain a proper aspect ratio */
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

"Embark on an adventure to find your own 맛 (taste)."

In the land of gourmet, the Kingdom of Cuisine, under the protection of the fire spirit, the ancient flames are passed down, continuing their legacy. The spark that split from the first flame has safeguarded the kingdom's people and contributed to the development of its culinary culture. However, as time passed, the flame began to lose its vigor, and despite the kingdom's efforts to restore it, the flame continues to weaken day by day. In the midst of this decline, the princess, born with the strongest protection of fire and the ability to hear the song of fire, feels a deep sense of responsibility. Determined to solve the crisis, she embarks on an adventure beyond the palace to find a solution.

* Genre: 2D top-down cooking adventure
* Type of project: Graduation project
* Engine: Unity
* Supported platforms: Windows / HTML
* Schedule: January 1, 2024 &rarr; November 15, 2024 (320 days)
* Team/solo: Team of two
* Status: Finished prototype
* Role: Game designer, game programmer

![Synopsis](/assets/images/gourmet_of_fire_creative_submission_01.jpg)

![Story Outline](/assets/images/gourmet_of_fire_creative_submission_02.jpg)

![Level Design](/assets/images/gourmet_of_fire_creative_submission_03_level_design.jpg)

![Mechanics](/assets/images/gourmet_of_fire_creative_submission_03_gameplay_and_systems_design_and_programming.jpg)

## Contributions / Responsibilities

* Unity
* C#

### Design Goal

Cooking plays a supporting role in other typical games. They would either heal, give them ability boosts, and etc. I wanted to make a cooking mechanics as the major part of the gameplay in this Cooking Fantasy genre. I wanted to show that cooking can serve as a purpose of adventure.

Secondary goal was to complete a game, not a prototype. I have created some student projects where I or the team would develop a prototype, but never a complete game.

### Highlights / Major Contributions

* Team Leader
  * Led the team of two. The other member was the artist who did most of the artworks.
* Game Designer
  * Designed/directed the entire game
* UI Designer
* Game Programmer
  * Developed the game in Unity C#

### Minor Contributions

* Logo design
* Worldbuilding
* Concept art

### Major Challenges

* How to create a fun cooking mechanics, not like usual combination mechanics other games have. The purpose was to make the cooking gameplay mechanics fun, for it is the core mechanic of the game.
* Communication
  * Communicating with artist as a designer and programmer had some challenges
  * We were both newbies when it comes to developing a real game, so literally had no idea what to do and what terminology to use
  * We had to understand the development environment of each other
    * Git, SourceTree, Google Drive, Notion, Aseprite
  * Overcoming these was possible because I understood art, design, and programming, which helped me a lot in communicating
* Overall resource management
  * Artist had hard time understanding the version control(Git)
  * Dealing with sprites sizes (block sizes, etc.)
* Understanding Unity C# properly
  * This project was the first time I used C# intensively
  * Understanding implementation of different part of gameplay
  * Overcoming the balance between my game programming abilities and my game design goals
* Setting priorities
  * Based on my capabilities, I had a lot of challenges on making priorities
  * Priorities based on what I want to implement, what I can implement, and what the game actually needs to be a "game"

### Possible Improvements

* Optimizing the pre-production to maximize the production time
  * We had a lot of mistakes due to lack of experiences during the pre-production
  * Now I can reduce the pre-production process because I know where and what to focus

## Reviews / Feedbacks

* I have learned how to create a design documents based on priorities and schedule
  * How and where to focus
  * One of the key abilities of a game designer is to figure out what is the most important job given the game design ideas, time schedule, and actual development capabilities

## Gameplay Videos

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/W7AT3YjdtvY" title="Gourmet of Fire" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p>

