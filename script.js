const books = [
  "OOPS-USING-JAVA.pdf",
  "THEORETICAL-COMPUTER-SCIENCE TEXTBOOK.pdf",
  "COMPUTER-NETWORK-2.pdf",
  "BLOCKCHAIN-TECHNOLOGY.pdf",
  "FOUNDATION-OF-DATA-SCIENCE.pdf",
  "OPERATING-SYSTEM-1.pdf",
  "PYTHON-PROGRAMMING (1).pdf",
  "WEB-TECHNOLOGY-1.pdf"
];

document.querySelectorAll(".download-icon").forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();

    const icon = e.currentTarget; // safer
    const index = icon.dataset.index;
    const fileName = books[index];
    const filePath = `books/${fileName}`;
    const confirmDownload = confirm(`Do you want to download "${fileName}"?`);

    if (confirmDownload) {
      showToast(`⬇️ Downloading "${fileName}"...`);

      const parent = icon.parentElement;
      const statusSpan = parent.querySelector('.status-message');
      statusSpan.innerHTML = `Downloading...`;

      setTimeout(() => {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        showToast(`✅ "${fileName}" downloaded successfully`);
        statusSpan.innerHTML = `✅ Downloaded`;
      }, 1500);
    }
  });
});
