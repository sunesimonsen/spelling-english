import confetti from "canvas-confetti";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

export class Confetti {
  didUpdate(prevProps) {
    if (!prevProps.show && this.props.show) {
      var duration = 3 * 1000;
      var animationEnd = Date.now() + duration;
      var defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        scalar: 1.3,
      };

      var interval = setInterval(() => {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return this.props.onEnd();
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          })
        );
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          })
        );
      }, 250);
    }
  }

  render() {
    return null;
  }
}
