---
layout: default
title: Blog - Date and Time Guides | AgeDateCalc
description: Practical guides about age calculation, time zones, daylight saving, countdowns, and getting the most out of date and time tools.
permalink: /blog/
---

<section class="page-hero">
  <div class="wrap">
    <span class="badge">Blog</span>
    <h1>Date and Time <span class="accent">Guides</span></h1>
    <p class="lead">Practical, well-researched guides about calendars, clocks, time zones, and the math behind our tools.</p>
  </div>
</section>

<section class="section" style="padding-top:0">
  <div class="wrap">
    <div class="guides-grid">
      {% for post in site.posts %}
      <a class="guide-card" href="{{ post.url | relative_url }}">
        {% assign thumb = post.featured_image | default: post.image %}{% if thumb %}<img class="guide-thumb" src="{{ thumb | relative_url }}" alt="{{ post.image_alt | default: post.title }}" width="1200" height="630" loading="lazy">{% endif %}
        <div class="guide-body">
          <span class="guide-tag">{{ post.category | default: "Guide" }}</span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt | default: post.meta_description | default: post.description }}</p>
          <span class="guide-date">{{ post.date | date: "%B %-d, %Y" }}</span>
        </div>
      </a>
      {% endfor %}
    </div>
  </div>
</section>
