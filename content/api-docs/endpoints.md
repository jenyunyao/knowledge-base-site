# API Endpoints Documentation

This document provides a comprehensive list of the available API endpoints for the knowledge base site. Each endpoint includes a description, the HTTP method used, and the expected parameters.

## Base URL
```
https://api.knowledgebase.example.com/v1
```

## Endpoints

### 1. Get All Articles
- **Endpoint:** `/articles`
- **Method:** `GET`
- **Description:** Retrieves a list of all articles in the knowledge base.
- **Parameters:**
  - `page` (optional): The page number for pagination.
  - `limit` (optional): The number of articles to return per page.

### 2. Get Article by ID
- **Endpoint:** `/articles/{id}`
- **Method:** `GET`
- **Description:** Retrieves a specific article by its ID.
- **Parameters:**
  - `id` (required): The ID of the article to retrieve.

### 3. Create a New Article
- **Endpoint:** `/articles`
- **Method:** `POST`
- **Description:** Creates a new article in the knowledge base.
- **Parameters:**
  - `title` (required): The title of the article.
  - `content` (required): The content of the article.
  - `category` (optional): The category to which the article belongs.

### 4. Update an Article
- **Endpoint:** `/articles/{id}`
- **Method:** `PUT`
- **Description:** Updates an existing article.
- **Parameters:**
  - `id` (required): The ID of the article to update.
  - `title` (optional): The new title of the article.
  - `content` (optional): The new content of the article.
  - `category` (optional): The new category of the article.

### 5. Delete an Article
- **Endpoint:** `/articles/{id}`
- **Method:** `DELETE`
- **Description:** Deletes an article from the knowledge base.
- **Parameters:**
  - `id` (required): The ID of the article to delete.

### 6. Search Articles
- **Endpoint:** `/articles/search`
- **Method:** `GET`
- **Description:** Searches for articles based on a query string.
- **Parameters:**
  - `query` (required): The search term to filter articles.
  - `page` (optional): The page number for pagination.
  - `limit` (optional): The number of articles to return per page.

### 7. Get Categories
- **Endpoint:** `/categories`
- **Method:** `GET`
- **Description:** Retrieves a list of all categories available in the knowledge base.

### 8. Get Articles by Category
- **Endpoint:** `/categories/{category}/articles`
- **Method:** `GET`
- **Description:** Retrieves articles that belong to a specific category.
- **Parameters:**
  - `category` (required): The category for which to retrieve articles.

## Authentication
To access these endpoints, you must include an API key in the request headers. The API key can be obtained by registering on the knowledge base site.

### Example Header
```
Authorization: Bearer YOUR_API_KEY
```

## Conclusion
This document serves as a guide for developers to interact with the knowledge base API effectively. For further assistance, please refer to the [authentication documentation](authentication.md) or contact support.