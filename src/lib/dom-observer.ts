import { EventBus } from './event-bus'

export function domObserver(bus: EventBus) {
    const observer: MutationObserver = new MutationObserver(domChangeHandler)
    return observer

    function domChangeHandler(mutationsList: MutationRecord[]) {

        for(var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                let { addedNodes, removedNodes } = mutation

                addedNodes && addedNodes.length > 0 && bus.registerList(addedNodes, 'transitionend')
                removedNodes && removedNodes.length > 0 && bus.unregisterList(removedNodes, 'transitionend')
            }
        }
    }
}

