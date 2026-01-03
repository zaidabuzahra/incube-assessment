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

The project utilizes redux toolkit to manage global states between components. The redux store is used as the access point to all the slices in the project. Slices hold the states of certain components.
There are 4 slices created for this project:
- Filter Slice:
	- stores and updates selected tags -> accessed by the "filtration.tsx" to dispatch updating selected tags that are used in "selector.ts" to apply the filtration
	- stores and updates selected user ID -> accessed by the "filtration.tsx" to dispatch updating selected user id that are used in "selector.ts" to apply the filtration
	- stores and updates inserted search query -> accessed by "filtration.tsx" to update the text and "post.tsx" to apply highlighting features on text that matches the query.
- Page Slice:
	- stores and updates the current live page -> accessed by "pagination.tsx" to listen to button clicks for "previous" and "next" buttons and update page state
  	- stores and updates the page size -> accessed by "pagination.tsx" to listen to changes done to the button
- Post Slice:
	- stores the list of posts that have been fetched from dummyjson beforehand => I don't think this is ideal structure, however I did this to get global access to post list for potential use in comments page
- Sort Slice:
	- stores state of the value it tracks for sorting -> accessed by "filtration.tsx" and "selector.ts" => I separated sortSlice from filterSlice for readability purposes
	- stores state of the direction "asc" or "desc" of listing the data -> accessed by "filtration.tsx" and "selector.ts"
Created 5 types:
- Posts: to integrate json
- Page: used for pagination and pageSlice
- Filters: used for filtration and filterSlice
- Sort: used for sorting and sortSlice
- Comments: to intgerate json

There are 2 page.tsx files, one for the PostPage and the second for CommentsPage, using "useRouter()" and "useParams()" to change between them.
Components are separated to: 
- filtration: Holds the UI and data needed for filtration to work and dispatch
- pagination: Holds the UI and data needed for pagination to work and dispatch
- post: Holds the UI template for posts and has the functionality of highlighting text that comes from the search query
- sorting: Holds the UI and data needed for sorting to work and dispatch

## Improvement Points
Here are the shortcomings in the features and some tradeoffs I had to do:
- The comments fetched from comments' json doesn't correlate with posts' json as they don't hold a connecting data. "postsId" in comments'json is way too high for the "id" in posts' json. Because of this, the application returns comments based on its own id rather than the "postId" value it has. This means each post has exactly 1 comment.
- The above shortcoming happens again when the application filters by userId as it has the same problem. However, this time I used the userId provided regardless, and this is why there are so many users that don't have any posts under their accounts. I wasn't sure which direction I needed to do (take userId/postId and have empty entries or take the respective id and ensure a single entry), so I decided to do both directions in different places, one through comments posting and the other through userId filtration.
- Sorting might not require its own component as it can be part of the filtration component. I was unsure which structure to move forward with, but I chose to go with the one I am more comfortable with to have them separated due to my game development experience.
- I believe the strucutre of the selector can be enhanced to align better with redux conventions
  
## Incomplete tasks:
I have spent my time during the 10 day period to learn next.js, react, and redux toolkit. I was able to finish the first level, but other features, especially authentication and login features, I was able to start understanding how it would be done, but didn't get enough time to implement it. I wrote api/route.js as I was experimenting and part of the learning process and decided to keep it in for your review.

## Author
Zaid Abuzahra
Game Developer/Designer & Junior Frontend Engineer
