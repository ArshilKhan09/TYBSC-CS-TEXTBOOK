const books = [
  "OOPS-USING-JAVA.pdf",
  "THEORETICAL-COMPUTER-SCIENCE-TEXTBOOK.pdf",
  "COMPUTER-NETWORK-2.pdf",
  "BLOCKCHAIN-TECHNOLOGY.pdf",
  "FOUNDATION-OF-DATA-SCIENCE.pdf",
  "OPERATING-SYSTEM-1.pdf",
  "PYTHON-PROGRAMMING (1).pdf",
  "WEB-TECHNOLOGY-1.pdf"
];

// Download only when clicking the icon
document.querySelectorAll(".download-icon").forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    const index = e.target.dataset.index;
    if (index !== undefined) {
      const filePath = `books/${books[index]}`;
      const link = document.createElement('a');
      link.href = filePath;
      link.download = books[index];
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
