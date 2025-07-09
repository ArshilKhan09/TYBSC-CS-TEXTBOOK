function downloadFile(filename) {
  const filePath = `books/${filename}`;
  const link = document.createElement('a');
  link.href = filePath;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
