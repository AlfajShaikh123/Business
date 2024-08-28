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



function Contact() {

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
                    <div className="md:bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden  bg-gray-400 ">
                        <p className="bg-yellow-800 rounded-full mb-2 text-center w-[50%]">CONTACT US</p>
                        <h1 className="text-3xl font-bold md:text-gray-800 text-black   flex flex-grow">Feel Free To Reach Us <br /> Growth advisors</h1>

                    </div>

                </div>
            </div>







            {/* LETS TALK */}
            <div>
                <div className="flex gap-5 md:mt-24 mt-40  justify-center md:flex-row-reverse flex-col items-center  ">
                    <div className="space-y-7 md:w-[50%] p-5">
                        <p className="bg-green-800 rounded-full text-center font-bold p-2 w-[50%]  ">LETS TALK</p>
                        <h1 className="text-3xl font-bold ">Get In Touch With Us</h1>
                        <p className="text-green-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
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

               
            </div>





          
            {/* our history */}
            <div className=" mt-14 p-20 space-y-3">
                
                <div className="flex justify-center">
                    <img src="src\assets\images\singleteams.JPG" alt="" />
                </div>

            </div>

           
             {/* Process */}
             <div className="flex gap-5 p-7  md:flex-row flex-col w-full justify-center ">
                <div className="space-y-7  md:w-[50%]  m-3 ">
                    <div  className="bg-yellow-800 rounded-full text-center font-bold p-2 md:w-[50%]">
                    <p>P R O C E S S</p>
                    </div>
                  
                    <h1 className="md:text-3xl text-2xl font-bold ">Contact Us. It’s Easy.</h1>
                    <div className="">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nihil molestiae inventore blanditiis culpa harum magnam exercitationem. Ducimus, libero possimus.</p>
                    </div>
                   

                    <div className="space-y-16">
                        <div className="flex items-center  gap-2">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBP_CgL5RVgtqWSoeMihZRCm2zzvBeEXJVUfsa9Z8aXY3Xw1ZQJd1PrXLHAVdAvWeI2so&usqp=CAU" className="h-10" alt="" />
                            </div>
                            <div>
                                <p className="">Call Today</p>
                                <p className="font-bold text-sm">+1800 100 900</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div>
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/013/468/392/small/clock-time-line-icon-png.png" className="h-10" alt="" />
                            </div>
                            <div>
                                <p className="">Monday to Friday</p>
                                <p className="font-bold text-sm">9AM - 5PM </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kBSNFYW5uvrkn1Gpr6kIloe9Eb0D1zUW2A&s" className="h-10" alt="" />
                            </div>
                            <div>
                                <p className="">USA Office</p>
                                <p className="font-bold text-sm">195 Devonshire St Boston, MA 02110</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <Card color="transparent" shadow={false} className="">

                        <form className="mt-8 mb-2 w-80 max-w-screen-lg  grid">
                            <div>

                            </div>
                            <div className="mb-1 flex flex-col  gap-6">
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Full name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Email
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="name@mail.com"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Phone
                                </Typography>
                                <Input
                                    type="text"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />

                                <Typography variant="h6" color="blue-gray" className="-mb-3">
                                    Company (optional)
                                </Typography>
                                <Input
                                    type="text"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>

                            <Button className="mt-6" fullWidth>
                                Send Message
                            </Button>

                        </form>
                    </Card>
                </div>

            </div>
        </div>
    </>)
}

export default Contact