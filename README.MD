# Generate Menu
Outputs a html menu structure to a target `<ul>` and sets up links to the corresponding sections within your page, which are scrolled to by [scroll-to-element](https://www.npmjs.com/package/scroll-to-element)

[![NPM](https://nodei.co/npm/generate-menu.png)](https://nodei.co/npm/generate-menu/)

## `MenuGenerator(selector, target)`

##### Options
###### ToDo :
> expose easing options
>
> sub-menus?


## Usage

```javascript
import MenuGenerator from 'menu-generator'

// - headline is the class selector
// - target is the id of the <ul>
let Menu = new MenuGenerator('headline', 'test-target');
```

### Develop
```
git clone git@github.com:DennisSmuda/generate-menu.git
cd generate-menu
npm install
npm start
```

### License
ISC
