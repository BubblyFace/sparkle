import { EventBus } from './event-bus'
import { domObserver } from './dom-observer'

export class Sparkle {

    public root: HTMLElement

    public bus: EventBus

    public observer: MutationObserver

    constructor(root: HTMLElement) {
        this.bus = new EventBus()
        this.observer = domObserver(this.bus);

        const observeConfig = {
            subtree: true,
            childList: true
        }

        this.observer.observe(root, observeConfig)
    }

    create(type: string, parent: HTMLElement = this.root) {
        let aDom: HTMLElement = document.createElement('div')
        parent.appendChild(aDom)
    }
}