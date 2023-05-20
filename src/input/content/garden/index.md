---
layout: "layouts/page.njk"
permalink: "garden/"
title: "Digital garden"
eleventyNavigation:
  order: 5
eleventyComputed:
  eleventyNavigation:
    key: "Garden"
---

<ul class="[ h-feed ]">
	{%- for note in garden %}
	<li>
		<a href="./{{note.slug}}/">{{ note.title }}</a>
	</li>
	{%- endfor %}
</ul>
