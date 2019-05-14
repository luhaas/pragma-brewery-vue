# Pragma Brewery

Pragma Brewery is a project created to register beer containers and monitor their temperature.

## Requirements

- Node
- Vue.js


### Why Vue.js?

Vue.js was chosen for being a performative, versatile and approachable Javascript Framework.

### Development details

**Stylesheet**: There's a stylesheet with general styles and the components have scoped styles too when applicable. We use Sass :)

**Tests**: 
- Eslint ensures that the code is clean and padronized;
- Jest test the store mutations.

**Documentation**: The code have many comments and this file will help you to start the project and understand its proposite. But you can contact the developer anytime to do questions :)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

## The problem

Meet Shane. He works at PragmaBrewery, a boutique micro brewery based in a rural area
of Australia and creator of 6 unique beer varieties. Shane is responsible for driving the
large transport truck, delivering goods from the brewery to a number of pubs across
metropolitan Sydney each week.

Each beer has its own specific refrigeration needs while being transported:
- Beer 1 (Pilsner) - 4°C - 6°C
- Beer 2 (IPA) - 5°C - 6°C
- Beer 3 (Lager) - 4°C - 7°C
- Beer 4 (Stout) - 6°C - 8°C
- Beer 5 (Wheat beer) - 3°C - 5°C
- Beer 6 (Pale Ale) - 4°C - 6°C

The refrigerated truck is loaded with multiple containers with beer bottles inside, each
set to a specific temperature and each containing a thermometer sensor.
While driving, Shane is alerted if any of the containers fall outside of the temperature
range. Unfortunately, this is common due to factors such as opening the doors to unload,
the heat of the Sydney summer or sometimes due to forgetting the container doors ajar.


## Questions


**Can a container carry more than one type of beer at a time?**
Due to the specificities of each type of beer, it was decided to carry a single type per container.

**Is there a specific range desired for the temperature check?**
The check was implemented every 2 seconds.


## Improvements for version 2.0 ##
- Expand automated tests.
- Allow the number of beers in the container to be edited.
- Allow to include more than one type of beer, notifying if the types have different storage conditions.
- Implement PWA for use on smartphones with native push notifications.
