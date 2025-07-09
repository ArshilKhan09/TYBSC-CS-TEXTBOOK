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

// Download with confirm and toast
document.querySelectorAll(".download-icon").forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    const index = e.target.dataset.index;
    if (index !== undefined) {
      const fileName = books[index];
      const filePath = `books/${fileName}`;
      const confirmDownload = confirm(`Do you want to download "${fileName}"?`);

      if (confirmDownload) {
        showToast(`Downloading "${fileName}"...`);

        const statusSpan = e.target.parentElement.querySelector('.status-message');
        if (statusSpan) {
          statusSpan.innerHTML = `Downloading... `;

          const openBtn = document.createElement('button');
          openBtn.textContent = "Open";
          openBtn.className = "open-button";
          openBtn.onclick = () => window.open(filePath, "_blank");
          statusSpan.appendChild(openBtn);
        }

        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  });
});

// Toast message function
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

// Search filter
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const books = document.querySelectorAll(".book");
  books.forEach(book => {
    const text = book.textContent.toLowerCase();
    book.style.display = text.includes(filter) ? "flex" : "none";
  });
});
