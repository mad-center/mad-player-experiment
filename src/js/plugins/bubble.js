/**
 * Created by evan on 2020/6/17
 */
;(function (w, d) {

    // todo refactor find bubbles by a parameter
    let bubbles = d.querySelector('.bubbles');
    let bubblesWidth = bubbles.clientWidth;
    let num = bubbles.getAttribute('num');
    let duration = bubbles.getAttribute('duration');

    function bubbleUp() {
        //reset bubbles container
        bubbles.innerHTML = '';

        for (let i = 0; i < num; i++) {
            let bubbleDiv = d.createElement('div');
            bubbleDiv.classList.add('bubble');

            // 动态设置x轴偏移量，制造倾斜路径
            let rightAnimationLeftOffsets = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            let randomIndex = Math.floor(Math.random() * rightAnimationLeftOffsets.length);//[0,9) => [0...8]
            let randomEle = rightAnimationLeftOffsets[randomIndex];

            // translate(${bubblesWidth * Math.random()}px, 0) => 随机起始位置
            // scale range[0,5) => 随机缩放大小
            bubbleDiv.style.cssText = `
                    transform: translate(${bubblesWidth * Math.random()}px, 0) scale(${5 * Math.random()});
                    animation-name: particle-up, particle-right-${randomEle};
                    animation-duration: ${duration * Math.random() + 1}s;
                    animation-timing-function: ease-in-out;
                    `
            bubbles.appendChild(bubbleDiv);
        }
    }

    window.bubbleUp = bubbleUp;

})(window, document);