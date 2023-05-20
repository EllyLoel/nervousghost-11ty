---
layout: "layouts/page.njk"
permalink: "gallery/"
title: "Gallery"
eleventyNavigation:
  order: 3
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
---

<ul class="[ h-feed ]">
	{%- for artwork in gallery %}
	<li>
		<a href="./{{artwork.slug}}/">{{ artwork.image | markdown | safe }}</a>
	</li>
	{%- endfor %}
</ul>
