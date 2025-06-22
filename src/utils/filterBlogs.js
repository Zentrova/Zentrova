// utils/filterBlogs.js
export const filterBlogs = ({ blogs, author, category, limit }) => {
  let filtered = blogs;

  if (author) {
    filtered = filtered.filter(blog => blog.author?.name === author);
  }

  if (category) {
    filtered = filtered.filter(blog => 
      blog.categories && Object.values(blog.categories).some(c => c.name === category)
    );
  }

  if (limit) {
    filtered = filtered.slice(0, limit);
  }

  return filtered;
};
