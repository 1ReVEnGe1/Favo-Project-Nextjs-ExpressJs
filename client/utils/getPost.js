export const getPost = async (blogId) => {
  
        const response = await fetch(`http://localhost:8080/api/dashboard/get-post/${blogId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type':'application/json'
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch blog data');
        }

        const blog = await response.json()
        return blog

   

}