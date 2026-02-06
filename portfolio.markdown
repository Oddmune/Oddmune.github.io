---
layout: page
title: "Portfolio"
permalink: /portfolio/
kicker: Work
subtitle: Selected game design case studies and production work.
---

## Games

<div class="portfolio-grid">
  {% assign games = site.projects | where: "category", "game" | sort: "path" | reverse %}
  {% for project in games %}
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

## Other Design

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
