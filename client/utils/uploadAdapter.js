export default class UploadAdapter {
    constructor(loader){
        this.loader = loader
    }

    upload(){
        return this.loader.file.then((file)=> {
            return new Promise((resolve , reject)=> {
                const formData = new FormData();
                formData.append('file' , file);

                fetch('http://localhost:8080/api/dashboard/upload-image' , {
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