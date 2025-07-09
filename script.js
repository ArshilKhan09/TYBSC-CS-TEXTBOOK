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

// Assign download event
document.querySelectorAll('.book').forEach((el, index) => {
  el.addEventListener('click', () => {
    const filePath = `books/${books[index]}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = books[index];
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

// Search filter
document.getElementById("searchInput").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  const books = document.querySelectorAll(".book");
  books.forEach(book => {
    const text = book.textContent.toLowerCase();
    book.style.display = text.includes(filter) ? "block" : "none";
  });
});

// Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
