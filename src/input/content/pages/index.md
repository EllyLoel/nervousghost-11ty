---
layout: "layouts/base.njk"
permalink: "/"
title: "Home"
eleventyExcludeFromCollections: true
---

# Hi I'm Nervous Ghost

I'm really gay and I _really really_ love Star Wars :3

## Find me around the interwebz:

- [insta](https://www.instagram.com/nervousgh0st/)
- [tumblr](https://www.tumblr.com/nervousgh0st)
- [titter](https://twitter.com/nervousgh0st)
- [tiktok](https://www.tiktok.com/@nervousgh0st)
- [email](mailto:hello@nervousghost.com)
- [kofi](https://ko-fi.com/nervousgh0st)

## Artworks from the [gallery](./gallery)

<ul class="[ h-feed ]">
	{%- for artwork in gallery %}
	<li>
		<a href="./gallery/{{artwork.slug}}/">{{ artwork.image | markdown | safe }}</a>
	</li>
	{%- endfor %}
</ul>

## Notes from my [digital garden](./garden)

<ul class="[ h-feed ]">
	{%- for note in garden %}
	<li>
		<a href="./garden/{{note.slug}}/">{{ note.title }}</a>
	</li>
	{%- endfor %}
</ul>

## Products

<ul class="[ h-feed ]">
	{%- for product in catalogue %}
	<li>
		<a href="./catalogue/{{product.slug}}/">{{ product.image | markdown | safe }}</a>
	</li>
	{%- endfor %}
</ul>

## Newsletter

Give me your email >:3
