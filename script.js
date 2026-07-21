const copyButton = document.querySelector('#copyContract');

copyButton?.addEventListener('click', async () => {
  const contract = copyButton.dataset.contract;
  const label = copyButton.querySelector('b');
  try {
    await navigator.clipboard.writeText(contract);
    label.textContent = 'Copied';
    setTimeout(() => (label.textContent = 'Copy'), 1400);
  } catch {
    window.prompt('Copy contract:', contract);
  }
});
