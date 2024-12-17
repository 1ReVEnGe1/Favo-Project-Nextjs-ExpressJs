

import PageTop from "@/components/PageTop"
import './menu.css'
import Image from "next/image"

const Menu = () => {

    return (
        <div style={{ paddingTop: '100px' }}>
            <PageTop
                img='images/menu/MXP-19644-menu-marquee-001_cb=81124b1e414cf73a2ca5485f471bd791ef8a8678.png'
                title={'منو های پیشنهادی تشریفات عروسی فاوو ایونت'}

            />

            <main className="menu-cont mx-auto py-8 px-1 lg:px-3" style={{ maxWidth: '1100px' }}>

                {/* Wedding and aghd Menu */}
                <section className="text-center text-white py-4">
                    <h2 >
                        <span className=" inline-block border-b-4 border-secondary ">منو </span> های عروسی و عقد
                    </h2>
                </section>

                <section className="bg-headerSubmenu text-sm mt-6 text-center text-white py-6 px-4 rounded-2xl m-4 sm:mx-2">
                    <span
                        className="text-right w-full block text-lg"
                        style={{ fontFamily: 'RokhFaSemiBold', color: 'rgb(216, 247, 255)' }} >
                        نکته مهم !!!
                    </span>
                    <p className="text-right mt-4 text-gray-200">
                        این منو ها صرفا منوی های پیشنهادی تشریفات فاوو ایونت میباشد. شما عزیزان میتوانید هر آیتمی را که میخواهید به دلخواه و سلیقه خودتان و با توجه به بودجه مدنظرتان از منو های مختلف انتخاب کنید و منو اختصاصی خودتان را داشته باشید.
                    </p>
                </section>

                <section className="menu-favo-parent grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 sm:gap-4 mt-16 px-4 sm:px-2">

                    {/* Menu Number 0 */}
                    <div style={{ backgroundColor: '#44423b' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(103 100 88)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 0</span>
                        </div>

                        <div className="menu-label-economic ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12 7.5V16.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M17 3V7H21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M22 2L17 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            <span >منوی اقتصادی</span>
                        </div>

                        <ul>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره عقد</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه عروس و داماد (بدون گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند و نورپردازی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو پایه)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>

                        </ul>
                    </div>


                    {/* Menu Number 1 */}
                    <div style={{ backgroundColor: '#3b4444' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(75 86 86)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 1</span>
                        </div>
                        <ul>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین سفره عقد اختصاصی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی (میز میهمان ها)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین جایگاه عروس و داماد (همراه با گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند و نورپردازی(خواننده به همراه تیوی شهری)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو پایه)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>

                        </ul>

                    </div>


                    {/* Menu Number 2 */}
                    <div style={{ backgroundColor: '#3c3b44' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(95 93 108)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 2</span>
                        </div>
                        <ul>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره عقد اختصاصی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی (میز میهمان ها/توپی گل)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میزآرایی (دیزاین میز های مهمانان با انواع شو پلیت و...)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>کارت ولکام و کارت دعوت (طراحی و چاپ اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه عروس و داماد (به همراه گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند و نورپردازی(تیوی شهری و خواننده)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>نفر پرکاشن</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار (اوپراتور های مجزا به همراه تدوینگر )</span>
                            </li>

                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 2)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 2)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>آتش بازی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>

                        </ul>
                    </div>


                    {/* Menu Number 3 */}
                    <div style={{ backgroundColor: '#3b443e' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(108 128 115)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 3</span>
                        </div>

                        <div className="menu-label ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>
                            <span >دارای هدیه</span>
                        </div>


                        <ul>
                            <li>
                                <Image
                                    src={'/images/icons/gift-svgrepo-com.svg'}
                                    width={16}
                                    height={16}
                                    alt="گیفت عروسی"
                                    className="menu-gift-icon"
                                />
                                <span>آتش بازی (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <Image
                                    src={'/images/icons/gift-svgrepo-com.svg'}
                                    width={16}
                                    height={16}
                                    alt="گیفت عروسی"
                                    className="menu-gift-icon"
                                />
                                <span>میز یادبود (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره عقد اختصاصی به همراه گل آرایی ویژه</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی (گل آرایی اختصاصی میز میهمان ها)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میزآرایی (دیزاین میز های میهمانان با انواع شو پلیت و...)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شمع آرایی (شمع آرایی کریستال)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>کارت ولکام و کارت دعوت (طراحی و چاپ اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین جایگاه عروس و داماد (همراه با گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند استودیو و نورپردازی (خواننده و تیوی شهری)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>نفر پرکاشن و موسیقی زنده همراه دیجی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار برند (اوپراتور های مجزا و تدوینگر)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 3)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 3)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو شماره 2)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره خانه سنتی (خدمات هوکابار به همراه انواع چای و دمنوش)</span>
                            </li>

                        </ul>
                    </div>


                    {/* Menu Number 4 */}
                    <div style={{ backgroundColor: '#443b43' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(105 89 103)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 4</span>
                        </div>
                        <ul>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره عقد ژورنالی به همراه گل آرایی ویژه</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی (گل آرایی اختصاصی میز میهمان ها)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی  محیط(اجرا توسط تیم گل آرایی حرفه ای)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط ورودی مراسم</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میزآرایی (دیزاین میز های میهمانان با انواع شو پلیت و...)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شمع آرایی (شمع آرایی کریستال)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>کارت ولکام و کارت دعوت (طراحی و چاپ اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین جایگاه عروس و داماد اختصاصی (همراه با گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه کیک با دیزاین اختصاصی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند استودیو و نورپردازی (خواننده و تیوی شهری)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>نفر پرکاشن و موسیقی زنده همراه دیجی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار برند (اوپراتور های مجزا و تدوینگر)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 4)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 4)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو شماره 3)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>آتش بازی (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میز یادبود (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره خانه سنتی (خدمات هوکابار به همراه انواع چای و دمنوش)</span>
                            </li>

                        </ul>
                    </div>


                    {/* Menu Number 5 */}
                    <div style={{ backgroundColor: '#443c3b' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(99 87 85)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 5</span>
                        </div>

                        <div className="menu-label-luxury ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12.18 10.79C12.0694 10.7906 11.96 10.7666 11.8598 10.7199C11.7595 10.6733 11.6708 10.605 11.6 10.52L7 5C6.87702 4.8625 6.80902 4.68449 6.80902 4.5C6.80902 4.31552 6.87702 4.13751 7 4L8.82 2.14C8.89109 2.0661 8.97657 2.00757 9.07117 1.96801C9.16577 1.92845 9.26747 1.90871 9.37 1.91H14.89C15.0888 1.91018 15.2795 1.98931 15.42 2.13L17.23 3.93C17.3581 4.06233 17.4338 4.23667 17.443 4.42061C17.4521 4.60454 17.3942 4.78555 17.28 4.93L12.76 10.5C12.6917 10.5885 12.6037 10.6599 12.5031 10.7085C12.4024 10.7571 12.2918 10.7816 12.18 10.78V10.79ZM8.59 4.56L12.17 8.86L15.69 4.52L14.58 3.41H9.69L8.59 4.56Z" fill="#ffffff"></path>
                                    <path d="M12.14 21.18C10.7295 21.1785 9.35111 20.7593 8.17862 19.9753C7.00613 19.1913 6.09212 18.0775 5.55191 16.7746C5.01171 15.4717 4.8695 14.038 5.14323 12.6543C5.41697 11.2707 6.09439 9.99908 7.09001 9C7.15868 8.92631 7.24148 8.86721 7.33348 8.82622C7.42548 8.78523 7.52479 8.76319 7.62549 8.76141C7.72619 8.75963 7.82622 8.77816 7.91961 8.81588C8.013 8.8536 8.09783 8.90974 8.16905 8.98096C8.24027 9.05218 8.29642 9.13701 8.33414 9.2304C8.37186 9.32379 8.39038 9.42382 8.38861 9.52452C8.38683 9.62523 8.36479 9.72454 8.3238 9.81654C8.2828 9.90854 8.2237 9.99134 8.15001 10.06C7.36462 10.8501 6.83082 11.8551 6.61593 12.9482C6.40104 14.0414 6.5147 15.1737 6.94257 16.2023C7.37044 17.2309 8.09335 18.1097 9.02011 18.728C9.94687 19.3462 11.036 19.6761 12.15 19.6761C13.2641 19.6761 14.3532 19.3462 15.2799 18.728C16.2067 18.1097 16.9296 17.2309 17.3575 16.2023C17.7853 15.1737 17.899 14.0414 17.6841 12.9482C17.4692 11.8551 16.9354 10.8501 16.15 10.06C16.0096 9.91937 15.9307 9.72875 15.9307 9.53C15.9307 9.33125 16.0096 9.14062 16.15 9C16.219 8.92924 16.3014 8.87301 16.3924 8.83461C16.4834 8.79621 16.5812 8.77643 16.68 8.77643C16.7788 8.77643 16.8766 8.79621 16.9676 8.83461C17.0587 8.87301 17.1411 8.92924 17.21 9C18.2091 9.99856 18.8895 11.271 19.1652 12.6564C19.4409 14.0417 19.2995 15.4777 18.7589 16.7827C18.2183 18.0877 17.3027 19.203 16.1281 19.9875C14.9535 20.772 13.5725 21.1905 12.16 21.19L12.14 21.18Z" fill="#ffffff"></path>
                                </g>
                            </svg>
                            <span >منوی لوکس</span>
                        </div>

                        <ul>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره عقد ژورنالی به همراه گل آرایی ویژه</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی  ژورنالی (گل آرایی اختصاصی میز میهمان ها)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی محیط ژورنالی (اجرا توسط تیم گل آرایی حرفه ای)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط ورودی اختصاصی مراسم ژورنالی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط به سبک های به‌روز (تیم دیزاین حرفه ای)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میزآرایی (دیزاین میز های میهمانان با انواع شو پلیت و...)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شمع آرایی های خاص (شمع آرایی کریستال)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>کارت ولکام و کارت دعوت (طراحی و چاپ اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه عروس و داماد اختصاصی (همراه با گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه کیک با دیزاین اختصاصی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند استودیو و نورپردازی (خواننده و تیوی شهری)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>نفر پرکاشن و موسیقی زنده همراه دیجی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار برند (اوپراتور های مجزا و تدوینگر)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود همراه سرو آشپز (منو شماره 5)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 5)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو شماره 4)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سرآشپز بین الملل فیلیپینی و اتریشی جهت سرو فینگرفود گرم</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>آتش بازی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میز یادبود</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره خانه سنتی (خدمات هوکابار به همراه انواع چای و دمنوش)</span>
                            </li>
                        </ul>

                    </div>

                </section>


                {/* ---------------------------------------------------------- */}

                {/* Bale borun and namzadi Menu */}
                <section className="text-center text-white py-4 mt-8">
                    <h2 className="mt-14" >
                        <span className=" inline-block border-b-4 border-secondary ">منو </span> های بله برون و نامزدی
                    </h2>
                </section>

                <section className="menu-favo-parent grid grid-cols-1 sm:grid-cols-2 lg:gap-5 gap-4 sm:gap-2 mt-4 px-4 sm:px-2">


                    {/* Menu Number 0 */}
                    <div style={{ backgroundColor: '#44423b' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(103 100 88)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 0</span>
                        </div>
                        <div className="menu-label-economic ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M12 7.5V16.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M17 3V7H21" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path d="M22 2L17 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            <span >منوی اقتصادی</span>
                        </div>
                        <ul>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه عروس و داماد (بدون گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند و نورپردازی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو پایه)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>

                        </ul>

                    </div>


                    {/* Menu Number 1 */}
                    <div style={{ backgroundColor: '#3b4444' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(75 86 86)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 1</span>
                        </div>
                        <ul>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی (میز میهمان / توپی گل )</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه عروس و داماد (همراه با گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند و نورپردازی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار (اوپراتور های مجزا به همراه تدوینگر برند)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو پایه)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>

                        </ul>

                    </div>


                    {/* Menu Number 2 */}
                    <div style={{ backgroundColor: '#3c3b44' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(95 93 108)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 2</span>
                        </div>
                        <ul>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی (میز میهمان ها/ توپی گل)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میزآرایی (دیزاین میز های مهمانان با انواع شو پلیت و...)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>کارت ولکام و کارت دعوت (طراحی و چاپ اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه عروس و داماد (به همراه گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند و نورپردازی(تیوی شهری و خواننده)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>نفر پرکاشن</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار (اوپراتور های مجزا به همراه تدوینگر )</span>
                            </li>

                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 2)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 2)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو 1)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>آتش بازی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>

                        </ul>

                    </div>


                    {/* Menu Number 3 */}
                    <div style={{ backgroundColor: '#3b443e' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(108 128 115)' }} className="text-white block py-1 px-4 rounded-xl">منو عقد و عروسی</h3>
                            <span className="menu-number">Number 3</span>
                        </div>
                        <div className="menu-label ">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                            </svg>

                            <span>دارای هدیه</span>
                        </div>
                        <ul>
                            <li>
                                <Image
                                    src={'/images/icons/gift-svgrepo-com.svg'}
                                    width={16}
                                    height={16}
                                    alt="گیفت عروسی"
                                />
                                <span>آتش بازی (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <Image
                                    src={'/images/icons/gift-svgrepo-com.svg'}
                                    width={16}
                                    height={16}
                                    alt="گیفت عروسی"
                                />
                                <span>میز یادبود (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی (گل آرایی اختصاصی میز میهمان ها)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میزآرایی (دیزاین میز های میهمانان با انواع شو پلیت و...)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شمع آرایی (شمع آرایی کریستال)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>کارت ولکام و کارت دعوت (طراحی و چاپ اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین جایگاه عروس و داماد (همراه با گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند استودیو و نورپردازی (خواننده و تیوی شهری)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>نفر پرکاشن و موسیقی زنده همراه دیجی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار برند (اوپراتور های مجزا و تدوینگر)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 3)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 3)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو شماره 2)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره خانه سنتی (خدمات هوکابار به همراه انواع چای و دمنوش)</span>
                            </li>

                        </ul>

                    </div>


                    {/* Menu Number 4 */}
                    <div style={{ backgroundColor: '#443b43' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(105 89 103)' }} className="text-white block py-1 px-4 rounded-xl">منو عقد و عروسی</h3>
                            <span className="menu-number">Number 4</span>
                        </div>
                        <ul>

                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی (گل آرایی اختصاصی میز میهمان ها)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی  محیط(اجرا توسط تیم گل آرایی حرفه ای)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط ورودی مراسم</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط (تیم دیزاینر اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میزآرایی (دیزاین میز های میهمانان با انواع شو پلیت و...)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شمع آرایی (شمع آرایی کریستال)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>کارت ولکام و کارت دعوت (طراحی و چاپ اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین جایگاه عروس و داماد اختصاصی (همراه با گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه کیک با دیزاین اختصاصی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند استودیو و نورپردازی (خواننده و تیوی شهری)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>نفر پرکاشن و موسیقی زنده همراه دیجی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار برند (اوپراتور های مجزا و تدوینگر)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود (منو شماره 4)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 4)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو شماره 3)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>آتش بازی (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میز یادبود (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره خانه سنتی (خدمات هوکابار به همراه انواع چای و دمنوش)</span>
                            </li>

                        </ul>

                    </div>


                    {/* Menu Number 5 */}
                    <div style={{ backgroundColor: '#443c3b' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(99 87 85)' }} className="text-white block py-1 px-4 rounded-xl">منو عقد و عروسی</h3>
                            <span className="menu-number">Number 5</span>
                        </div>

                        <div className="menu-label-luxury ">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M12.18 10.79C12.0694 10.7906 11.96 10.7666 11.8598 10.7199C11.7595 10.6733 11.6708 10.605 11.6 10.52L7 5C6.87702 4.8625 6.80902 4.68449 6.80902 4.5C6.80902 4.31552 6.87702 4.13751 7 4L8.82 2.14C8.89109 2.0661 8.97657 2.00757 9.07117 1.96801C9.16577 1.92845 9.26747 1.90871 9.37 1.91H14.89C15.0888 1.91018 15.2795 1.98931 15.42 2.13L17.23 3.93C17.3581 4.06233 17.4338 4.23667 17.443 4.42061C17.4521 4.60454 17.3942 4.78555 17.28 4.93L12.76 10.5C12.6917 10.5885 12.6037 10.6599 12.5031 10.7085C12.4024 10.7571 12.2918 10.7816 12.18 10.78V10.79ZM8.59 4.56L12.17 8.86L15.69 4.52L14.58 3.41H9.69L8.59 4.56Z" fill="#ffffff"></path>
                                    <path d="M12.14 21.18C10.7295 21.1785 9.35111 20.7593 8.17862 19.9753C7.00613 19.1913 6.09212 18.0775 5.55191 16.7746C5.01171 15.4717 4.8695 14.038 5.14323 12.6543C5.41697 11.2707 6.09439 9.99908 7.09001 9C7.15868 8.92631 7.24148 8.86721 7.33348 8.82622C7.42548 8.78523 7.52479 8.76319 7.62549 8.76141C7.72619 8.75963 7.82622 8.77816 7.91961 8.81588C8.013 8.8536 8.09783 8.90974 8.16905 8.98096C8.24027 9.05218 8.29642 9.13701 8.33414 9.2304C8.37186 9.32379 8.39038 9.42382 8.38861 9.52452C8.38683 9.62523 8.36479 9.72454 8.3238 9.81654C8.2828 9.90854 8.2237 9.99134 8.15001 10.06C7.36462 10.8501 6.83082 11.8551 6.61593 12.9482C6.40104 14.0414 6.5147 15.1737 6.94257 16.2023C7.37044 17.2309 8.09335 18.1097 9.02011 18.728C9.94687 19.3462 11.036 19.6761 12.15 19.6761C13.2641 19.6761 14.3532 19.3462 15.2799 18.728C16.2067 18.1097 16.9296 17.2309 17.3575 16.2023C17.7853 15.1737 17.899 14.0414 17.6841 12.9482C17.4692 11.8551 16.9354 10.8501 16.15 10.06C16.0096 9.91937 15.9307 9.72875 15.9307 9.53C15.9307 9.33125 16.0096 9.14062 16.15 9C16.219 8.92924 16.3014 8.87301 16.3924 8.83461C16.4834 8.79621 16.5812 8.77643 16.68 8.77643C16.7788 8.77643 16.8766 8.79621 16.9676 8.83461C17.0587 8.87301 17.1411 8.92924 17.21 9C18.2091 9.99856 18.8895 11.271 19.1652 12.6564C19.4409 14.0417 19.2995 15.4777 18.7589 16.7827C18.2183 18.0877 17.3027 19.203 16.1281 19.9875C14.9535 20.772 13.5725 21.1905 12.16 21.19L12.14 21.18Z" fill="#ffffff"></path>
                                </g>
                            </svg>
                            <span >منوی لوکس</span>
                        </div>

                        <ul>

                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی  ژورنالی (گل آرایی اختصاصی میز میهمان ها)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>گل آرایی محیط ژورنالی (اجرا توسط تیم گل آرایی حرفه ای)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط ورودی اختصاصی مراسم ژورنالی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیزاین محیط به سبک های به‌روز (تیم دیزاین حرفه ای)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میزآرایی (دیزاین میز های میهمانان با انواع شو پلیت و...)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شمع آرایی های خاص (شمع آرایی کریستال)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>کارت ولکام و کارت دعوت (طراحی و چاپ اختصاصی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه عروس و داماد اختصاصی (همراه با گل آرایی)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>جایگاه کیک با دیزاین اختصاصی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>دیجی به همراه باند استودیو و نورپردازی (خواننده و تیوی شهری)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>نفر پرکاشن و موسیقی زنده همراه دیجی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>پکیج عکاس و فیلم بردار برند (اوپراتور های مجزا و تدوینگر)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>انواع فینگرفود همراه سرو آشپز (منو شماره 5)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم بارتندری (منو شماره 5)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>شام سلف سرویس (منو شماره 4)</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سرآشپز بین الملل فیلیپینی و اتریشی جهت سرو فینگرفود گرم و شام</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>آتش بازی</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>میز یادبود</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>تیم پذیرایی و مهمانداری</span>
                            </li>
                            <li>
                                <svg aria-hidden="true" className="e-font-icon-svg e-far-gem" viewBox="0 0 576 512"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z">
                                    </path>
                                </svg>
                                <span>سفره خانه سنتی (خدمات هوکابار به همراه انواع چای و دمنوش)</span>
                            </li>

                        </ul>


                    </div>

                </section>
            </main>



        </div>
    )
}

export default Menu 