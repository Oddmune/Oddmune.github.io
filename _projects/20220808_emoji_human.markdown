---
title: "Emoji Human"
image: "https://imported-rubidium-c25.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fdf426fa9-315c-4c07-b8cd-92ef2da301ff%2F19c419da-796f-4753-84a4-3c43d1e0ab36%2F%25EB%25A9%2594%25EC%259D%25B8.png?table=block&id=182d0a35-eddc-4346-b12e-ed489b8da5ad&spaceId=df426fa9-315c-4c07-b8cd-92ef2da301ff&width=2000&userId=&cache=v2"
layout: project
---

<iframe src="https://oddmune.github.io/EMOJI-HUMAN/" width="100%" height="1080" style="border:none;">
  Your browser does not support iframes.
</iframe>

* [Exhibition Instagram page](https://www.instagram.com/p/CjCt8CeLygY/)
* [Exhibition news article](https://www.art-culture.co.kr/magazine_uni/25)

<div class="slideshow-container">
  <div class="slides-wrapper">
    <div class="slide"><img src="/assets/images/emoji_human_dp_0.jpg" alt="Display"></div>
  </div>
</div>

<iframe width="315" height="560" 
src="https://www.youtube.com/embed/XxQl0HsecVQ" 
title="Emoji Human" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture;
web-share"
allowfullscreen></iframe>

<style>
  .slideshow-container {
    max-width: 700px;
    width: 100%;
    position: relative;
    margin: auto;
    overflow: hidden;
    border-radius: 10px;
    aspect-ratio: 3 / 4; /* Maintain a proper aspect ratio */
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

Aren't We Emoji Humans?

Nowadays, most people who use smartphones often communicate through emojis on social media. Emojis are more convenient than writing long text explanations because they allow for an intuitive conveyance of expressions and emotions. As a result, the daily lives of modern individuals are filled with emojis, leading to the thought, "Are we emoji humans?" This idea gave birth to the Emoji Human Project.

* Genre: Interactive Web
* Type of project: Extracurricular (submitted to an exhibition)
* Schedule: August 8, 2022 &rarr; February 8, 2023 (185 days)
* Team/solo: Team of two
* Status: Completed
* Role: Leader, Web Designer, Web Developer

## Responsibilities

* HTML/CSS/JS
* Git, GitHub, SourceTree

## Design Goals

* Design an interactive media
  * Projection mapping was a passive interaction, so I wanted to create something more immersive and active

## Highlights / Major Contributions

* Frontend Design
* GitHub page integration
* Web development
  * Tons of copy-pasting from StackOverflow and references
* Emoji Translator

## Major Challenges

* Lack of depth in programming (esp. in scripting)

## Possible Improvements

* Considering the change of resolutions, aspect ratios

## Gameplay Videos





