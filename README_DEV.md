# Development environment

This project includes two ways to run the development environment so you can read and work on the code without installing Node locally.

## Option A — Docker (recommended)

1. Install Docker Desktop for macOS: https://www.docker.com/get-started
2. From the project root run:

```bash
docker compose up --build
```

3. Open http://localhost:5173 in your browser.

To stop the container run:

```bash
docker compose down
```

## Option B — Local Node (if you prefer)

- Install Node (LTS) using Homebrew or nvm.

Homebrew:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
# Then in a new shell
nvm install --lts
```

Then:

```bash
npm install
npm run dev
```

---

If you want, I can try to bring up the Docker container for you now (if Docker is installed), or walk you through installing Homebrew + Node on your Mac.

## GitHub Pages deployment

This project includes a GitHub Actions workflow that builds the site and deploys the `dist/` folder to the `gh-pages` branch. The workflow expects the site to be served from `/mirai-creative-lab/`. Steps to use it:

1. Push the `main` branch to `https://github.com/essafssafi004-sys/mirai-creative-lab.git` (or change the repo remote to your fork).
2. The workflow (`.github/workflows/gh-pages.yml`) runs on pushes to `main`, builds with `VITE_BASE=/mirai-creative-lab/`, and deploys to `gh-pages`.
3. Enable GitHub Pages in the repository Settings → Pages and pick the `gh-pages` branch. Your site will be available at `https://<your-username>.github.io/mirai-creative-lab/`.

If you want, I can prepare the branch and push a `gh-pages-setup` branch with these changes (I can also open a PR). Reply with which option you prefer.