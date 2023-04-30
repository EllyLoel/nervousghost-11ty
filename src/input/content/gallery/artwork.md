---
layout: "layouts/post.njk"
pagination:
  data: gallery
  size: 1
  alias: artwork
permalink: "gallery/{{artwork.slug}}/"
---

{{ artwork.image | safe }}
{{ artwork.caption }}
