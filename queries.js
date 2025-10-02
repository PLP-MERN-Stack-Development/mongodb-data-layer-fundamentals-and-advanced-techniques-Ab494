// queries.js - MongoDB CRUD, Advanced Queries, Aggregation, Indexing

// Switch to plp_bookstore database
use plp_bookstore

// 1. Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// 2. Find books published after 2000
db.books.find({ published_year: { $gt: 2000 } })

// 3. Find books by a specific author
db.books.find({ author: "George Orwell" })

// 4. Update price of a specific book
db.books.updateOne({ title: "1984" }, { $set: { price: 13.99 } })

// 5. Delete a book by title
db.books.deleteOne({ title: "Moby Dick" })

// 6. Find books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// 7. Projection - show only title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// 8. Sort books by price ascending
db.books.find().sort({ price: 1 })

// 9. Sort books by price descending
db.books.find().sort({ price: -1 })

// 10. Pagination - first 5 books
db.books.find().limit(5)

// 11. Pagination - next 5 books
db.books.find().skip(5).limit(5)

// ---------------- AGGREGATIONS ----------------

// 12. Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// 13. Author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// 14. Group books by decade of publication
db.books.aggregate([
  {
    $group: {
      _id: {
        $multiply: [
          { $floor: { $divide: ["$published_year", 10] } },
          10
        ]
      },
      count: { $sum: 1 }
    }
  }
])

// ---------------- INDEXING ----------------

// 15. Create index on title
db.books.createIndex({ title: 1 })

// 16. Create compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 })

// 17. Explain query performance
db.books.find({ title: "1984" }).explain("executionStats")
