import './loading.css'

export default function Loading() {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="loader">
                <figure className="iconLoaderProgress">
                    <svg className="iconLoaderProgressFirst" width="120" height="120">
                        <circle cx="60" cy="60" r="50"></circle>
                    </svg>

                    <svg className="iconLoaderProgressSecond" width="120" height="120">
                        <circle cx="60" cy="60" r="50"></circle>
                    </svg>
                </figure>
            </div>
        </div>



    );
}
