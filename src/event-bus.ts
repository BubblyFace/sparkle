export class EventBus {
    constructor() {
    }

    register(dom: HTMLElement, type: string) {
        console.log(dom, type);
    }

    unregister(dom: HTMLElement, type: string) {
        console.log(dom, type)
    }

    registerList(nodeList: NodeList, type: string) {
        nodeList.forEach((element: HTMLElement) => {
            this.register(element, type)
        });
    }

    unregisterList(nodeList: NodeList, type: string) {
        nodeList.forEach((element: HTMLElement) => {
            this.unregister(element, type)
        });
    }
}