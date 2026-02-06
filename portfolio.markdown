---
layout: page
title: "Portfolio"
permalink: /portfolio/
kicker: Work
subtitle: Featured technical design case studies and game systems work.
---

## Featured

<div class="portfolio-grid">
  {% assign featured = site.projects | where: "featured", true | sort: "path" | reverse %}
  {% for project in featured %}
  <a class="card" href="{{ project.url }}">
    <div class="card-image">
      <img src="{{ project.image }}" alt="{{ project.title }}">
    </div>
    <div class="card-body">
      <div class="card-title">{{ project.title }}</div>
      <div class="card-meta">
        {% if project.role %}<span>{{ project.role }}</span>{% endif %}
        {% if project.engine %}<span>{{ project.engine }}</span>{% endif %}
        {% if project.team %}<span>{{ project.team }}</span>{% endif %}
      </div>
    </div>
  </a>
  {% endfor %}
</div>

## Other Game Work

<div class="portfolio-grid">
  {% assign other_games = site.projects | where: "category", "game" | where_exp: "item", "item.featured != true" | sort: "path" | reverse %}
  {% for project in other_games %}
  <a class="card" href="{{ project.url }}">
    <div class="card-image">
      <img src="{{ project.image }}" alt="{{ project.title }}">
    </div>
    <div class="card-body">
      <div class="card-title">{{ project.title }}</div>
      <div class="card-meta">
        {% if project.role %}<span>{{ project.role }}</span>{% endif %}
        {% if project.engine %}<span>{{ project.engine }}</span>{% endif %}
        {% if project.team %}<span>{{ project.team }}</span>{% endif %}
      </div>
    </div>
  </a>
  {% endfor %}
</div>

## Additional Creative Work (Non-game)

<details>
  <summary>Show additional creative work</summary>
  <div class="portfolio-grid">
    {% assign other = site.projects | where_exp: "item", "item.category != 'game'" | sort: "path" | reverse %}
    {% for project in other %}
    <a class="card" href="{{ project.url }}">
      <div class="card-image">
        <img src="{{ project.image }}" alt="{{ project.title }}">
      </div>
      <div class="card-body">
        <div class="card-title">{{ project.title }}</div>
        <div class="card-meta">
          {% if project.role %}<span>{{ project.role }}</span>{% endif %}
          {% if project.engine %}<span>{{ project.engine }}</span>{% endif %}
          {% if project.team %}<span>{{ project.team }}</span>{% endif %}
        </div>
      </div>
    </a>
    {% endfor %}
  </div>
</details>
