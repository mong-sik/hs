// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "손할머님의 왕큰 손하트~" },
  { "number": 2, "message": "돈 많고 도박 좋아하는 미치광이 노란머리 아저씨" },
  { "number": 3, "message": "인중 있는 (거의) 유일한 사진" },
  { "number": 4, "message": "여친짤" },
  { "number": 5, "message": "왜 그렇게 쳐다 봐?" },
  { "number": 6, "message": "너무 행복해서 우는 혜수" },
  { "number": 7, "message": "자아도취" },
  { "number": 8, "message": "행복한 쿼카" },
  { "number": 9, "message": "낚시바늘에 걸린 물고기 " },
  { "number": 10, "message": "입이 삐뚤어질대로 삐뚤어진 혜수" },
  { "number": 11, "message": "여름엔 역시 국밥이지~!6v6" },
  { "number": 12, "message": ".." },
  { "number": 13, "message": "이 맛에 산다 내가~!" },
  { "number": 14, "message": "우쭈쭈 먹을 생각에 행복한 혜수" },
  { "number": 15, "message": "잘 부탁드립니다 스승님~!" },
  { "number": 16, "message": "샤머탕후루가 좋은 손재민이" },
  { "number": 17, "message": "치열한 경쟁" },
  { "number": 18, "message": "야무지게 먹어야지~!" },
  { "number": 19, "message": "맨날 도박장에 죽치고 있는 왕이모" },
  { "number": 20, "message": "그 사진." },
  { "number": 21, "message": "밤 새서 행복한 혜수!" },
  { "number": 22, "message": "앞니는 없어도 행복한 그녀" },
  { "number": 23, "message": "보통이 아닌 언니" },
  { "number": 24, "message": "알사탕~" }
];

// 전역에서 한 번만 실행되도록 클릭 이벤트 리스너를 등록
const doors = document.querySelectorAll('.door');
doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    // 상위 div의 class 번호를 찾아서 image url에 사용합니다
    const imageUrl = `image/card/card-${index + 1}.jpg`;

    // 'back' 클래스를 가진 요소를 찾아 스타일을 가져옵니다.
    const doorDiv = document.querySelector(`.day-${index + 1}`)
    const backDiv = doorDiv.querySelector(`.back`);

    const style = window.getComputedStyle(backDiv);
    const pTag = backDiv.querySelector('p')
    const text = modalMessageList[index]['message']

    // showModal 함수를 호출하여 모달을 표시합니다.
    showModal(imageUrl, text);
    // alert('이벤트 캘린더를 엽니다.');
  });
});