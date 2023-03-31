---
title: "Home"
permalink: "/"
---

Hello, World!

<ul>
	{%- for imageData in images %}
	<li>
		<a href="/{{ imageData.date }}-{{imageData.slug}}/">
			{{ imageData.image | markdown | safe }}
		</a>
		<p>{{ imageData.caption }}</p>
	</li>
	{%- endfor %}
</ul>
