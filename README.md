# CounterFix landing page

The approved CounterFix static landing page with the Open core identity, automatic light/dark appearance and responsive layouts.

## Run locally

Run `python3 -m http.server 4173` from the repository and open http://localhost:4173/. No application dependencies or environment variables are required.

## Build and deploy

Run `npm run build`. The dependency-free build copies only the approved HTML, CSS, JavaScript and referenced assets into `public/`. Import this repository into Vercel using the included configuration, with `main` as the production branch.

## Behaviour

The product verification interaction is visibly illustrative. It does not perform live authentication or issue rewards. Signup links lead to https://auth.counterfix.io/register/. System appearance controls the page theme automatically.

## Assets

The CounterFix Open core logos are outlined SVGs. Artwork is supplied locally; no external font or image service is required. Historical concepts, logo proposal documents and workspace files are intentionally excluded.
