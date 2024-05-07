(function () {
    let complete1 = false;
    let complete2 = false;

    let isAnimationRunning = true;
    let isAnimationRunning2 = true;
  
    let waterDropInterval = null; // 물방울 떨어뜨리기 반복을 위한 전역 변수
    let waterDropInterval2 = null; // 물방울 떨어뜨리기 반복을 위한 전역 변수
    let dropTimeouts = []; // 물방울 생성 타이머 ID를 저장하기 위한 배열
  
    function startAnimation() {
      waterRiseAnimation.play();
      waterRiseAnimation2.play();
      dropWater(); // 즉시 물방울 떨어뜨리기 시작
      waterDropInterval = setInterval(dropWater, 500);
    }
  
    function startAnimation2() {
      waterRiseAnimation2.play();
      dropWater2(); // 즉시 물방울 떨어뜨리기 시작
      waterDropInterval2 = setInterval(dropWater2, 500);
    }
  
    function stopAnimation() {
      waterRiseAnimation.pause();
      dropTimeouts.forEach(function (timeoutId) {
        clearTimeout(timeoutId);
      });
      dropTimeouts = [];
      clearInterval(waterDropInterval);
      waterDropInterval = null;
      console.log("애니 끝");
    }
  
    function stopAnimation2() {
      waterRiseAnimation2.pause();
      dropTimeouts.forEach(function (timeoutId) {
        clearTimeout(timeoutId);
      });
      dropTimeouts = [];
      clearInterval(waterDropInterval2);
      waterDropInterval2 = null;
      console.log("애니 끝");
    }
  
    const waterRiseAnimation = gsap.fromTo(
      ".water",
      {
        background: "linear-gradient(to top, #BDDCDE 0%, transparent 0%)",
      },
      {
        duration: 15, // 애니메이션이 진행되는 시간(초)
        background: "linear-gradient(to top, #B5F6FF 100%, transparent 0%)",
        ease: "none",
      }
    );
  
    const waterRiseAnimation2 = gsap.fromTo(
      ".water2",
      {
        background: "linear-gradient(to top, #BDDCDE 0%, transparent 0%)",
      },
      {
        duration: 10, // 애니메이션이 진행되는 시간(초)
        background: "linear-gradient(to top, #B5F6FF 100%, transparent 0%)",
        ease: "none",
      }
    );
  
    function dropWater() {
      for (let i = 0; i < 20; i++) {
        const timeoutId = setTimeout(function () {
          createDrop(i);
        }, i * 150); // i * 150ms 간격으로 각 물방울이 시작됨
        dropTimeouts.push(timeoutId);
      }
    }
  
    function createDrop(i) {
      const drop = document.createElement("div");
      drop.className = "drop";
      const showerHead = document.querySelector(".shower-head");
      if (showerHead) {
        const showerHeadRect = showerHead.getBoundingClientRect();
        const offset = ((i % 20) - 10) * 2.5;
        drop.style.position = "absolute";
        drop.style.left = `${
          showerHeadRect.left + showerHeadRect.width / 2 - 2.5 + offset
        }px`;
        drop.style.top = `${showerHeadRect.bottom}px`;
        document.body.appendChild(drop);
        gsap.fromTo(
          drop,
          {
            y: 0,
            autoAlpha: 1,
          },
          {
            duration: 1, // 애니메이션 지속 시간
            y: window.innerHeight * 0.2, // 화면 높이의 20%만큼 이동
            autoAlpha: 0,
            ease: "none",
            onComplete: function () {
              drop.remove();
            },
          }
        );
      }
    }
  
    function dropWater2() {
      for (let i = 0; i < 10; i++) {
        const timeoutId = setTimeout(function () {
          createDrop2(i);
        }, i * 150); // i * 150ms 간격으로 각 물방울이 시작됨
        dropTimeouts.push(timeoutId);
      }
    }
  
    function createDrop2(i) {
      const drop2 = document.createElement("div");
      drop2.className = "drop2";
      const showerHead = document.querySelector(".washstand-head");
      if (showerHead) {
        const showerHeadRect = showerHead.getBoundingClientRect();
        const offset = ((i % 20) - 5) * 4;
        drop2.style.position = "absolute";
        drop2.style.left = `${
          showerHeadRect.left + showerHeadRect.width / 2 - 2.5 + offset
        }px`;
        drop2.style.top = `${showerHeadRect.bottom}px`;
        document.body.appendChild(drop2);
        gsap.fromTo(
          drop2,
          {
            y: 0,
            autoAlpha: 1,
          },
          {
            duration: 0.7, // 애니메이션 지속 시간
            y: window.innerHeight * 0.1, // 화면 높이의 20%만큼 이동
            autoAlpha: 0,
            ease: "none",
            onComplete: function () {
              drop2.remove();
            },
          }
        );
      }
    }
  
    document.querySelector(".handle").addEventListener("click", function () {
      isAnimationRunning = !isAnimationRunning;
  
      if (isAnimationRunning) {
        // 애니메이션을 시작하는 로직
        startAnimation();
        complete1 = false;
        console.log(complete1)
      } else {
        // 애니메이션을 중지하는 로직
        stopAnimation();
        complete1 = true;
        console.log(complete1)
      }
    });
  
    document.querySelector(".handle2").addEventListener("click", function () {
      isAnimationRunning2 = !isAnimationRunning2;
  
      if (isAnimationRunning2) {
        // 애니메이션을 시작하는 로직
        startAnimation2();
        complete2 = false;
        console.log(complete2)
      } else {
        // 애니메이션을 중지하는 로직
        stopAnimation2();
        complete2 = true;
        console.log(complete2)
      }
    });
  
    window.onload = function () {
      startAnimation();
      startAnimation2();
    };
  })();
  
  const imageCount = 60;
  const container = document.querySelector(".wallpapers");
  
  for (let i = 0; i < imageCount; i++) {
    const img = document.createElement("img");
    img.src = "svg파일/Rectangle 8.svg";
    img.alt = "벽지";
    container.appendChild(img);
  }
  