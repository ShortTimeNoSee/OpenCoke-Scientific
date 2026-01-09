import markdown
import os

def build_site():
    # read source
    with open('README.md', 'r', encoding='utf-8') as f:
        readme_text = f.read()

    # convert to HTML
    html_content = markdown.markdown(readme_text, extensions=['extra', 'tables'])

    # read template
    with open('template.html', 'r', encoding='utf-8') as f:
        template = f.read()

    # inject
    final_html = template.replace('{{ README_CONTENT }}', html_content)

    # write
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(final_html)
    
    print("Build complete: index.html generated.")

if __name__ == "__main__":
    build_site()
