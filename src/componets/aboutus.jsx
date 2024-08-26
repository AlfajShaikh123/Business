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



function About() {

    const teamData = [{ image: "https://tbcdn.talentbrew.com/company/430/v2_0_US/img/profile-andres.jpg", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWXDkQYlR_Jmjn0yuU6UI9SyFDP9L8MHwfA&s", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbJCbpt_NSXhcJvHW2Tz8cyCU_Z9VS8r2A-lcCeNl5EiQaCyShqiDgKRC2gDZITxy9I0&usqp=CAU", name: "Sarah Jasmin", discription: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, voluptatum!" },
    ]

    const serviceData = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/12451/12451528.png",
            title: "Audit & Evalution",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit, laudantium ad eligendi aliquid voluptatem voluptatum vitae asperiores dolore itaque.",
            navLink: "servicePage"
        },
        {
            icon: "https://p7.hiclipart.com/preview/677/191/799/budget-finance-financial-plan-accounting-investment-others.jpg",
            title: "Financial Projections",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit, laudantium ad eligendi aliquid voluptatem voluptatum vitae asperiores dolore itaque."
        },
        {
            icon: "https://static.vecteezy.com/system/resources/previews/014/580/130/non_2x/businessman-in-black-formal-suit-leaning-on-pile-of-gold-coins-with-growing-statistics-ornament-on-the-back-3d-rendering-of-business-investment-concept-png.png",
            title: "Funds and investments",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit, laudantium ad eligendi aliquid voluptatem voluptatum vitae asperiores dolore itaque."
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/9746/9746196.png",
            title: "Finance & Restructuring",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit, laudantium ad eligendi aliquid voluptatem voluptatum vitae asperiores dolore itaque."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGx9ytaqUt1mqPGsc4LMcjQs2Rg-ki3Y5LxQ&s",
            title: "Investment banking",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit, laudantium ad eligendi aliquid voluptatem voluptatum vitae asperiores dolore itaque."
        },
        {
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUQeho_PpGudzBN0xZYewZ_FZ3tzioqYps7g&s",
            title: "Taxes & Efficiency",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit, laudantium ad eligendi aliquid voluptatem voluptatum vitae asperiores dolore itaque."
        }
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
                <img src="https://s3-alpha-sig.figma.com/img/9c82/f7b3/93ed35f06ea01dc5653cd432d8a5502d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4BMsHdo~P09pgMzdUljnR4MRUZ5Bxb5OrE8MHnhEAGYiBULgtbFGXoK17~emfEFy4j2bPRxLjrdErsRd1xswFNk5IhAyBq4lnY4MYP5rTkBRswLlv-0v~ODWSf7j5wWT9YqTgPWdYUSHvxhkFw5LembZTTmflJ7EgyzOksihGnGnvgeyHuSVgPYazykw9~6dalPUJEPHir4DXQtLJeBCQ5m4E4uyEu-zIusG1L5rFVZgLqxk6nKJQU5ShrDwIo6xRJfz11tpseJynVHSR28feUf1Ftr4kiOfEuFcf9kExHsX7NWCpaO424P5WRY8Bt9MzjWY0JC3GEbyYJWDX6XUA__" className="md:w-[1983.86px] md:h-[650px] h-[350px]" alt="" />

                <div className="absolute inset-0 md:mt-28 md:w-[25%]  mt-10 md:ms-28 ">
                    <div className="md:bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden  ">
                        <p className="bg-yellow-800 rounded-full mb-2 text-center w-[50%]">SERVICES</p>
                        <h1 className="text-3xl font-bold md:text-gray-800 text-black   flex flex-grow">Your Small business <br /> Growth advisors</h1>

                    </div>

                </div>
            </div>







            {/* About */}
            <div>
                <div className="flex gap-5 md:mt-24 mt-40  justify-center md:flex-row flex-col items-center  ">
                    <div className="space-y-7 md:w-[50%] p-5">
                        <p className="bg-yellow-800 rounded-full text-center font-bold p-2 w-[50%]  ">Our Vision</p>
                        <h1 className="text-3xl font-bold ">About our Consuting Agency Team</h1>
                        <p className="text-green-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, minima. In nihil molestiae inventore </p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, quibusdam. saepe.</p>

                        <div className="space-y-10 ">
                            <div className="flex items-center gap-2">
                                <div>
                                    <img src="https://i.pinimg.com/originals/61/76/16/617616eaa2cb8cdf5fe02dfde88632de.png" className="h-10" alt="" />
                                </div>
                                <div>
                                    <p className="text-sm">Buschemia@gmailcom</p>

                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBP_CgL5RVgtqWSoeMihZRCm2zzvBeEXJVUfsa9Z8aXY3Xw1ZQJd1PrXLHAVdAvWeI2so&usqp=CAU" className="h-10 " alt="" />
                                </div>
                                <div>
                                    <p className="text-sm">(001) 5648 6584</p>
                                </div>
                            </div>

                            <div>
                                <Button>Make An Appointment </Button>
                            </div>
                        </div>

                    </div>

                    <div>
                        <Card color="transparent" shadow={false}>

                            <img src="https://media.istockphoto.com/id/1354192776/photo/shot-of-two-technicians-working-together-in-a-server-room.jpg?s=612x612&w=0&k=20&c=IlztITZgLND0iJs4MCwg8R67ZsooJzZ85IMGunU_pKo=" className="rounded-xl p-2" alt="" />
                        </Card>
                    </div>


                </div>

                <div className="md:flex md:justify-center gap-10 grid grid-rows-2 grid-cols-2 p-5 ">
                    <div className="flex flex-col items-center ">
                        <p className="font-bold text-lg">1128 +</p>
                        <p className="text-sm">Successfull Work</p>
                    </div>
                    <div className="flex flex-col items-center " >
                        <p className="font-bold text-lg">908 +</p>
                        <p className="text-sm">Team Membar</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <p className="font-bold text-lg">258 +</p>
                        <p className="text-sm">Happy Customer</p>
                    </div>
                    <div className="flex flex-col items-center ">
                        <p className="font-bold text-lg">564 +</p>
                        <p className="text-sm">Creative ideas</p>
                    </div>
                </div>
            </div>



            {/* Service */}
            <div className="bg-gray-300 md:p-10 p-5 mt-5 ">
                <div className="flex justify-between ">
                    <div className="space-y-4">
                        <p className="bg-yellow-800 text-sm p-1 rounded-full text-center md:w-[50%] me-2">GROWING WITH OUR CLIENTS </p>
                        <p className="text-xl font-bold">Our core values and principle</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, modi.</p>
                    </div>

                    <div>
                        <Button>Get in touch</Button>
                    </div>

                </div>
                <div className="space-y-4 flex flex-col  justify-center items-center mt-5 ">
                    <div className="relative w-full">
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300"
                                style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
                            >
                                {cards.map((card, index) => (
                                    <div key={index} className="min-w-[250px] mr-4 shadow-xl">
                                        <div>
                                            <img src={card.image} alt="" className="w-[360px]" />
                                        </div>
                                        <div className="p-4 bg-white shadow space-y-2">
                                            <h2 className="text-lg font-bold">{card.title}</h2>
                                            <p className="text-gray-600">{card.description}</p>
                                            <Button className="">Learn More</Button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={handlePrev}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                            disabled={currentIndex === 0}
                        >
                            Prev
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
                            disabled={currentIndex === maxIndex}
                        >
                            Next
                        </button>
                    </div>


                </div>
            </div>
            {/* our history */}
            <div className="bg-black mt-14 p-20 space-y-3">
                <p className="bg-green-800 p-1 font-semibold text-center rounded-full">OUR HISTORY</p>
                <p className="text-white text-center mt-3 text-2xl font-bold">Strategy for Every Stage in <br /> the Client's Journey</p>
                <div className="flex justify-center">
                    <img src="src\assets\images\vediopic.JPG" alt="" />
                </div>

            </div>

            {/* Our team */}

            <div className="mt-14 flex flex-col justify-center items-center space-y-5 p-5">

                <p className="bg-yellow-800 p-1 text-sm text-center rounded-full w-[50%]">OUR TEAM</p>
                <p className="font-bold text-xl">We Chapion the bold to achive the extraordinary</p>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe maiores corrupti tempora provident repudiandae laudantium magnam voluptatem suscipit eveniet.</p>

                <div className="flex md:flex-row flex-col  justify-center gap-5  ">
                    {teamData.map((item) => (
                        <div className="flex flex-col justify-center items-center w-[250px] ">
                            <img src={item.image} alt="" className="h-[200px] w-[200px] rounded-xl" />
                            <p className="font-bold">{item.name}</p>
                            <p className="text-center">{item.discription}</p>
                            <div className="flex gap-3">
                                <p>I</p>
                                <p>F</p>
                                <p>T</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Book Now */}
            <div className="flex justify-center mt-14 mb-10">
                <img src="src\assets\images\bookImage.JPG" className="h-[350px]" alt="" />
            </div>
        </div>
    </>)
}

export default About