---
layout: "layouts/post.njk"
pagination:
  data: catalogue
  size: 1
  alias: product
permalink: "catalogue/{{ product.slug }}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ product.title }}"
    parent: "Catalogue"
---

{{ product.image | safe }}
{{ product.caption }}
