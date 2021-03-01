let $receiptBook = document.querySelector('#receipt-book')

async function getReceipts() {
  let res = await fetch('http://localhost:1717/pastry')
  let receipts = await res.json()
  return receipts
}

async function renderRecepts() {
  let receipt = await getReceipts()
  $receiptBook.insertAdjacentHTML(
    'beforeend',
    `<table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Ingredients</th>
      <th scope="col">In Stock</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
  </table>
  `
  )

  $receiptTable = $receiptBook.querySelector('.table')

  receipt.forEach(({ name: receiptName, ingredients, inStock }) => {
    $receiptTable.insertAdjacentHTML(
      'beforeend',
      `
    <tr>
    <td>${receiptName}</td>
    <td>${ingredients.join(' | ')}</td>
    <td>${inStock}</td>
    </tr>
    `
    )
  })
}

renderRecepts()
