# Components

This directory simply contains source code of all web component handler classes.

> Here is the list:

- AnimationHandler
- BaseHandler
- EventHandler
- LangStateHandler -> (in development)
- PopupContentHandler -> (in development)
- ShadowDOMHandler
- StateHandler
- StyleHandler

So, this class are managed in base CustomHTMLElement class using compositional approach or separation of concerns, so that all handler classes handles something, for instance AnimationHandler sets default fade in animation, and also can animate custom animations, BaseHandler which handles about the freeing up the memory by removing all instances when web component is removed from document, by removing references, event handlers, binded event listeners and so on, ShadowDOMHandler which handles most of the shadowDOM operations, like getting reference to an element, or list of elements using ref html attribute which stores the reference to that Node or NodeList to refs property which is located in ShadowDOMHandler and reference of it in CustomHTMLElement class, EventHandler - very handy handler class that lets you attach event to window, document, shadowRoot, node, nodeList of refs attr, and takes care about the rest, it can apply to events to list of elements, to element, and remove them when element is removed from document! It uses built in browser approach of adding events.

## AnimationHandler

AnimationHandler sets default fade in animation, and also can animate custom animations.

## BaseComponent

BaseComponent is abstract class that just sets context of web component and shares it within child classes.

## BaseHandler

BaseHandler handles about the freeing up the memory by removing all instances when web component is removed from document, by removing references, event handlers, binded event listeners and so on.

## EventHandler

EventHandler is very handy handler class that lets you attach event to window, document, shadowRoot, node, nodeList of refs attr, and takes care about the rest, it can apply to events to list of elements, to element, and remove them when element is removed from document! It uses built in browser approach of adding events.

## LangStateHandler (in development)

This handler will allow developer to build multilingual components, that takes care about updating state of a component when language is changed.

## PopupContentHandler (in development)

This handler will allow developer to set little popups to elements which are hoverable and user can see provided info in little popup just like in Vuetify!

## ShadowDOMHandler

ShadowDOMHandler handles most of the shadowDOM operations, like getting reference to an element, or list of elements using ref html attribute which stores the reference to that Node or NodeList to refs property which is located in ShadowDOMHandler and reference of it in CustomHTMLElement class.

## StateHandler

StateHandler handles the state of component!