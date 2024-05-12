// div 요소 가져오기
var resizableDiv = document.getElementById('resizableDiv');

// 마우스 다운 이벤트 처리
resizableDiv.addEventListener('mousedown', function(event) {
    // 시작 좌표 설정
    var startX = event.clientX;
    var startY = event.clientY;

    // div의 초기 크기
    var startWidth = parseInt(document.defaultView.getComputedStyle(resizableDiv).width, 10);
    var startHeight = parseInt(document.defaultView.getComputedStyle(resizableDiv).height, 10);

    // 마우스 이동 이벤트 처리
    function onMouseMove(event) {
        // 이동한 거리 계산
        var deltaX = event.clientX - startX;
        var deltaY = event.clientY - startY;

        // 새로운 너비 계산
        var newWidth = startWidth + deltaX;

        // 최소 및 최대 너비 설정
        var minWidth = 88; // 최소 너비
        var maxWidth = 800; // 최대 너비

        // 너비가 최소값보다 작으면 최소값으로, 최대값보다 크면 최대값으로 설정
        newWidth = Math.max(Math.min(newWidth, maxWidth), minWidth);

        // div의 새 너비 설정
        resizableDiv.style.width = newWidth + 'px';
    }

    // 마우스 업 이벤트 처리
    function onMouseUp(event) {
        // 이동 및 업 이벤트 리스너 제거
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    // 이벤트 리스너 추가
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
