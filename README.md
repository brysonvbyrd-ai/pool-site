# Your Pool Co.

A one-page marketing template for a local pool service. Bird Automation (Bryson Byrd) can show it to pool companies, and a company can replace the placeholders and publish it.

The site is static: `index.html`, `assets/`, and no build step. It is ready for GitHub Pages.

## What’s on the page

- Hero with a quote call to action
- Services: weekly cleaning, chemical balancing, equipment repair, openings and closings
- How it works
- Service area (placeholder towns, not a real map)
- FAQ
- Quote form that opens an email draft and does not talk to a server

Phone, email, and street address are marked **Placeholder**:

- Phone: (000) 000-0000
- Email: hello@yourpoolco.example
- Address: 123 Example Street, Your City, ST 00000

The template does not include testimonials, reviews, license numbers, prices, or statistics.

## Run it locally

From this folder:

```bash
python3 -m http.server 47321
```

Open [http://127.0.0.1:47321](http://127.0.0.1:47321).

Opening `index.html` directly in a browser also works. Fonts, CSS, and the script use relative paths.

## Publish on GitHub Pages

1. Push this folder to a repository.
2. In the repository settings, open Pages.
3. Deploy from the branch that contains `index.html`, folder `/` (root).
4. A `.nojekyll` file is included so Pages serves the files as they are.

## Replace before a company publishes

Search the project for these and swap in the real business:

- `Your Pool Co.`
- `(000) 000-0000` and `tel:0000000000`
- `hello@yourpoolco.example` (the form action in `index.html`; the script reads that address)
- `123 Example Street, Your City, ST 00000`
- The bracketed towns in the service area
- `Hours: add your hours.`
- Service blurbs and FAQ answers that do not match the route

Remove the top demo banner and the Bird Automation footer line when the page should no longer read as a template.
