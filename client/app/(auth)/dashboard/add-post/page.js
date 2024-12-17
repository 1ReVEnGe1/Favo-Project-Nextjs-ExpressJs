'use client'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import UploadAdapter from '@/utils/uploadAdapter';
import { slugify } from '@/utils/slugify';


// CKEditor Should Load Dynamicaly
const CKEditor = dynamic(
  () => import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor),
  { ssr: false }
);


const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [status, setStatus] = useState('private');
  const [error, setError] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [brief, setBrief] = useState('');
  const [faqs, setFaqs] = useState([]);
  const [faqQuestion, setFaqQuestion] = useState('');
  const [faqAnswer, setFaqAnswer] = useState('');
  const [url, setUrl] = useState('');
  const [slugUrl, setSlugUrl] = useState('');
  const [keywords , setKeywords] = useState('')

  const router = useRouter();

  const base_url = process.env.NEXT_PUBLIC_BASE_URL_FRONT


  //Upload Adapter for adding image into the text editor
  const addUploadAdapter = (editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new UploadAdapter(loader);
    };
  }


  //Handle Upload thumbnail 
  const handleThumbnailChange = (e) => {
    const file = e.target.files[0]
    setThumbnail(file || null)

    if (file) {
      const reader = new FileReader();
      reader.onload = () => setThumbnailPreview(reader.result);
      reader.readAsDataURL(file)
    } else {
      setThumbnailPreview('')
    }
  }


  //Hanlde submit form 
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Adding ID to headings
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');

    //Find all h2 elements
    doc.querySelectorAll('h2').forEach(heading => {
      if (!heading.id) {
        heading.id = heading.textContent.replace(/\s+/g, '-').toLowerCase();
      }
    });

    //Update content with id 
    const updatedContent = doc.body.innerHTML;
    setContent(updatedContent)

    //Append data to the formdata
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', updatedContent);
    formData.append('status', status);
    formData.append('brief', brief);
    formData.append('faqs', JSON.stringify(faqs));
    formData.append('slug', slugUrl);
    formData.append('keywords', keywords);

    //Append thumbnail when thumbnail has value
    if (thumbnail) {
      formData.append('thumbnail', thumbnail);
    }

    try {
      //Get Token from local storage
      const token = localStorage.getItem('token');

      //Send request to the backend 
      const response = await fetch('http://localhost:8080/api/dashboard/create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      })


      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData)
        setError(errorData);

        return;
      }

      alert('Post Added Successfully');
      router.push('/dashboard');

    } catch (error) {
      setError('Something went wrong, please try again later');
      console.error('Error:', error);
    }

  }


  //Change Blog Status
  const handleStatusChange = (e) => {
    setStatus(e.target.value)
  }


  //Handle Add FAQ
  const handleAddFaq = (e) => {
    e.preventDefault();

    if (!faqQuestion || !faqAnswer) {
      alert('لطفا سوال و جواب را وارد کنید')
      return
    }
    const FAQ = {
      question: faqQuestion,
      answer: faqAnswer
    }
    setFaqs([...faqs, FAQ]);
    setFaqQuestion('');
    setFaqAnswer('');
  }


  //Hanle Delete FAQ
  const handleDeleteFaq = (e, index) => {
    e.preventDefault();
    const updatedFaq = faqs.filter((_, i) => {
      return i !== index
    })
    setFaqs(updatedFaq)
  }


  //------------- Hanlde URL Input -------------
  const handleURL = async (e) => {
    e.preventDefault();

    if (!url) {
      alert('باید حتما یک URL یونیک انتخاب کنی.')
    }

    const slugifiedUrl = slugify(url);


    try {
      //Get Token from local storage
      const token = localStorage.getItem('token');

      //Send Req to check if specified url does exist or not
      const res = await fetch(`${base_url}/api/dashboard/check-url-exist`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: slugifiedUrl })
      })

      if (!res.ok) {
        console.log(res);
        throw new Error('CHECKING URL REQUEST IS NOT OK.')
      }

      const data = await res.json();

      if (data.isUniqueUrl) {
        return setSlugUrl(slugifiedUrl)
      }
      return alert('این URL ی که نوشتی از قبل وجود داره. یک URL دیگه بنویس.')

    } catch (error) {

      console.log('error 500 BROTHER:', error);
    }


  }

  return (
    <>
      <div style={{ backgroundColor: '#1E1E1E' }} className='p-6 space-y-2 md:space-y-6 sm:p-8 max-w-2xl mx-auto mt-20 mb-24 rounded-3xl'>

        <div className='login-page-title'>
          <h1 className='flex items-center mb-6 text-2xl font-semibold text-white'>نوشتن وبلاگ جدید</h1>
        </div>
        <div>
          {/* Handle Errors */}
          {
            error && (Array.isArray(error.message) // if errors are array of objects
              ? error.message.map((err, index) => (
                <p key={index} style={{ color: 'red' }}> {err} </p>
              ))
              : <p style={{ color: 'red' }}> {error.message} </p>) //if error is only an object
          }
        </div>


        {/* Add-Blog Form */}
        <form onSubmit={handleSubmit} className='space-y-4 md:space-y-6'>

          {/* ------------------Title--------------------- */}
          <label htmlFor='title' className='block mb-2 text-sm font-medium text-gray-100'>
            عنوان مقاله
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}

            id='title'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />

          {/* ------------------URL--------------------- */}
          <label htmlFor='URL' className='block mb-2 text-sm font-medium text-gray-100'>
            آدرس URL مقاله
          </label>
          <div className='flex gap-2'>
            <input
              type='text'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{ direction: 'ltr' }}
              id='URL'
              className='w-10/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            />
            <button
              onClick={handleURL}
              className='w-2/12 bg-gray-300 hover:bg-gray-400 text-center text-gray-800 text-sm py-1 px-4 rounded-lg items-center ' >
              بررسی  url
            </button>

          </div>
          {
            slugUrl && (
              <p
                style={{
                  direction: 'ltr',
                  fontSize: '13px',
                  backgroundColor: 'rgb(51 ,65 ,85)',
                  letterSpacing: '1.5px'
                }}
                className='text-gray-100 py-2 ps-4 rounded-md '
              >
                {base_url}/<span style={{ color: 'rgb(198 194 167)' }} >{slugUrl}</span>
              </p>
            )
          }



          {/* ---------------Thumbnail-------------------- */}
          <label htmlFor='thumbnail' className='block mb-2 text-sm font-medium text-gray-100'>
            عکس شاخص
          </label>
          <input
            type='file'
            accept='image/*'
            onChange={handleThumbnailChange}

            id='thumbnail'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />

          {/* ---------------Thumbnail Preview------------ */}
          {thumbnailPreview && (
            <div className="mt-1">

              <Image
                src={thumbnailPreview}
                width={100}
                height={100}
                alt='Thumbnail Preview'
                className='w-full h-auto max-w-28 border border-gray-300 rounded-lg'
              />

            </div>
          )}

          {/* --------------------Status-------------------- */}
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            وضعیت
          </label>
          <select
            id="status"
            value={status}
            onChange={handleStatusChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="private">خصوصی</option>
            <option value="public">عمومی</option>
          </select>


          {/* ----------------------Brief-------------------- */}
          <label
            htmlFor="brief"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            خلاصه مقاله (در حد 15 کلمه)
          </label>
          <textarea
            id='brief'
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
          >
            
          </textarea>


          {/* ----------------------FAQ------------------------ */}
          <div className='p-4 rounded-2xl ' style={{ "backgroundColor": 'rgb(11 44 55)' }}>
            <div className='flex justify-between'>
              <label
                htmlFor="faq"
                className="block mb-2 text-sm font-medium text-gray-100 "
              >
                سوالات متداول
              </label>
              {/* Add FAQ Button */}
              <button
                className={` bg-gray-300 hover:bg-gray-400  text-gray-800 text-sm py-1 px-4 rounded-lg inline-flex items-center `}
                onClick={handleAddFaq}
              >
                افزودن سوال
              </button>
            </div>

            <input
              type='text'
              placeholder='سوال '
              value={faqQuestion}
              onChange={(e) => setFaqQuestion(e.target.value)}
              id='faq-q'
              className='mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 '
            />
            <textarea
              id='faq-a'
              placeholder='جواب'
              value={faqAnswer}
              onChange={(e) => setFaqAnswer(e.target.value)}
              className='mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none  block w-full p-2.5 '
            />
            <hr className='mt-6' />
            {
              faqs && faqs.map((faq, index) => (
                <div className='mt-4 flex justify-between' key={index}>
                  <div>
                    <h4 className='font-bold text-gray-300'>{index + 1}. {faq.question}</h4>
                    <p className='text-sky-500 text-sm mt-1'>{faq.answer}</p>
                  </div>
                  <button
                    className={`bg-red-900 hover:bg-gray-400  text-white font-semibold text-sm py-1 px-4 rounded-lg inline-flex items-center `}
                    onClick={(e) => handleDeleteFaq(e, index)}
                  >
                    حذف سوال
                  </button>
                </div>
              ))
            }
          </div>



          {/* ---------------------Content---------------------- */}
          <label htmlFor='content' className='block mb-2 text-sm font-medium text-gray-100'>
            محتوا
          </label>
          <CKEditor
            editor={ClassicEditor}
            config={{
              language: 'fa',
              contentsLangDirection: 'rtl',
              heading: {
                options: [
                  { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                  { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                  { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
                  { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
                  { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
                  { model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5' },
                  { model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6' },
                ],
              },
            }}
            onReady={(editor) => {
              addUploadAdapter(editor);
              // const editableElement = editor.ui.view.editable.element;
              // editableElement.style.minHeight = '300px'; 

            }}
            data={content}
            onChange={(event, editor) => {
              setContent(editor.getData())
            }}
          />


          {/* ----------------------Keywords-------------------- */}
          <label
            htmlFor="keywords"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            کلمات کلیدی (بین 4 تا 8 کلمه)
          </label>
          <textarea
            id='keywords'
            value={keywords}
            placeholder='کلمات را با " , " از هم جدا کنید مثلا : گل آرایی, حریرآرایی'
            onChange={(e) => setKeywords(e.target.value)}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
          >
            
          </textarea>


          {/* Publish Button */}
          <button type="submit" className="w-full text-white bg-gray-600 hover:bg-gray-700 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            انتشار مقاله
          </button>

        </form>
      </div>
    </>
  )
}

export default AddPost

