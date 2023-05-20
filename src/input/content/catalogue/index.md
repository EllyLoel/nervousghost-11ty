---
layout: "layouts/page.njk"
permalink: "catalogue/"
title: "Catalogue"
eleventyNavigation:
  order: 4
eleventyComputed:
  eleventyNavigation:
    key: "{{ title }}"
---

<ul class="[ h-feed ]">
	{%- for product in catalogue %}
	<li>
		<a href="./{{product.slug}}/">{{ product.image | markdown | safe }}</a>
	</li>
	{%- endfor %}
</ul>
