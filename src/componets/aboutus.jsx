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



            <div className="relative md:top-16 top-32">
                <div className="flex">
                    <img src="src\assets\images\aboutBanner-1.JPG" className="w-[1983.86px] max-h-[550px]" alt="" />
                    <img src="https://s3-alpha-sig.figma.com/img/18ac/a905/855e7462a88e8579e28bfc183e76927c?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AEunIv~QBcZohP1~9fqarZBJ7s4I41h1cmq7sMhKtEPyf2nLnf7hyzbhlUaiwh~ODmvJnYjSkdBuVMn3GdQ1vXfzpVnDHLkm-H1xKFVZ~HPej3UwCGM4VPYnVHJxDyMCrj73QI8lda5mr0OlPxO~8cTLGfLsg-96tzme6PNE18dKchngCZrt3xbbz7pJTKGAQVPE9wEV272kJ3DYiYP8TwOJ8VoSUBIyPdUrF2CL1J1RUd-v6gCSVQPloYZqgBf43KW-Jto1ZvMPd5GNE51Vrh9LakjoqzLzbnq8XWDWzf44Sd3YrLZpzhrQbrd~zcTXvW0zgOa8KrcQNGZUGXpr8w__" alt="" className="w-[1983.86px] max-h-[550px]" />
                </div>

                {/* grid grid-flow-row grid-cols-2 */}
                <div className=" ">
                    <div className="absolute inset-0 md:mt-28 md:w-[30%]  mt-20 md:ms-28 top-[350px] ">
                        <div className="">
                            <div>
                                <div className="relative ">
                                    <img src="https://s3-alpha-sig.figma.com/img/525b/73f8/4dc86697b5d8dd7eec545c6efa3ceff8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UsjMThDwDjyQQ2zkfQsX9v0XoY64cnxCnoiUE5K9yWMOjAcRx7TBJVSc4vgm5gTPCWQEtB709FyhltrRz8U1cqTQH5aGyejfCDJ38pDQVI2wnURFvTIQbD7j4oPX~xqgLYgaxviz4NvIxZHCyZHHCaiUCDpg9JBUMyYigr2cRluDnRnE~a2s-TGsLe9ci8Ak6dMlIkBZVELcsJBghYbbLCWpIaMxoC2CQDqOipXeH09dKyaPF6ZMk5SHJ07cWSMBvrBIY6p2esEe2QIEJiobkpJFaxnjW2S2i8Jf79GQ2zHy86PYy17PKYCkvsPFkRw0-KgOaY9OhBoi2565E5ez6A__" className="w-[55%] h-[300px] rounded-2xl shadow-xl" alt="" />
                                </div>
                                <div className="absolute inset-0 top-14 m-5 w-[50%]">

                                    <p className="text-xl font-bold">Finance & Restructuring</p>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore illum sunt ratione eius! Est?</p>
                                    <div className="bg-white font-bold rounded-full p-2 text-center w-[40%] mt-9 text-xs">Our Service</div>
                                </div>


                            </div>
                        </div>




                    </div>
                    <div className="absolute inset-0 md:mt-28 md:w-[30%]  mt-20 md:ms-28 top-[350px] left-72 ">
                        <div className="">
                            <div>
                                <div className="relative ">
                                    <img src="https://www.codingdojo.com/blog/wp-content/uploads/codelaptop.jpg" className="w-[55%] h-[300px] rounded-2xl shadow-xl" alt="" />
                                </div>
                                <div className="absolute inset-0 top-14 m-5 w-[50%]">

                                    <p className="text-xl font-bold">Finance & Restructuring</p>
                                    <p className=" text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore illum sunt ratione eius! Est?</p>
                                    <div className="bg-white font-bold rounded-full p-2 text-center w-[40%] mt-9 text-xs">Our Service</div>
                                </div>


                            </div>
                        </div>




                    </div>
                    <div className="absolute inset-0 md:mt-28 md:w-[30%]  mt-20 md:ms-28 top-[350px] left-[580px] ">
                        <div className="">
                            <div>
                                <div className="relative ">
                                    <img src="https://s3-alpha-sig.figma.com/img/41db/4a2e/832740ba71aeb210595c9ceea21fb025?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oChqAI2mzpA3GU6AyxWf3c2nIzee-MkoQVb14xGB-J7mfqTuA6paTMQxJ~vKo~UhoGMPBydZ6gJkoDl4RFKJJSdtqJkj8nBrujVxunXhr5shCoqsSfYK8OapodSi5OSHVnYLug5xgfUEXYd615CZKWI1JTjmlBtMET~QClgSBzlCvY86xdsCZEiXneduFRKmFrqBd0mQowNbYvDakpbmO3VCj4uAxaAnl5XemFC-3gd5CpwdNixO-cqLioAEleOzjSLWc4fMtorVcAtSU~lUxML1CDby4abl6LIki6ujkvDtVR6~sBddSh7Q75V7GDb8oPtFjgbgW70z3lzD7~DTfQ__" className="w-[55%] h-[300px] rounded-2xl shadow-xl" alt="" />
                                </div>
                                <div className="absolute inset-0 top-14 m-5 w-[50%]">

                                    <p className="text-xl font-bold">Finance & Restructuring</p>
                                    <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore illum sunt ratione eius! Est?</p>
                                    <div className="bg-white font-bold rounded-full p-2 text-center w-[40%] mt-9 text-xs">Our Service</div>
                                </div>


                            </div>
                        </div>




                    </div>
                </div>



            </div>

            <div className="flex justify-center">
                <img src="src\assets\images\image.JPG" className="h-24" alt="" />
            </div>







            {/* About */}
            <div className="flex gap-5 m-24 justify-center md:flex-row flex-col items-center mt-[250px]">
                <div className="space-y-7 w-[50%]">
                    <p className="bg-yellow-800 rounded-full text-center font-bold p-2 w-[50%]  ">ABOUT</p>
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
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBP_CgL5RVgtqWSoeMihZRCm2zzvBeEXJVUfsa9Z8aXY3Xw1ZQJd1PrXLHAVdAvWeI2so&usqp=CAU" className="h-10" alt="" />
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

                        <img src="https://media.istockphoto.com/id/1354192776/photo/shot-of-two-technicians-working-together-in-a-server-room.jpg?s=612x612&w=0&k=20&c=IlztITZgLND0iJs4MCwg8R67ZsooJzZ85IMGunU_pKo=" className="rounded-xl" alt="" />
                    </Card>
                </div>

            </div>

            {/* Service */}
            <div className="space-y-4 flex flex-col  justify-center items-center mt-5  bg-gray-300 p-10">
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
    </>)
}

export default About