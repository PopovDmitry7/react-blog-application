# 📰 React Blog Application – Intern Task

This project is a simple blog application built with **React** and **Material UI** as part of a frontend internship task.

## 📌 Task Requirements

### 1. React Application Setup
- Initialize the project using **Create React App** or **Vite**.
- Use **functional components** and **React hooks** like `useState` and `useEffect`.

### 2. UI Design with Material UI
- Use [Material UI (MUI)](https://mui.com/) to design a clean and responsive interface.
- Use components like `Card`, `Typography`, `Button`, etc.

### 3. Blog Data via API
- Use the following API endpoints:
    - Blog Posts: `https://jsonplaceholder.typicode.com/posts`
    - Comments: `https://jsonplaceholder.typicode.com/comments`
- Display a list of blog posts with title and short description.

### 4. Post Detail Page
- When a user clicks on a blog post:
    - Navigate to a **Post Detail Page**.
    - Display:
        - Full blog **title**
        - Blog **content** (post body)
        - A list of **comments** related to the post (`postId`)
        - A **Back button** to return to the blog list

### 5. Routing
- Use **React Router** to manage navigation:
    - `/` → Blog list page
    - `/post/:id` → Post details page

### 6. Pagination for Blog List
- Chunk posts into pages.
- Default page size = 10 (feel free to tweak).
- Show MUI Pagination component at bottom.

### 7. Page-Size Selector
- Add a dropdown (e.g. MUI Select) letting users choose how many posts per page

### 8. Title Sorting Filter
- Provide A→Z and Z→A options – a simple toggle or Select.
- Sorting should integrate smoothly with search & pagination (e.g., apply sort first, then paginate).

### 9. Create Contact page with Contact Us form
- Utils used for this:
    - react-web-hook for form & validation
    - emailjs for sending real-time emails
    - Material UI form components

## 🌟 Bonus (Optional)
- Show a loading spinner while fetching data.
- Handle errors gracefully (e.g., display a message if data fails to load).
- Add a search bar to filter posts by title.
- Use TypeScript for type safety.

## 🚀 Getting Started

### Install dependencies:
```bash
npm install
# or
yarn install
```

## 📂 Project Structure (Suggested)

src/
├── components/
│   ├── BlogList.tsx
│   ├── BlogPostCard.tsx
│   └── PostDetail.tsx
├── pages/
│   ├── Home.tsx
│   └── Post.tsx
├── App.tsx
├── index.tsx
└── api/
    └── blog.ts

