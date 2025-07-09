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

// Download only when clicking the icon, with confirmation
document.querySelectorAll(".download-icon").forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    const index = e.target.dataset.index;
    if (index !== undefined) {
      const fileName = books[index];
      const confirmDownload = confirm(`Do you want to download "${fileName}"?`);
      if (confirmDownload) {
        const filePath = `books/${fileName}`;
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

// Search filter
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const books = document.querySelectorAll(".book");
  books.forEach(book => {
    const text = book.textContent.toLowerCase();
    book.style.display = text.includes(filter) ? "flex" : "none";
  });
});
