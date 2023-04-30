---
layout: "layouts/page.njk"
permalink: "garden/"
title: "Garden"
---

<ul>
	{%- for note in garden %}
	<li>
		<a href="./{{note.slug}}/">{{ note.title }}</a>
	</li>
	{%- endfor %}
</ul>
