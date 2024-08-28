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



function Teams() {

    const teamData = [{
        image: "https://tbcdn.talentbrew.com/company/430/v2_0_US/img/profile-andres.jpg", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!",
        NavLink: "singlePage"
    },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWXDkQYlR_Jmjn0yuU6UI9SyFDP9L8MHwfA&s", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://tbcdn.talentbrew.com/company/430/v2_0_US/img/profile-andres.jpg", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWXDkQYlR_Jmjn0yuU6UI9SyFDP9L8MHwfA&s", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://tbcdn.talentbrew.com/company/430/v2_0_US/img/profile-andres.jpg", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWXDkQYlR_Jmjn0yuU6UI9SyFDP9L8MHwfA&s", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWXDkQYlR_Jmjn0yuU6UI9SyFDP9L8MHwfA&s", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWXDkQYlR_Jmjn0yuU6UI9SyFDP9L8MHwfA&s", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbJCbpt_NSXhcJvHW2Tz8cyCU_Z9VS8r2A-lcCeNl5EiQaCyShqiDgKRC2gDZITxy9I0&usqp=CAU", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    ]


    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5_qeyJsiDnHeZw5Z0ppfB48R0Kn5lsbxcg&s", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://img.freepik.com/free-photo/teamwork-meeting-with-business-people_23-2148825942.jpg", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060243.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYAwnYrIa_1f8SGAQwk2siOl3ROGiSjZfI5K6E3sGUl0Oxfy8tGJoBt1CoXMzOmpYmd4&usqp=CAU", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi_eCjHPaqDX7NtToywswPr7I1uHzSmkMsA&s", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5_qeyJsiDnHeZw5Z0ppfB48R0Kn5lsbxcg&s", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://img.freepik.com/free-photo/teamwork-meeting-with-business-people_23-2148825942.jpg", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060243.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqYAwnYrIa_1f8SGAQwk2siOl3ROGiSjZfI5K6E3sGUl0Oxfy8tGJoBt1CoXMzOmpYmd4&usqp=CAU", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmi_eCjHPaqDX7NtToywswPr7I1uHzSmkMsA&s", title: "Audit & Evaluation", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit fugiat quidem facere sequi quo nisi." },
        // Add more cards as needed
    ];


    const cardWidth = 250; // Adjust according to your card width
    const visibleCards = 3; // Number of cards visible in one row
    const maxIndex = cards.length - visibleCards;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
    };
    return (<>
        <div className="">



            {/* Banner */}

            <div className="relative md:top-16 top-32">
                <img src="https://s3-alpha-sig.figma.com/img/9e2b/d703/7ec1cd621b3d0aa1b2858eadb0155a72?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R~cGJOBbd-55kqbdeMBzqnExwj-3QlB3GnZSApOsAjdQSvwtLZ6VtnZnH-0-SHbQvc2~~f~FDrvGNh3f50ojNMvYhXlpbkQoB6gu4QFj3-VXzS6sV200APpe-nCYX2Crkv6OcjwP-QDQtfq04KSB70oD4IzeUoCtDo65PsuJ3iWTQef2emAV6SQUq9ndmfxl4YfGNTFsHDK~5DVLeMq~STnKgr2ysLoaFEWDsNIKIa1M03FXjRndmlKTrq2YtRfBoQszR9f3~kyoKT~O1aKsnPCrB-8EvCtZOUCOVETukLmLPrkfOKu7yC5DOTP4qCvAKEaTMEwXumolZmYCHovPWA__" className="md:w-[1983.86px] md:h-[650px] h-[350px]" alt="" />

                <div className="absolute inset-0 md:mt-28 md:w-[25%]  mt-10 md:ms-28 ">
                    <div className="md:bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden bg-gray-400  ">
                        <p className="bg-yellow-800 rounded-full mb-2 text-center w-[50%]">TEAM</p>
                        <h1 className="text-3xl font-bold md:text-gray-800 text-black   flex flex-grow">The Consulator</h1>

                    </div>

                </div>
            </div>


            {/* Our team */}

            <div className="md:mt-14  mt-32 flex flex-col justify-center items-center space-y-5 p-5">
                <p className="font-bold text-xl">Meet Our Great Team</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe maiores corrupti tempora provident repudiandae laudantium magnam voluptatem suscipit eveniet.</p>

                <div className="md:grid grid-rows-2 grid-cols-3 gap-5 space-y-5  ">
                    {teamData.map((item) => (
                        <NavLink to={item.NavLink}>
                            <div className="flex flex-col justify-center items-center w-[250px] shadow-xl ">
                                <img src={item.image} alt="" className="h-[200px] w-[200px] rounded-xl" />
                                <p className="font-bold">{item.name}</p>
                                <p className="text-center">{item.discription}</p>
                                <div className="flex gap-3">
                                    <p>I</p>
                                    <p>F</p>
                                    <p>T</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}

                </div>
            </div>

            {/* our history */}
            <div className=" mt-14 p-5 flex justify-center ">
                <img src="src\assets\images\teamImage.JPG" className="rounded-xl shadow-xl" alt="" />

            </div>
        </div>
    </>)
}

export default Teams