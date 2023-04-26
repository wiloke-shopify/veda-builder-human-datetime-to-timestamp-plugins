export const copyToClipboard = (content: string) => {
  const textArea = document.createElement('textarea');
  textArea.style.width = '1px';
  textArea.style.height = '1px';
  textArea.style.background = 'transparents';
  textArea.value = content;
  document.body.append(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
};
