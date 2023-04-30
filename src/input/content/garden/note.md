---
layout: "layouts/post.njk"
pagination:
  data: garden
  size: 1
  alias: note
permalink: "garden/{{note.slug}}/"
---

{%- for block in note.content -%}
{{ block | safe }}
{%- endfor -%}
