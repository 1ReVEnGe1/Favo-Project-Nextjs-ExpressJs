import Link from "next/link"


const ContactUs = () => {
    return (
        <>
            <div className="context">
                <div className="context-inner">
                    <h1 className="text-white">Plan Your <span className="text-secondary">Wedding</span></h1>
                    <div style={{ direction: 'ltr' }} className="flex flex-col items-center text-white  mt-8">
                        <Link href={'tel:+982122605106'} >
                            <span className="text-4xl text-center hover:text-secondary cursor-pointer w-fit">021-22 60 5106</span>
                        </Link>
                        <Link href={'tel:+989125348339'}>
                            <span className="text-4xl text-center hover:text-secondary cursor-pointer w-fit">0912 534 8339</span>
                        </Link>
                        <Link href={'tel:+989129008011'}>
                            <span className="text-4xl text-center hover:text-secondary cursor-pointer w-fit">0912 900 8011</span>
                        </Link>

                    </div>
                    <div className="footer-favo-socials mt-8">
                        <Link href={'#'} className="bg-primary " >
                            <i className="fa-brands fa-telegram text-white" aria-hidden="true"></i>
                        </Link>
                        <Link href={'#'} className="bg-primary " tabIndex={0} autoFocus={true}>
                            <i className="fa-brands fa-instagram text-white" aria-hidden="true" ></i>
                        </Link>
                        <Link href={'#'} className="bg-primary ">
                            <i className="fa-brands fa-whatsapp text-white" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <Link href={'/'}>
                        <span className=" text-4xl text-secondary text-center block w-full mt-8 hover:text-lightYellow">
                            Back to Home <span className="text-white">&#10594;</span>
                        </span>
                    </Link>
                </div>
            </div>


            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </>
    )
}

export default ContactUs