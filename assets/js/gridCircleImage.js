document.addEventListener('DOMContentLoaded', function() {
    const imgElement = document.querySelector('.rotating');
    let animation;

    function startAnimation() {
        const keyframes = [
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(360deg)' }
        ];

        const options = {
            duration: 10000,
            iterations: Infinity
        };

        if (!animation) {
            animation = imgElement.animate(keyframes, options);

            // This will handle the case where it reaches the start and is playing in reverse
            animation.onfinish = function() {
                if (animation.playbackRate == -1) {
                    // Reset the current time to the end
                    animation.currentTime = options.duration;
                }
            };
        }
    }

    imgElement.addEventListener('mouseenter', () => {
        if (animation) {
            animation.playbackRate = -1; // Reverse the animation
        }
    });

    imgElement.addEventListener('mouseleave', () => {
        if (animation) {
            animation.playbackRate = 1; // Play the animation normally
        }
    });

    // Start the animation initially in the forward direction
    startAnimation();
});
