A modern posts browsing application built with Next.js App Router, Redux Toolkit, and Tailwind CSS.
The app allows users to browse, search, filter, sort, paginate posts, and view comments per post.

This project was built as a technical assessment with an emphasis on clean state management, scalable architecture, and good UX practices.

## Getting Started

Install the project from the GitHub repository: https://github.com/zaidabuzahra/incube-assessment

After installing the GitHub repo, you need to install dependencies redux toolkit and react-redux using:

```bash
npm install @reduxjs/toolkit react-redux
```

Now, you can start the program using:
```bash
npm run dev
```

Finally, open 
```bash
http://localhost:3000
```

## Features
- Posts Page:
	- Fetches posts from dummyjson.com/posts and renders the filtered/sorted bunch
	- Posts are clickable to redirect you to the comments page
- Filtration:
	- Search by title
	- Filter by tag(s)
	- Filter by userID
- Sorting:
	- Sort by: ID, Views, Likes, and Dislikes
	- Toggle asc/desc order
- Pagination:
	- Page navigation (Next page/ Previous page)
	- Dynamic switch for page size (5, 10, 20)
- Comments Page:
	- Navigating to a page that fetches and renders the comments associated with the selected post

## Architecture


## Improvement Points


## Author
