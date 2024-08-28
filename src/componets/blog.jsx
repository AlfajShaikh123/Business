import Header from "./header"
import { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Typography,
    Tabs,
    Checkbox,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Select,
    Option,
} from "@material-tailwind/react"
import {
    BanknotesIcon,
    CreditCardIcon,
    LockClosedIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";



function Blog() {

    const blogData = [
        {
            image: "https://media.istockphoto.com/id/2083404767/photo/an-african-american-trainer-is-showing-on-tablet-to-her-trainee-at-the-office.webp?b=1&s=170667a&w=0&k=20&c=uQ5vEbvhBdwJZKke7YcQCzTn3XgtSlKDGnlZ5taShtw=",
            title: "Consulting Fees Study 2019 (And How To Raise Your Rates)",
            decription: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB3VlIHqJmoDG-I8ml40GACuxG2dn671rKfw&s",
            name: "John Carter",
            date: "September 1, 2022",
            NavLink:"blogsingle"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1663099990889-10a861e6aa96?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBkaXNjdXNzaW9ufGVufDB8fDB8fHww",
            title: "CWhat is growth hacking and how to apply it to your startup",
            decription: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            profile: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
            name: "John Carter ",
            date: "September 1, 2022"
        }, {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5b8sGt446DBNFeeGkd4Rmvgm3yqRbsqx7Ww&s",
            title: "CWhat is growth hacking and how to apply it to your startup",
            decription: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            profile: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
            name: "John Carter ",
            date: "September 1, 2022"
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/047/187/526/small/portrait-of-successful-creative-business-team-looking-at-camera-and-smiling-diverse-business-people-standing-together-at-startup-selective-focus-photo.jpg",
            title: "CWhat is growth hacking and how to apply it to your startup",
            decription: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            profile: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
            name: "John Carter ",
            date: "September 1, 2022"
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/012/508/651/small_2x/young-people-raising-hand-to-ask-question-at-team-training-curious-black-employee-or-conference-seminar-participant-vote-as-volunteer-at-group-office-meeting-with-multiracial-diverse-businesspeople-free-photo.jpg",
            title: "CWhat is growth hacking and how to apply it to your startup",
            decription: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            profile: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
            name: "John Carter ",
            date: "September 1, 2022"
        }, {
            image: "https://static.vecteezy.com/system/resources/thumbnails/012/508/651/small_2x/young-people-raising-hand-to-ask-question-at-team-training-curious-black-employee-or-conference-seminar-participant-vote-as-volunteer-at-group-office-meeting-with-multiracial-diverse-businesspeople-free-photo.jpg",
            title: "CWhat is growth hacking and how to apply it to your startup",
            decription: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
            profile: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
            name: "John Carter ",
            date: "September 1, 2022"
        }]
    return (<>
        <div className="">



            {/* Banner */}

            <div className="relative md:top-16 top-32">
                <img src="https://c0.wallpaperflare.com/preview/922/167/689/adults-analyzing-brainstorming-business-people.jpg" className="md:w-[1983.86px] md:h-[650px] h-[350px]" alt="" />

                <div className="absolute inset-0 md:mt-28 md:w-[25%]  mt-10 md:ms-28 ">
                    <div className="md:bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden bg-gray-400  ">
                        <p className="bg-yellow-800 rounded-full mb-2 text-center w-[50%]">BLOG</p>
                        <h1 className="text-3xl font-bold md:text-gray-800 text-black   flex flex-grow">Latest Blog and News</h1>

                    </div>

                </div>
            </div>


            {/* Blogs */}

            <div className="md:pt-24 pt-48">
                <div className="">
                    <div className="flex md:flex-row flex-col md:justify-between justify-center items-center space-y-4 p-5">
                        <div className="space-y-2">
                            <p className="bg-green-800 p-1 rounded-full text-center ">Blog</p>
                            <p className="font-bold text-xl text-center md:text-left">Take a look at our latest articles & resources</p>
                        </div>
                        <div>
                            <Button size="">More News</Button>
                        </div>
                    </div>
                    <div className="md:grid grid-rows-2 grid-cols-3 gap-14 md:w-[75%] m-auto mt-10 p-5 ">
                        {blogData.map((item) => (
                            <NavLink to={item.NavLink}>
                            <div className="space-y-3  ">
                                <img src={item.image} alt="" className="rounded-xl h-[250px]" />

                                <p className="font-bold text-xl text-justify">{item.title}</p>
                                <p className="text-sm text-gray-500 text-justify">{item.decription}</p>

                                <hr />
                                <div className="flex items-center gap-5">
                                    <img src={item.profile} alt="" className="h-7 rounded-full" />
                                    <p className="border-e-2 text-sm">{item.name}</p>
                                    <p className="border-e-2 text-sm">{item.date}</p>
                                    <Button>Read More</Button>
                                </div>
                                <hr />
                            </div>
                            </NavLink>
                        ))}
                    </div>


                </div>
            </div>



            {/* our history */}
            <div className=" mt-14 p-5 flex justify-center ">
                <img src="src\assets\images\teamImage.JPG" className="rounded-xl shadow-xl" alt="" />

            </div>
        </div>
    </>)
}

export default Blog