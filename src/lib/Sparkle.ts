import { EventBus } from './event-bus'
import { domObserver } from './dom-observer'
import { Roulette } from '../models/Roulette'

export class Sparkle {

    public root: HTMLElement

    public bus: EventBus

    public observer: MutationObserver

    constructor(root: HTMLElement) {
        this.bus = new EventBus()
        this.observer = domObserver(this.bus);
        this.root = root

        const observeConfig = {
            subtree: true,
            childList: true
        }

        this.observer.observe(root, observeConfig)
    }

    create(type: string, parent: HTMLElement = this.root) {
        let model: any = new Roulette()
        let aDom: HTMLElement = model.create()
        
        parent.appendChild(aDom)
    }
}