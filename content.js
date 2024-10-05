const disableDeleteButtons = () => {
  // ボタンを取得
  const deleteButtons = document.querySelectorAll('div[aria-label="Delete"]');

  // ボタンを無効化
  deleteButtons.forEach((button) => {
    button.style.display = 'none';
  });
};

// MutationObserverをセットアップしてDOMに変更があったら実行する
const observer = new MutationObserver((mutationList, observer) => {
  for (let mutation of mutationList) {
    if (mutation.type === 'childList') {
      disableDeleteButtons();
    }
  }
});

// 監視対象
const targetNode = document.body;

// 監視オプション
const config = {
  childList: true,
  subtree: true,
};

// 監視開始
observer.observe(targetNode, config);

// 初回実行
disableDeleteButtons();