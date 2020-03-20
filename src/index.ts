import { Sparkle } from './lib/Sparkle'

const root: HTMLElement = document.getElementById('root')
const sparkle: Sparkle = new Sparkle(root);

(function(window: any) {
    window.sparkle = sparkle
})(window as any)

// export default sparkle 
