function treeMake() {
  // 이미지 요소를 선택
  var treeImage = document.getElementById("treeImage");

  // 이미지를 body의 직계 자식으로 이동
  document.body.appendChild(treeImage);

  // GSAP 애니메이션 실행
  gsap.to("#treeImage", {
    duration: 1, // 1초 동안 애니메이션
    width: "90vw", // 이미지 너비를 화면 너비의 90%로 설정
    top: "50%", // 상단에서 50% 위치
    left: "50%", // 왼쪽에서 50% 위치
    xPercent: -50, // x축 기준 -50% 만큼 이동하여 중앙 정렬
    yPercent: -50, // y축 기준 -50% 만큼 이동하여 중앙 정렬
    position: "fixed", // 고정된 위치
    ease: "power1.out", // 부드러운 움직임을 위한 이징 함수
    onComplete: function () {
      const treeImage = document.getElementById("treeImage");
      treeImage.style.display = "none"; // treeImage를 안 보이게 설정

      const overlay = document.getElementById("overlay");
      overlay.style.display = "block"; // 오버레이 표시

      treeLoadAndExecuteScripts(); // 그 후 HTML 내용을 로드
    },
  });
}

function treeLoadAndExecuteScripts() {
  fetch("index2.html")
    .then((response) => response.text())
    .then((html) => {
      const contentArea = document.getElementById("contentArea");
      contentArea.innerHTML = html;
      contentArea.style.display = "block"; // 내용을 불러온 후 보이도록 설정

      // 스크립트 태그 찾기
      const scripts = contentArea.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");

        if (script.src) {
          // 외부 스크립트의 경우, src 속성을 설정
          newScript.src = script.src;
        } else {
          // 인라인 스크립트의 경우, 내용을 복사
          newScript.textContent = script.textContent;
        }

        document.body.appendChild(newScript);
      });
    })
    .catch((error) => console.error("Error loading the HTML content:", error));
}

function lightMake() {
  // 이미지 요소를 선택
  var lightImage = document.getElementById("lightImage");

  // 이미지를 body의 직계 자식으로 이동
  document.body.appendChild(lightImage);

  // GSAP 애니메이션 실행
  gsap.to("#lightImage", {
    duration: 1, // 1초 동안 애니메이션
    width: "90vw", // 이미지 너비를 화면 너비의 90%로 설정
    top: "50%", // 상단에서 50% 위치
    left: "50%", // 왼쪽에서 50% 위치
    xPercent: -50, // x축 기준 -50% 만큼 이동하여 중앙 정렬
    yPercent: -50, // y축 기준 -50% 만큼 이동하여 중앙 정렬
    position: "fixed", // 고정된 위치
    ease: "power1.out", // 부드러운 움직임을 위한 이징 함수
    onComplete: function () {
      const treeImage = document.getElementById("lightImage");
      treeImage.style.display = "none"; // treeImage를 안 보이게 설정

      const overlay = document.getElementById("overlay");
      overlay.style.display = "block"; // 오버레이 표시

      lightLoadAndExecuteScripts(); // 그 후 HTML 내용을 로드
    },
  });
}

function lightLoadAndExecuteScripts() {
  fetch("light.html")
    .then((response) => response.text())
    .then((html) => {
      const contentArea = document.getElementById("contentArea");
      contentArea.innerHTML = html;
      contentArea.style.display = "block"; // 내용을 불러온 후 보이도록 설정

      // 스크립트 태그 찾기
      const scripts = contentArea.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");

        if (script.src) {
          // 외부 스크립트의 경우, src 속성을 설정
          newScript.src = script.src;
        } else {
          // 인라인 스크립트의 경우, 내용을 복사
          newScript.textContent = script.textContent;
        }

        document.body.appendChild(newScript);
      });
    })
    .catch((error) => console.error("Error loading the HTML content:", error));
}

function waterMake() {
  // 이미지 요소를 선택
  var waterImage = document.getElementById("waterImage");

  // 이미지를 body의 직계 자식으로 이동
  document.body.appendChild(waterImage);

  // GSAP 애니메이션 실행
  gsap.to("#waterImage", {
    duration: 1, // 1초 동안 애니메이션
    width: "90vw", // 이미지 너비를 화면 너비의 90%로 설정
    top: "50%", // 상단에서 50% 위치
    left: "50%", // 왼쪽에서 50% 위치
    xPercent: -50, // x축 기준 -50% 만큼 이동하여 중앙 정렬
    yPercent: -50, // y축 기준 -50% 만큼 이동하여 중앙 정렬
    position: "fixed", // 고정된 위치
    ease: "power1.out", // 부드러운 움직임을 위한 이징 함수
    onComplete: function () {
      const treeImage = document.getElementById("waterImage");
      treeImage.style.display = "none"; // treeImage를 안 보이게 설정

      const overlay = document.getElementById("overlay");
      overlay.style.display = "block"; // 오버레이 표시

      waterLoadAndExecuteScripts(); // 그 후 HTML 내용을 로드
    },
  });
}

function waterLoadAndExecuteScripts() {
  fetch("test.html")
    .then((response) => response.text())
    .then((html) => {
      const contentArea = document.getElementById("contentArea");
      contentArea.innerHTML = html;
      contentArea.style.display = "block"; // 내용을 불러온 후 보이도록 설정

      // 스크립트 태그 찾기
      const scripts = contentArea.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");

        if (script.src) {
          // 외부 스크립트의 경우, src 속성을 설정
          newScript.src = script.src;
        } else {
          // 인라인 스크립트의 경우, 내용을 복사
          newScript.textContent = script.textContent;
        }

        document.body.appendChild(newScript);
      });
    })
    .catch((error) => console.error("Error loading the HTML content:", error));
}
