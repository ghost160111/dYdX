# Plugins

> This is where you put all of your plugins!

## List of plugins

- ## ReactiveElement

> This plugin or library provides way easier way to define Custom Elements a.k.a Web Components in TypeScript, because core logic was written in TypeScript, basically it has pretty easy implementation logic, here is the few examples of defining web components using this library:

```ts
@DefineComponent({
  tag: "tag-name",
  template: `
    <h1>Your HTML template content!</h1>
  `
})
export default class YourComponent extends CustomHTMLElement {
  constructor() {
    super({
      shadowDOM: true, // shadow DOM handler is set
      animations: {
        setOpacityAnimation: true // opacity animation is set!
      },
      styles: {
        css: '', // you css styles
        sass: '' // your sass styles that are imported using webpack css-loader and sass-loader
        /**
         * @ts-ignore
         * import sass from "!!css-loader!sass-loader!./yourComponent.scss"
         */
      }
    });
  }
}

// now component is registered!

let yourComponent = new YourComponent();
document.body.appendChild(yourComponent); // it is appended to body now, and can be re-used many times in any location, even in other webpage!
```

> So, this was the easiest implementation of web component using ReactiveElement library!

> Let's move on to much extended usage of it!

```ts
@DefineComponent({
  tag: "tag-name",
  template: `
    <h1 ref-data="title"></h1>
  `
})
export default class YourComponent extends CustomHTMLElement {
  constructor() {
    super({
      shadowDOM: true, // shadow DOM handler is set
      animations: {
        setOpacityAnimation: true // opacity animation is set!
      },
      styles: {
      }
    });
  }

  public data: {} = {
    title: "Your HTML template content!"
  }
}
```

> In above example, the result will be the same, but title property inside data and ref-data attribute in h1 tag will make reactive update in data object and that part of DOM as well. This approach is accomplished thanks to Proxy object, a built-in API for pure reactivity.

> For instance, to change title property in data object, you need to refProxy member variable in your class, which is a reference to proxy object defined in StateHandler, in which if any changes made or simply you mutated only defined properties in our case title, it change target object (data) and refProxy, and finally it updates DOM, it works pretty fast, you can have more than one reference to title property in DOM, and it will update all of them instantly, it is really similar to Vue reactivity.

> Here is the much better example, to understand how reactivity works here:

```ts
@DefineComponent({
  tag: "tag-name",
  template: `
    <h1 ref-data="title"></h1>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>

    <input
      type="text"
      ref="input-text"
    />
  `
})
export default class YourComponent extends CustomHTMLElement {
  constructor() {
    super({
      shadowDOM: true, // shadow DOM handler is set
      animations: {
        setOpacityAnimation: true // opacity animation is set!
      },
      styles: {
      }
    });
  }

  public data: {} = {
    title: "Your HTML template content!"
  }

  public onConnected(): void {
    console.log("Component is now connected!");
  }

  public events(): void {
    this.eventHandler.subscribe("input-text", "input", this.onInputListener);
  }

  public onInputListener(event: any) {
    this.refProxy["title"] = event.target.value;
  }
}
```

> In above example as you can see, we defined events method, which is simply lifecycle hook that is just made for subscribing events, it is called after onConnected lifecycle hook! We are using simple event listener that just listens on every input that is being made in 'input' tag that has reference to its node via 'ref' attribute and its value 'input-text', ShadowDOMHandler does this as you can see, you are not going to use querySelector, you just use 'ref' attribute to get the reference of certain node that needs to be taken!

> And finally, all of this updates all nodes that has reference 'ref-data' to title property of data object, it doesn't really matter which element is referred to that title, how many of them, StateHandler takes care about them for ya, so you don't need to hardcode!

> There are also watchers in components, which means you can define watcher for certain property, here is the simplest example of them:

