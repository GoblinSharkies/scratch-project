# Scratch Project GitHub Tutorial

<a href="https://excalidraw.com/#json=oPciaBeml8N1pVKFR27uB,cSQoBdLi9vR_jbHPsHer8w" target="_blank">Visual Guild Linked Here</a>

## Creating a New Branch

1. Clone repo to your local system.
- `git clone https://github.com/GoblinSharkies/scratch-project.git`

2. Create or go to `dev` branch
- `git checkout dev`

<a><img src="./docs/assests/images/git1.png"/></a>

3. Create or go to your branch
- `git checkout -b [your-name/feature]`

4. Check what branch you are currently on
- `git branch`

<a><img src="./docs/assests/images/git3.png"/></a>

## Starting Workflow

1. Make sure local branch is up-to-date with `dev` branch

<a><img src="./docs/assests/images/git5.png"/></a>

2. Create or go to your branch. PRO TIP: Use tab to autofill
- `git checkout -b [your-name/feature]`

<a><img src="./docs/assests/images/git2.png"/></a>

3. Use `git branch` to make sure you are on the correct branch
<a><img src="./docs/assests/images/git4.png"/></a>

## Saving and Uploading Code
1. Merge any updates from `dev`. Solve any conflicts (aka differences) between `dev` and your local branch 

<a><img src="./docs/assests/images/git5.png"/></a>

2. Git add & git commit your files
- `git add <YOUR FILES>`
- `git commit -m"<YOUR COMMENT>`

3. Push files to your branch
- `git push origin <YOUR BRANCH>`

4. Create a pull request on GitHub
  - base: dev <-- compare: [YOUR BRANCH NAME]
  - add comments
  - add reviewers (on the right sidebar)
  - click create pull request

<a><img src="./docs/assests/images/git6.png"/></a>

5. Review, Approve and Merge pull request to `dev` branch
