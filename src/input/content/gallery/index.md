---
layout: "layouts/page.njk"
permalink: "gallery/"
title: "Gallery"
---

<ul>
	{%- for artwork in gallery %}
	<li>
		<a href="./{{artwork.slug}}/">{{ artwork.image | markdown | safe }}</a>
	</li>
	{%- endfor %}
</ul>
