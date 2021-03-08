# Lightning Web Components Basics

## Topics

### Discover Lightning Web Components

Example:

```HTML
<template>
    <input value={message}></input>
</template>
```

```JavaScript
import { LightningElement } from 'lwc';
export default class App extends LightningElement {
  message = 'Hello World';
}
```

```CSS
input {
   color: blue;
}
```

### Create Lighning Web Components

Example 1:

```HTML
<template>
    <div id="waiting" if:false={ready}>Loading…</div>
    <div id="display" if:true={ready}>
        <div>Name: {name}</div>
        <div>Description: {description}</div>
        <lightning-badge label={material}></lightning-badge>
        <lightning-badge label={category}></lightning-badge>
        <div>Price: {price}</div>
        <div><img src={pictureUrl}/></div>
    </div>
</template>
```

```JavaScript
import { LightningElement } from 'lwc';
export default class App extends LightningElement {
   name = 'Electra X4';
   description = 'A sweet bike built for comfort.';
   category = 'Mountain';
   material = 'Steel';
   price = '$2,700';
   pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
   ready = false;
   connectedCallback() {
       setTimeout(() => {
           this.ready = true;
       }, 3000);
   }
}
```

Example 2 (With Decorator):

```HTML
<!-- app.html -->
<template>
<div>
    <c-bike bike={bike}></c-bike>
</div>
</template>
```

```JavaScript
// app.js
import { LightningElement } from 'lwc';
export default class App extends LightningElement {
    bike = {
        name: 'Electra X4',
        picture: 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg'
    };
}
```

```HTML
<!-- bike.html -->
<template>
    <img src={bike.picture} alt="bike picture" />
    <p>{bike.name}</p>
</template>
```

```JavaScript
// bike.js
import { LightningElement, api } from 'lwc';
export default class Bike extends LightningElement {
    @api bike;
}
```

### Deploy Lightning Web Components

See bikeCard for this module.

### Handle Events in Lightning Web Components

See bikeCard for this module.

### Add Styles and Data to a Lightning Web Component
