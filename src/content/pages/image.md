---
pagination:
  data: images
  size: 1
  alias: thisImage
permalink: "/{{ thisImage.date }}-{{thisImage.slug}}/"
---

{{ thisImage.image | safe }}
{{ thisImage.caption }}
