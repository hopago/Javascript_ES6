import { CONTAINER, CURRENT_INDEX, SLIDE_DATA, SLIDE_TO } from "../constants.js";

const Slide = (() => {
    return class {
        constructor($target, slideData) {
            const frag = document.createDocumentFragment();
            const $slide = document.createElement("div");
            this[CONTAINER] = document.createElement("ul");
            this[CURRENT_INDEX] = 0;
            this[SLIDE_DATA] = slideData;
            $slide.className = "slide";
            this[CONTAINER].className = "slide__container";
            this[CONTAINER].style.width = this[SLIDE_DATA].length * 100 + "px";
            slideData.forEach((v, i) => {
                const $li = document.createElement("li");
                $li.className = "slide__item";
                $li.innerText = v;
                this[CONTAINER].appendChild($li)
            });
            $slide.appendChild(this[CONTAINER]);
            $slide.addEventListener("click", this.triggerClick.bind(this));
            frag.appendChild($slide);
            $target.appendChild(frag);
        }

        [SLIDE_TO](index) {
            this[CURRENT_INDEX] = index;
            this[CONTAINER].style.left = -100 * index + "px"
        }

        /**
         * @param {number} index
         */
        set index(index) {
            index = index % this[SLIDE_DATA].length;
            this[SLIDE_TO](index)
        }

        triggerClick(e) {
            e.preventDefault();
            this.index = this[CURRENT_INDEX] + 1
        }
    }
})();

export default Slide