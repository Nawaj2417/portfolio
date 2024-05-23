
const itemsPerPage = 6;
let currentPage = 1;

function displayPortfolioItems(box) {
  const portfolioItems = document.querySelectorAll(`${box}`);
  const totalItems = portfolioItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  portfolioItems.forEach((item, index) => {
    if (index >= startIndex && index < endIndex) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function nextPage(box) {
  const totalItems = document.querySelectorAll(`${box}`).length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayPortfolioItems(box);
  }
}

function prevPage(box) {
  if (currentPage > 1) {
    currentPage--;
    displayPortfolioItems(box);
  }
}

// Call initial display
displayPortfolioItems(".portfolio-item");
displayPortfolioItems(".blog");
