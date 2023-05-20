---
layout: "layouts/post.njk"
pagination:
  data: gallery
  size: 1
  alias: artwork
permalink: "gallery/{{ artwork.slug }}/"
eleventyComputed:
  eleventyNavigation:
    key: "{{ artwork.title }}"
    parent: "Gallery"
---

{{ artwork.image | safe }}
{{ artwork.caption }}
