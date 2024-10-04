(function() {
  // 获取具有指定类名的所有按钮
  const buttons = document.querySelectorAll('.items-center.justify-center.bg-green-600.text-xl.font-bold');

  // 定义一个函数来模拟点击
  function simulateClick(element) {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    element.dispatchEvent(event);
  }

  // 设置一个间隔定时器来循环点击
  const intervalId = setInterval(() => {
    buttons.forEach(button => {
      simulateClick(button);
    });
  }, 1000); // 每1000毫秒（1秒）点击一次

  // 10秒后停止点击（可以根据需要调整）
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('自动点击已停止');
  }, 10000);

  console.log('自动点击已开始，将在10秒后自动停止');
})();