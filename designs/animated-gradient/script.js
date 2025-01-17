const numPoints = 7;
const positions = Array.from({ length: numPoints }, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
}));

const velocities = Array.from({ length: numPoints }, () => ({
  x: (Math.random() - 0.5) * 2, // Random velocity in range [-1, 1]
  y: (Math.random() - 0.5) * 2,
}));

function animate() {
  // Update positions with random velocities
  positions.forEach((pos, i) => {
    pos.x += velocities[i].x;
    pos.y += velocities[i].y;

    // Bounce back if out of bounds
    if (pos.x < 0 || pos.x > 100) velocities[i].x *= -1;
    if (pos.y < 0 || pos.y > 100) velocities[i].y *= -1;
  });

  updateGradientPositions(positions);
  requestAnimationFrame(animate);
}

function updateGradientPositions(positions) {
  const gradient = positions
    .map(
      (pos, i) =>
        `radial-gradient(at ${pos.x}% ${pos.y}%, hsla(${i * 35}, 100%, 70%, 1) 0px, transparent 75%)`
    )
    .join(", ");

  document.getElementById("animated-gradient").style.backgroundImage = gradient;
}

// Start the animation
animate();
