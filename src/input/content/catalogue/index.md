---
layout: "layouts/page.njk"
permalink: "catalogue/"
title: "Catalogue"
---

<ul>
	{%- for product in catalogue %}
	<li>
		<a href="./{{product.slug}}/">{{ product.image | markdown | safe }}</a>
	</li>
	{%- endfor %}
</ul>
