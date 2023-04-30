---
layout: "layouts/post.njk"
pagination:
  data: catalogue
  size: 1
  alias: product
permalink: "catalogue/{{product.slug}}/"
---

{{ product.image | safe }}
{{ product.caption }}
