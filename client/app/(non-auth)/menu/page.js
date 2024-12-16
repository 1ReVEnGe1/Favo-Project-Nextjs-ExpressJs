

import PageTop from "@/components/PageTop"
import './menu.css'
import Image from "next/image"

const Menu = () => {

    return (
        <div style={{ paddingTop: '100px' }}>
            <PageTop
                img='images/menu/MXP-19644-menu-marquee-001_cb=81124b1e414cf73a2ca5485f471bd791ef8a8678.png'
                title={'منو های پیشنهادی تشریفات عروسی فاوو ایونت'}
                link={"/menu"}

            />

            <main className="menu-cont mx-auto py-8" style={{ maxWidth: '1100px' }}>

                {/* Wedding and aghd Menu */}
                <section className="text-center text-white py-4 ">
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

                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 sm:gap-2 mt-16 px-4 sm:px-2">

                    {/* Menu Number 0 */}
                    <div style={{ backgroundColor: '#44423b' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(103 100 88)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 0</span>
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
                                    width={20}
                                    height={20}
                                    alt="گیفت عروسی"
                                    className="menu-gift-icon"
                                />
                                <span>آتش بازی (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <Image
                                    src={'/images/icons/gift-svgrepo-com.svg'}
                                    width={20}
                                    height={20}
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

                <section className="grid grid-cols-1 sm:grid-cols-2 lg:gap-5 gap-4 sm:gap-2 mt-4 px-4 sm:px-2">


                    {/* Menu Number 0 */}
                    <div style={{ backgroundColor: '#44423b' }} className="menu-favo">
                        <div className="flex justify-between mb-10">
                            <h3 style={{ backgroundColor: 'rgb(103 100 88)' }} >منو عقد و عروسی</h3>
                            <span className="menu-number">Number 0</span>
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
                                    width={20}
                                    height={20}
                                    alt="گیفت عروسی"
                                />
                                <span>آتش بازی (هدیه تشریفات فاوو ایونت)</span>
                            </li>
                            <li>
                                <Image
                                    src={'/images/icons/gift-svgrepo-com.svg'}
                                    width={20}
                                    height={20}
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