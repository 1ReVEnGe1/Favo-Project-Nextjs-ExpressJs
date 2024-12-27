const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

export const getPost = async (blogId) => {
  
        const response = await fetch(`${base_url}/api/dashboard/get-post/${blogId}`, {
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