```ts
@DefineComponent({
  tag: "tag-name",
  template: `
    <h1 ref-data="title"></h1>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>
    <p ref-data="title"></p>

    <input
      type="text"
      ref="input-text"
    />
  `
})
export default class YourComponent extends CustomHTMLElement {
  constructor() {
    super({
      shadowDOM: true, // shadow DOM handler is set
      animations: {
        setOpacityAnimation: true // opacity animation is set!
      },
      styles: {
      }
    });
  }

  public data: {} = {
    title: "Your HTML template content!"
  }

  public watch: { [x: string]: (newValue: any, oldValue: any) => void; } = {
    "title": (newValue: any, oldValue: any) => {
      console.log("Title property just changed right now from ", oldValue, " to ", newValue);
    }
  }

  public onConnected(): void {
    console.log("Component is now connected!");
  }

  public events(): void {
    this.eventHandler.subscribe("input-text", "input", this.onInputListener);
  }

  public onInputListener(event: any): void {
    this.refProxy["title"] = event.target.value;
  }
}
```

> In above example after every mutation 'title' watcher callback is being called, and logs the message to console. There is also, eventHandler member variable which is reference to EventHandler composable class that simply handles events, it subscribes events, unsubscribe events, list of methods: 
  - subscribe
    > Parameters:
      - object: `HTMLElement | Document | Window | ShadowRoot | string | symbol`
        > Object can be element, reference 'ref' in string or symbol type format to some node or NodeList of nodes, document, window, shadowRoot which $root in our case.
      - eventType: `keyof HTMLElementEventMap | keyof DocumentEventMap | keyof WindowEventMap | keyof ShadowRootEventMap`
        > Event type parameter takes type of event in string type!
      - eventListener: `EventListener | CallableFunction`:
        > Event listener is the method that you want to attach.
      - eventListenerOptions: `boolean | AddEventListenerOptions`
        > Event listener options that you want to set, for instance to add reference to AbortController, or bubble event and so on...
      - ...parameters: `any[]`
        > Parameters of your method, simply to set them before event parameter!
        > If you have parameters you can simply define them at the end!
    > Return Type: EventHandler
  - unsubscribe
    > Parameters:
      - object: `HTMLElement | Document | Window | ShadowRoot | string | symbol`
      - eventType: `keyof HTMLElementEventMap | keyof DocumentEventMap | keyof WindowEventMap | keyof ShadowRootEventMap`
      - eventListenerName: `string`:
        > Your method name that was attached when you were subscribing event!
    > Return type: EventHandler
  - unsubscribeEvents
    > No parameters
    > Return type: void

> IMPORTANT NOTE: Watchers in this library has some limitations, for each watcher, either you need to watch property in nested or not nested object, the last prop name should be unique, and should not be repeated in any nested object, or it will cause some bugs sometimes, new implementation of watchers is in dev process, pay attention, it will change in some time, that's why it is better to use watchers in this way which is simpler and easier to define:

### Not recomended way to define: 

```ts
public data: {} = {
  dataList: {
    title: "This is test title",
    descriptionList: {
      description: "This is test description!"
    }
  }
}

public watch: { [x: string]: (newValue: any, oldValue: any) => void; } = {
  "dataList.title": (newValue: any, oldValue: any) => {
    console.log("Title property just changed right now from ", oldValue, " to ", newValue);
  },
  "dataList.descriptionList.description": (newValue: any, oldValue: any) => {
    console.log("Description property just changed right now from ", oldValue, " to ", newValue);
  }
}
```

### Recommended way to define:

> It is better and easier to define and understand!

```ts
public data: {} = {
  title: "This is test title",
  description: "This is test description!"
}

public watch: { [x: string]: (newValue: any, oldValue: any) => void; } = {
  "title": (newValue: any, oldValue: any) => {
    console.log("Title property just changed right now from ", oldValue, " to ", newValue);
  },
  "description": (newValue: any, oldValue: any) => {
    console.log("Description property just changed right now from ", oldValue, " to ", newValue);
  }
}
```

- ## FadeTransition

> This plugin is observer that simply observes added html elements, when element is added, JS Animation API will animate fade-in animation, just changing opacity from 0 to 1 to make DOM change look much smoother with correct easing accordingly!
