const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT

export default class UploadAdapter {
    constructor(loader){
        this.loader = loader
    }

    upload(){
        return this.loader.file.then((file)=> {
            return new Promise((resolve , reject)=> {
                const formData = new FormData();
                formData.append('file' , file);

                fetch(`${base_url}/api/dashboard/upload-image` , {
                    method:'POST',
                    headers:{
                        'Authorization' : `Bearer ${localStorage.getItem('token')}`
                    },
                    body: formData
                })
                    .then(response => {
                        if(!response.ok){
                            return reject(`Could not upload file ${response.statusText}`)
                        }
                        return response.json()
                    })
                    .then(data => {
                        resolve({
                            default:data.url , //Uploaded file line
                        })
                    })
                    .catch(err=> {
                        reject('Upload failed')
                    })
            })
        })
    }

    abort(){
        //Stop Upload if it is neccessary
    }
}