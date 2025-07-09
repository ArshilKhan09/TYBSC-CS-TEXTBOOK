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

// Download only when clicking the icon, with confirmation, message, and open button
document.querySelectorAll(".download-icon").forEach(el => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    const index = e.target.dataset.index;
    if (index !== undefined) {
      const fileName = books[index];
      const confirmDownload = confirm(`Do you want to download "${fileName}"?`);
      if (confirmDownload) {
        const filePath = `books/${fileName}`;

        // Show status message
        const statusSpan = e.target.parentElement.querySelector('.status-message');
        if (statusSpan) {
          statusSpan.innerHTML = `Downloading...`;

          // Create Open button
          const openBtn = document.createElement('button');
          openBtn.textContent = "Open";
          openBtn.className = "open-button";
          openBtn.onclick = () => window.open(filePath, "_blank");
          statusSpan.appendChild(openBtn);
        }

        // Trigger file download
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Optional: Clear message after 5 seconds
        setTimeout(() => {
          if (statusSpan) statusSpan.textContent = "";
        }, 5000);
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
