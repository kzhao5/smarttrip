# Change Log
All notable changes to this project will be documented in this file.  

The format is based on [Keep a Changelog](http://keepachangelog.com/)  
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased] – yyyy‑mm‑dd
Upcoming improvements for Feature 5 / 6.

### Added
* PLAN‑102 MINOR Add basic unit tests for `placeService`.
* PLAN‑103 PATCH Add ESLint + Prettier config.

### Changed

### Fixed


## [0.2.0] – 2025‑07‑01
**Feature 4 – React Router & Parse integration**

### Added
* PLAN‑090 MAJOR Migrate UI to **Create React App** (CRA) with built‑in webpack.
* PLAN‑091 MAJOR Introduce **React Router DOM v6** and create three route pages (`/`, `/recommendations`, `/itinerary`).
* PLAN‑092 MINOR Add `parseConfig.js`, `PlaceModel.js`, `placeService.js` to connect to Back4App.
* PLAN‑093 MINOR Static fallback loader for `/data/places.json` when Parse is unavailable.

### Changed
* PLAN‑094 MINOR Move all images to `public/assets` and update JSON paths to `/assets/…`.
* PLAN‑095 PATCH Rewrite place cards and itinerary cards as reusable React components.

### Fixed
* PLAN‑096 PATCH Fix 404 image errors caused by relative paths.
* PLAN‑097 PATCH Resolve `unauthorized` Parse error by documenting CLP + ACL steps.


## [0.1.0] – 2025‑06‑25
**Initial working prototype**

### Added
* PLAN‑001 MAJOR Vanilla HTML/CSS pages: `index.html`, `recommendation.html`, `itinerary.html`.
* PLAN‑002 MINOR LocalStorage workflow for trip info and selected places.
* PLAN‑003 PATCH Basic JS logic (`home.js`, `recommendation.js`, `itinerary.js`).

### Changed

### Fixed
