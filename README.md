# FUTURE NOW!

## We Take Showers (Team 24) Final Project

### What is this app?
- Name/Title: FutureNow! 
- Main Purpose: It's a tarot card reading app/website. 
- Features: Connects to 8-ball and you can explore the history of tarot
  
### How do I use this app?
- Installation: In root directory, run `npm i`, then run `npm run dev`. 
- Getting Started: Most things will be explained in [Help!](pages/instructions/index.html) 
- Usage, Examples, API Reference
  
### How was this app built?
- How Well Built, including quality indicators, badges, coverage, etc.
- Quality Indicators tools: www.codefactor.io
- Talk about how this app was built
- Technology: While we were going to initally use Electron to create a desktop app, the Professor suggested that we should go for a mobile-first approach as most users will be engaging with our content via their phone. Thus, we instead went to go with vite. It allows us to create a web application that scales perfectly between phone and laptop. 
  
- [**CI/CD_Pipeline**](admin/cipipeline/phase1.mp4)
  - JSDoc: Documentation (simply add comments before the function with /** /)
    - run `npm run jsdoc ./scripts`
    - then open website with liveserver
  - ESLint: Automatically checks for style points
    - you can also run `npm run eslint ./scripts`
  - Code Climate: Automatically reviews the quality of our code
    - you can also go to https://codeclimate.com/login/github/join 
    - it also notifies our slack when a push is made
  - Cypress: E2E Testing
    - make tests
    - run `npm run cypress:open`
    - click e2e testing
    - click your browser
    - run tests
  - Jest: Create Unit Tests
    - make unit tests
    - run `npm run test`   


- **Guidelines for merging/pushing**
  - Make Issue for every new feature/page
  - Make a branch for that specific issue/page
  - Push to that Branch
  
- **Coding Guidelines**
  - Comment every function
  - Use proper styling
  
- **Describe folders + Repository Organization**
  - .github/workflows: yml files for eslint and jsdoc
  - admin 
    - cipipeline: cypress files, node_modules, test files for code climate and eslint, ci/cd pipeline essentials
    - meetings: meeting notes
  - node_modules
  - pages (html and js and css files)
    - 8ball: 8ball features
    - about-us: about us page
    - components: backend for card choosing
    - constants: card data
    - instructions: instructions page
    - select-cards: select cards page
  - public: public images and fonts
  - specs: pitch 
  - index.js and index.html: front page
  - package.json: dependencies

### App Creators

Hi! We are undergraduate students currently attending University of California, San Diego. We are enrolled in CSE 110, a class about software engineering and this is our final project. We came up with the idea of tarot cards because we are passionate about using our software engineering skills to create forms of entertainment and add some fun to fortune telling in a creative way.

Authors and Contact Info:
- Benjamin Liang (bzliang@ucsd.edu)
- Bingyang Yu (b9yu@ucsd.edu)
- Haoyang Guo (h1guo@ucsd.edu)
- Kartik Gugnani (kgugnani@ucsd.edu)
- Linda Wu (lwwu@ucsd.edu)
- Maanasa Prasad (mmprasad@ucsd.edu)
- Nathan Huey (nhuey@ucsd.edu)
- Nick Ho (niho@ucsd.edu)
- Sholehani Hafezi (shafezi@ucsd.edu)
- Sumit Shetye (sshetye@ucsd.edu)

TA:
- Grishma Gurbani

