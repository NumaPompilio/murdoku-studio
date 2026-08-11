import re

with open("murdoku-studio.html", "r") as f:
    content = f.read()

scripts = re.findall(r"<script>([\s\S]*?)</script>", content)
js_content = "\n".join(scripts)

# For testing, we might need to mock window/document if they are at top-level
# but node -c only checks syntax, not runtime!
with open("test_eval.js", "w") as f:
    f.write(js_content)
