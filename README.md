This is a general web page printing plugin.

# install

### NPM

```bash
npm install easy-print --save
# or yarn
yarn add easy-print
```

# Quick start

```html
<div id="printMe" style="background:red;">
  <p></p>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod temporibus
    illo, provident, ea quam magni voluptate libero vel, quisquam ut earum
    officia. At adipisci explicabo ab, labore sequi in debitis?
  </p>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod temporibus
    illo, provident, ea quam magni voluptate libero vel, quisquam ut earum
    officia. At adipisci explicabo ab, labore sequi in debitis?
  </p>
  <p>...</p>
</div>
```

```javascript
import easyPrint from "easy-print";

easyPrint("#printMe");
```

## Params

- id: string - \*requisite Partial printing of the incoming ID
- option: Object
  - standard: Document type, default is html5, optional html5, loose, strict
  - extraHead: Additional tags attached to the head tag, separated by commas
  - extraCss: Additional link connections, separated by commas
  - popTitle: Title shows the title
  - endCallback(): Callback events after printing

source from vue-print-nb
