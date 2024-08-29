
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



function CaseStudySingle() {


    return (<>
        <div className="">



            {/* Banner */}

            <div className="relative md:top-16 top-32">
                <img src="https://s3-alpha-sig.figma.com/img/9e2b/d703/7ec1cd621b3d0aa1b2858eadb0155a72?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R~cGJOBbd-55kqbdeMBzqnExwj-3QlB3GnZSApOsAjdQSvwtLZ6VtnZnH-0-SHbQvc2~~f~FDrvGNh3f50ojNMvYhXlpbkQoB6gu4QFj3-VXzS6sV200APpe-nCYX2Crkv6OcjwP-QDQtfq04KSB70oD4IzeUoCtDo65PsuJ3iWTQef2emAV6SQUq9ndmfxl4YfGNTFsHDK~5DVLeMq~STnKgr2ysLoaFEWDsNIKIa1M03FXjRndmlKTrq2YtRfBoQszR9f3~kyoKT~O1aKsnPCrB-8EvCtZOUCOVETukLmLPrkfOKu7yC5DOTP4qCvAKEaTMEwXumolZmYCHovPWA__" className="md:w-[1983.86px] md:h-[650px] h-[350px]" alt="" />

                <div className="absolute inset-0 md:mt-28 md:w-[25%]  mt-10 md:ms-28 ">
                    <div className="md:bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden bg-gray-400  ">
                        <p className="bg-yellow-800 rounded-full mb-2 text-center w-[50%]">Case Studies single</p>
                        <h1 className="text-3xl font-bold md:text-gray-800 text-black   flex flex-grow">Taxes & Efficiency</h1>

                    </div>

                </div>
            </div>


            <div className="space-y-5 md:m-20 pt-36 p-5">
                <img src="src\assets\images\casestudy.JPG" alt="" />
                <p className="font-bold text-xl">Project Overview</p>
                <p className="text-sm text-gray-500 text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque accusantium voluptatum expedita dignissimos a quasi velit adipisci magnam harum impedit, ullam modi inventore aliquid necessitatibus?</p>
                <ul className="text-sm text-gray-500 text-justify">
                    <li>1.It brings the right people together with all the right information and tools to get work done</li>
                    <li>2.We provide operational efficiency, data security, and flexible scale</li>
                    <li>3.Your best work, together in one package that works seamlessly from your computer</li>
                    <li>4.Delivers the tools you need to save time Improve field performance always</li>

                </ul>

                <p className="font-bold text-xl">Storyboard</p>
                <p className="text-sm text-gray-500 text-justify">Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. Objectively innovate empowered manufactured products whereas parallel platforms. Holistically predominate extensible testing procedures for reliable supply chains.</p>
                <p className="text-sm text-gray-500 text-justify">Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products completely pursue scalable customer service.</p>

                <img src="https://s3-alpha-sig.figma.com/img/d4db/f09c/269e9652d73d79319b34ae058370401a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b2wcEINyb9VtkPUSlOyCCVGL~sPkYlFiedPTQ-bv58xlx2EgcnIeHQ4EeYYMk9espKvc8P5H7Cf4sf2BTZkNAj7k3rI8lHcsxwCBqiot9XQMgzDOgNuSoVbGgB6~wCQMhNO8Crm~JpKX0UqqVcjdF9uel9ZEHgzI46cT9kZ1p18D-En1AZEClL4K0FB765MQSWEM2Ra6ET3-UM48nDFQG6Gd2rN9yaGybmdVuU3W2XEVniFN6vz3sGx6Ys-qgWE4L8VvuHcJhTqdF-KaYJKG6Uh5iTsrEpwn0IsJD-gpX3m9qNGWZ6x35io42-LwYh2wcO8gSg1sI5QduKHbUJq5Zw__" alt="" className="h-[500px] m-auto" />

                <p className="font-bold text-xl">Project result</p>
                <p className="text-sm text-gray-500 text-justify">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
                <p className="text-sm text-gray-500 text-justify">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
            </div>

            <div>
                <img src="src\assets\images\singleteams.JPG" alt="" />
            </div>

            <div>
                <p className="font-bold text-xl text-center mb-5">More case studies</p>
                <div className="bg-gray-300 flex gap-5 justify-center p-5 mb-5 overflow-auto ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ohkVCpufdZK4-4L76oMTvqutS1I_RSjLTw&s" alt="" className="shadow-xl rounded-xl" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgr4-VXU3r6Y9FFaxf0pf-I2D1xfuFE0rpJg&s" alt="" className="shadow-xl rounded-xl" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaa6UzRt5VpVGdefUG4Nyz_yw4xoYOCWnqAA&s" alt="" className="shadow-xl rounded-xl" />

                </div>
            </div>

        </div>
    </>)
}

export default CaseStudySingle