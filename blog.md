---
title: Blog
permalink: /blog/
layout: page
---

Short notes on engineering work, data systems, and open source.

{% if site.posts.size > 0 %}
## Posts
<ul class="post-list">
  {% for post in site.posts %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      <h3>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>
      {% if site.show_excerpts %}
        {{ post.excerpt }}
      {% endif %}
    </li>
  {% endfor %}
</ul>
{% else %}
No posts yet. Check back soon.
{% endif %}
