// oneko.js: https://github.com/adryd325/oneko.js
// Customized for this site: calico skin, fading paw prints, and an idle
// "yarn play" scene — when you pause, a ball of yarn rolls in and she
// stalks and pounces on it, then it rolls off when you move the mouse again.

(function oneko() {
  const isReducedMotion =
    window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
    window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

  if (isReducedMotion) return;

  const nekoEl = document.createElement("div");
  let persistPosition = true;

  let nekoPosX = 32;
  let nekoPosY = 32;

  let mousePosX = 0;
  let mousePosY = 0;

  let frameCount = 0;
  let idleTime = 0;
  let idleAnimation = null;
  let idleAnimationFrame = 0;

  let pawTick = 0;
  let pawSide = 1;

  let yarn = null;
  let lastTs = null;

  const nekoSpeed = 16;
  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  function init() {
    let nekoFile = "./oneko.gif"
    const curScript = document.currentScript
    if (curScript && curScript.dataset.cat) {
      nekoFile = curScript.dataset.cat
    }
    if (curScript && curScript.dataset.persistPosition) {
      if (curScript.dataset.persistPosition === "") {
        persistPosition = true;
      } else {
        persistPosition = JSON.parse(curScript.dataset.persistPosition.toLowerCase());
      }
    }

    if (persistPosition) {
      let storedNeko = JSON.parse(window.localStorage.getItem("oneko"));
      if (storedNeko !== null) {
        nekoPosX = storedNeko.nekoPosX;
        nekoPosY = storedNeko.nekoPosY;
        mousePosX = storedNeko.mousePosX;
        mousePosY = storedNeko.mousePosY;
        frameCount = storedNeko.frameCount;
        idleTime = storedNeko.idleTime;
        idleAnimation = storedNeko.idleAnimation;
        idleAnimationFrame = storedNeko.idleAnimationFrame;
        nekoEl.style.backgroundPosition = storedNeko.bgPos;
      }
    }

    nekoEl.id = "oneko";
    nekoEl.ariaHidden = true;
    nekoEl.style.width = "32px";
    nekoEl.style.height = "32px";
    nekoEl.style.position = "fixed";
    nekoEl.style.pointerEvents = "none";
    nekoEl.style.imageRendering = "pixelated";
    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;
    nekoEl.style.zIndex = 2147483647;

    nekoEl.style.backgroundImage = `url(${nekoFile})`;

    document.body.appendChild(nekoEl);

    document.addEventListener("mousemove", function (event) {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
      // The moment you engage again, the yarn flits off and she comes back.
      if (yarn && !yarn.leaving) {
        sendYarnAway();
      }
    });

    // On touch devices there is no cursor to chase, so the cat
    // wanders to a random spot every few seconds instead.
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) {
      const wander = function () {
        mousePosX = 24 + Math.random() * Math.max(window.innerWidth - 48, 48);
        mousePosY = 24 + Math.random() * Math.max(window.innerHeight - 48, 48);
      };
      wander();
      setInterval(wander, 7000);
    }

    if (persistPosition) {
      window.addEventListener("beforeunload", function (event) {
        window.localStorage.setItem("oneko", JSON.stringify({
          nekoPosX: nekoPosX,
          nekoPosY: nekoPosY,
          mousePosX: mousePosX,
          mousePosY: mousePosY,
          frameCount: frameCount,
          idleTime: idleTime,
          idleAnimation: idleAnimation,
          idleAnimationFrame: idleAnimationFrame,
          bgPos: nekoEl.style.backgroundPosition
        }));
      });
    }

    window.requestAnimationFrame(onAnimationFrame);
  }

  let lastFrameTimestamp;

  function onAnimationFrame(timestamp) {
    // Stops execution if the neko element is removed from DOM
    if (!nekoEl.isConnected) {
      return;
    }
    if (!lastFrameTimestamp) {
      lastFrameTimestamp = timestamp;
    }
    // Yarn glides at full frame rate so its flight stays smooth.
    updateYarn(timestamp);
    if (timestamp - lastFrameTimestamp > 100) {
      lastFrameTimestamp = timestamp;
      frame();
    }
    window.requestAnimationFrame(onAnimationFrame);
  }

  function setSprite(name, frame) {
    const sprite = spriteSets[name][frame % spriteSets[name].length];
    nekoEl.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
  }

  function resetIdleAnimation() {
    idleAnimation = null;
    idleAnimationFrame = 0;
  }

  // Drop a fading paw print behind the cat, alternating left/right of her path.
  function spawnPawPrint() {
    const heading = Math.atan2(mousePosY - nekoPosY, mousePosX - nekoPosX);
    const angleDeg = heading * 180 / Math.PI + 90;
    const perpX = Math.cos(heading + Math.PI / 2) * 6 * pawSide;
    const perpY = Math.sin(heading + Math.PI / 2) * 6 * pawSide;
    pawSide *= -1;

    const paw = document.createElement("div");
    paw.className = "oneko-paw";
    paw.style.left = `${nekoPosX - 7 + perpX}px`;
    paw.style.top = `${nekoPosY - 7 + perpY}px`;
    paw.style.transform = `rotate(${angleDeg}deg)`;
    document.body.appendChild(paw);
    setTimeout(function () { paw.remove(); }, 1200);
  }

  // A small burst of glyphs (e.g. sparkles when she pounces the yarn).
  function spawnPop(x, y, count, glyph) {
    for (let i = 0; i < count; i++) {
      const bit = document.createElement("div");
      bit.className = "oneko-pop";
      bit.textContent = glyph;
      bit.style.left = `${x}px`;
      bit.style.top = `${y}px`;
      bit.style.setProperty("--dx", `${(Math.random() - 0.5) * 46}px`);
      bit.style.animationDelay = `${i * 0.05}s`;
      document.body.appendChild(bit);
      setTimeout(function () { bit.remove(); }, 1200);
    }
  }

  // --- Yarn play scene -------------------------------------------------

  function pickYarnWaypoint() {
    const m = 70;
    yarn.tx = m + Math.random() * Math.max(window.innerWidth - 2 * m, 1);
    yarn.ty = m + Math.random() * Math.max(Math.min(window.innerHeight - 2 * m, 320), 1);
  }

  function spawnYarn() {
    const el = document.createElement("div");
    el.className = "oneko-yarn";
    document.body.appendChild(el);

    const x = Math.min(Math.max(nekoPosX + (Math.random() - 0.5) * 160, 60), window.innerWidth - 60);
    const y = Math.min(Math.max(nekoPosY + (Math.random() - 0.5) * 90, 60), window.innerHeight - 120);
    yarn = { el: el, x: x, y: y, tx: x, ty: y, leaving: false, elapsed: 0 };
    pickYarnWaypoint();
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
  }

  function removeYarn() {
    if (yarn) {
      yarn.el.remove();
      yarn = null;
    }
  }

  // She boops it — it darts to a fresh spot with a little head start so she
  // never quite pins it down.
  function scatterYarn() {
    pickYarnWaypoint();
    const ang = Math.atan2(yarn.ty - yarn.y, yarn.tx - yarn.x);
    yarn.x += Math.cos(ang) * 46;
    yarn.y += Math.sin(ang) * 46;
  }

  function sendYarnAway() {
    yarn.leaving = true;
    // rolls off toward the nearest side edge
    yarn.tx = yarn.x < window.innerWidth / 2 ? -90 : window.innerWidth + 90;
    yarn.ty = yarn.y + (Math.random() - 0.5) * 80;
  }

  function updateYarn(ts) {
    if (lastTs === null) lastTs = ts;
    const dt = Math.min((ts - lastTs) / 1000, 0.05);
    lastTs = ts;
    if (!yarn) return;

    yarn.elapsed += dt;

    const dx = yarn.tx - yarn.x;
    const dy = yarn.ty - yarn.y;
    const dist = Math.hypot(dx, dy) || 1;
    const speed = yarn.leaving ? 340 : 95;

    if (dist < 8) {
      if (yarn.leaving) { removeYarn(); return; }
      pickYarnWaypoint();
    } else {
      yarn.x += (dx / dist) * speed * dt;
      yarn.y += (dy / dist) * speed * dt;
    }

    yarn.el.style.left = `${yarn.x}px`;
    yarn.el.style.top = `${yarn.y}px`;

    // After a while it loses interest and flies off on its own.
    if (!yarn.leaving && yarn.elapsed > 10) {
      sendYarnAway();
    }
  }

  function idle() {
    idleTime += 1;

    // Once you've paused a moment, a ball of yarn may roll in for her to chase.
    if (!yarn && idleTime > 6 && Math.floor(Math.random() * 130) == 0) {
      spawnYarn();
      return;
    }

    // every ~ 20 seconds
    if (
      idleTime > 10 &&
      Math.floor(Math.random() * 200) == 0 &&
      idleAnimation == null
    ) {
      let avalibleIdleAnimations = ["sleeping", "scratchSelf"];
      if (nekoPosX < 32) {
        avalibleIdleAnimations.push("scratchWallW");
      }
      if (nekoPosY < 32) {
        avalibleIdleAnimations.push("scratchWallN");
      }
      if (nekoPosX > window.innerWidth - 32) {
        avalibleIdleAnimations.push("scratchWallE");
      }
      if (nekoPosY > window.innerHeight - 32) {
        avalibleIdleAnimations.push("scratchWallS");
      }
      idleAnimation =
        avalibleIdleAnimations[
          Math.floor(Math.random() * avalibleIdleAnimations.length)
        ];
    }

    switch (idleAnimation) {
      case "sleeping":
        if (idleAnimationFrame < 8) {
          setSprite("tired", 0);
          break;
        }
        setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
        if (idleAnimationFrame > 192) {
          resetIdleAnimation();
        }
        break;
      case "scratchWallN":
      case "scratchWallS":
      case "scratchWallE":
      case "scratchWallW":
      case "scratchSelf":
        setSprite(idleAnimation, idleAnimationFrame);
        if (idleAnimationFrame > 9) {
          resetIdleAnimation();
        }
        break;
      default:
        setSprite("idle", 0);
        return;
    }
    idleAnimationFrame += 1;
  }

  function frame() {
    frameCount += 1;

    const chasing = yarn && !yarn.leaving;

    // Pounce: if she reaches the yarn, sparkles fly and it scatters away.
    if (chasing && Math.hypot(yarn.x - nekoPosX, yarn.y - nekoPosY) < 50) {
      spawnPop(nekoPosX, nekoPosY - 10, 3, "✨");
      scatterYarn();
    }

    const targetX = chasing ? yarn.x : mousePosX;
    const targetY = chasing ? yarn.y : mousePosY;
    const diffX = nekoPosX - targetX;
    const diffY = nekoPosY - targetY;
    const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

    if (distance < nekoSpeed || distance < 48) {
      idle();
      return;
    }

    idleAnimation = null;
    idleAnimationFrame = 0;

    if (idleTime > 1) {
      setSprite("alert", 0);
      // count down after being alerted before moving
      idleTime = Math.min(idleTime, 7);
      idleTime -= 1;
      return;
    }

    let direction;
    direction = diffY / distance > 0.5 ? "N" : "";
    direction += diffY / distance < -0.5 ? "S" : "";
    direction += diffX / distance > 0.5 ? "W" : "";
    direction += diffX / distance < -0.5 ? "E" : "";
    // Slow the walk-cycle sprite swap (calmer legs) without slowing movement.
    setSprite(direction, Math.floor(frameCount / 4));

    nekoPosX -= (diffX / distance) * nekoSpeed;
    nekoPosY -= (diffY / distance) * nekoSpeed;

    nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
    nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

    nekoEl.style.left = `${nekoPosX - 16}px`;
    nekoEl.style.top = `${nekoPosY - 16}px`;

    // Leave a paw print every few steps while running.
    pawTick += 1;
    if (pawTick % 3 === 0) {
      spawnPawPrint();
    }
  }

  init();
})();
