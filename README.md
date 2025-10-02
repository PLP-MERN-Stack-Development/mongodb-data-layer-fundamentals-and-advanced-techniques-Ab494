# MongoDB Fundamentals - Week 1

## Overview

This repository contains my Week 1 MongoDB assignment, demonstrating:

- Setting up a MongoDB database and collection
- Inserting sample book data
- Performing CRUD operations
- Advanced queries with filtering, projection, sorting, and pagination
- Aggregation pipelines
- Indexing for performance optimization

---

## Files Included

- `insert_books.js` – Script used to populate the `plp_bookstore` database with sample books.
- `queries.js` – MongoDB queries covering CRUD operations, advanced queries, aggregations, and indexing.
- `screenshot.png` – Screenshot showing the `plp_bookstore` database and sample data in MongoDB Compass (or Atlas).
- `README.md` – This file explaining the project and how to run it.

---

## Database Setup

- Database created: `plp_bookstore`
- Collection created: `books`
- Sample data: 12 book documents with fields:
  - `title`, `author`, `genre`, `published_year`, `price`, `in_stock`, `pages`, `publisher`

---

## How to Run

### 1. Populate the Database

Run the following command in your terminal:

```bash
mongosh < insert_books.js

This creates the plp_bookstore database and inserts sample book data.
2. Run Queries

Execute all MongoDB queries in queries.js:

mongosh < queries.js

    Note: These scripts should be run in mongosh. Ignore VS Code warnings about use plp_bookstore.

3. Verify Data

Open MongoDB Compass (or Atlas) to view the books collection in the plp_bookstore database and confirm your data.
Features Implemented
CRUD Operations

    Find books by genre, author, or publication year

    Update the price of a specific book

    Delete a book by title

    Filter books in stock

Advanced Queries

    Projection (return only title, author, price)

    Sorting by price (ascending & descending)

    Pagination (5 books per page)

    Find books in stock and published after 2010

Aggregations

    Average price of books by genre

    Author with the most books

    Group books by publication decade and count them

Indexing

    Index on title for faster search

    Compound index on author and published_year

    Query performance demonstrated with explain()

Screenshot

    screenshot.png shows the books collection with sample data in MongoDB Compass or Atlas.

Notes

    All operations were performed using mongosh.

    Queries in queries.js demonstrate my understanding of MongoDB fundamentals.

    