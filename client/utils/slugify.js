export const slugify = (text) => {
    const slug = text
        .toLowerCase()
        .replace(/\s+/g, '-')  // Replace spaces with hyphens
        .replace(/[^\w\-آ-ی]+/g, '')  // Allow Persian characters (آ-ی) in the slug
        .replace(/\-\-+/g, '-')  // Replace multiple hyphens with a single hyphen
        .replace(/^-+/, '')  // Trim hyphens from the start
        .replace(/-+$/, '');  // Trim hyphens from the end

    // Limit the slug length to 100 characters
    return slug.length > 100 ? slug.slice(0, 100) : slug;
}
