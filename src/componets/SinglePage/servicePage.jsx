
import { useState } from "react";









const serviceData = [
    {
        icon: "https://cdn-icons-png.flaticon.com/512/12451/12451528.png",
        title: "Audit & Evalution",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit, laudantium ad eligendi aliquid voluptatem voluptatum vitae asperiores dolore itaque."
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

const processData = [
    {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lM2thniu0ZF7PJ_39D5MQ5DexrRx0P_M_w&s',
        title: "Banking and Finance",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima velit aspernatur obcaecati voluptate id iste nostrum beatae aliquid quam."
    },
    {
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvGvLuj53nZbrBFE7ScDmFJLLkJH4BAGecw&s',
        title: "Logistic and Transportation",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima velit aspernatur obcaecati voluptate id iste nostrum beatae aliquid quam."
    },
    {
        icon: 'https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-trading-line-icon-vector-png-image_6708688.png',
        title: "Trading",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima velit aspernatur obcaecati voluptate id iste nostrum beatae aliquid quam."
    }
]

const pricingData = [
    {
        plan: "Basic Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: 35,

    },
    {
        plan: "Standard Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: 56,

    },
    {
        plan: "Standard Plan",
        description: "The argument in favor of using to filler text goes something.",
        price: 75,

    },
]
// 




function formatCardNumber(value) {
    const val = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = val.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];



    for (let i = 0, len = match.length; i < len; i += 4) {
        parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
        return parts.join(" ");
    } else {
        return value;
    }
}

function formatExpires(value) {
    return value
        .replace(/[^0-9]/g, "")
        .replace(/^([2-9])$/g, "0$1")
        .replace(/^(1{1})([3-9]{1})$/g, "0$1/$2")
        .replace(/^0{1,}/g, "0")
        .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, "$1/$2");
}





import {
    Card,
    CardHeader,
    CardBody,
    Input,
    Button,
    Collapse,
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
import { NavLink } from "react-router-dom";

function ServicePage() {


    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen((cur) => !cur);

    const [open2, setOpen2] = useState(false);
    const toggleOpen2 = () => setOpen2((cur) => !cur);

    const [open3, setOpen3] = useState(false);
    const toggleOpen3 = () => setOpen3((cur) => !cur);

    const [open4, setOpen4] = useState(false);
    const toggleOpen4 = () => setOpen4((cur) => !cur);
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

    const processData = [
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lM2thniu0ZF7PJ_39D5MQ5DexrRx0P_M_w&s',
            title: "Banking and Finance",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima velit aspernatur obcaecati voluptate id iste nostrum beatae aliquid quam."
        },
        {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWvGvLuj53nZbrBFE7ScDmFJLLkJH4BAGecw&s',
            title: "Logistic and Transportation",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima velit aspernatur obcaecati voluptate id iste nostrum beatae aliquid quam."
        },
        {
            icon: 'https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-trading-line-icon-vector-png-image_6708688.png',
            title: "Trading",
            discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima velit aspernatur obcaecati voluptate id iste nostrum beatae aliquid quam."
        }
    ]

    const pricingData = [
        {
            plan: "Basic Plan",
            description: "The argument in favor of using to filler text goes something.",
            price: 35,

        },
        {
            plan: "Standard Plan",
            description: "The argument in favor of using to filler text goes something.",
            price: 56,

        },
        {
            plan: "Standard Plan",
            description: "The argument in favor of using to filler text goes something.",
            price: 75,

        },
    ]

    return (<>
        <div className="">


            {/* Banner */}
            <div className="relative md:top-16 top-32">
                <img src="https://s3-alpha-sig.figma.com/img/9c82/f7b3/93ed35f06ea01dc5653cd432d8a5502d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4BMsHdo~P09pgMzdUljnR4MRUZ5Bxb5OrE8MHnhEAGYiBULgtbFGXoK17~emfEFy4j2bPRxLjrdErsRd1xswFNk5IhAyBq4lnY4MYP5rTkBRswLlv-0v~ODWSf7j5wWT9YqTgPWdYUSHvxhkFw5LembZTTmflJ7EgyzOksihGnGnvgeyHuSVgPYazykw9~6dalPUJEPHir4DXQtLJeBCQ5m4E4uyEu-zIusG1L5rFVZgLqxk6nKJQU5ShrDwIo6xRJfz11tpseJynVHSR28feUf1Ftr4kiOfEuFcf9kExHsX7NWCpaO424P5WRY8Bt9MzjWY0JC3GEbyYJWDX6XUA__" className="md:w-[1983.86px] md:h-[650px] h-[350px]" alt="" />

                <div className="absolute inset-0 md:mt-28 md:w-[25%]  mt-10 md:ms-28 ">
                    <div className="md:bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden  ">
                        <h1 className="text-3xl font-bold md:text-gray-800 text-black   flex flex-grow">Your Small business <br /> Growth advisors</h1>
                        <p className="md:text-gray-600 mt-2 text-black">
                            This is some card data that appears in front of the image. You can add
                            anything here, like buttons or text.
                        </p>
                        <Button className="mt-3 rounded-full">Our Services</Button>
                    </div>

                </div>
            </div>

            <div className="flex justify-center">
                <img src="src\assets\images\image.JPG" className="h-24" alt="" />
            </div>



            //  {/* Services */}
            <div className="mt-5  bg-gray-300 md:p-10 p-4">
                <div className="p-5 flex gap-20">
                    <div className="space-y-3">
                        <img src="https://cdn-icons-png.flaticon.com/512/2090/2090478.png" className="h-14" alt="" />
                        <p>Financial Projections</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, unde!</p>
                    </div>
                    <div className="flex mt-10 gap-3 cursor-pointer items-center md:ms-14 me-5  ">
                        <img src="https://cdn-icons-png.flaticon.com/512/109/109618.png" alt="" className="h-8 bg-gray-600 p-2 rounded-full hover:bg-yellow-700" /><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" className="h-8 bg-gray-600 p-2 rounded-full hover:bg-yellow-700" alt="" />
                    </div>
                </div>
                <div className="space-y-4 flex flex-col  justify-center items-center ">


                    <div className="grid md:flex  md: p-5 gap-5 m-42">
                        {serviceData.map((item) => (
                            <div className="bg-gray-400 p-10 rounded-xl hover:bg-black hover:text-white cursor-pointer space-y-3">
                                <img src={item.icon} alt="" className="h-14" />
                                <h1 className="font-bold text-lg">{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>


                </div>
            </div>



            {/* process */}

            <div className="flex justify-center flex-col items-center md:flex-row mt-10 gap-7" >
                <div className="mt-14">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrWBYCLQeG3VO9VI8OF9KPto6gEEt73iJwNw&s" className="h-[300px]" />
                </div>

                <div className="md:w-[30%]  flex flex-col items-center justify-center space-y-7 p-5">
                    <div className="bg-yellow-800 font-bold text-center p-2 rounded-full w-full">
                        <p className="md:text-lg ">WELL WORK WITH YOU</p>
                    </div>

                    <div className=" justify-around space-y-2 ">
                        <h1 className="font-bold text-3xl">What To Expect</h1>

                        <div className="space-y-5 ">
                            <div className="flex items-center gap-2 md:flex-row ">

                                <p className="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, asperiores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore suscipit aut natus quas accusamus reprehenderit nostrum! Enim autem porro error.</p>
                            </div>          <div className="flex gap-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWW3DA5J_7AzFHEYYpj7lPFi2yhNULYRB57A&s" className="h-6" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae.</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWW3DA5J_7AzFHEYYpj7lPFi2yhNULYRB57A&s" className="h-6" alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vitae.</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            {/* our history */}
            <div className="bg-black mt-14 p-20">
                <p className="bg-green-800 p-1 font-semibold text-center rounded-full">OUR HISTORY</p>
                <p className="text-white text-center mt-3 text-2xl font-bold">Strategy for Every Stage in <br /> the Client's Journey</p>
                <img src="src\assets\images\vediopic.JPG" alt="" />
            </div>

            {/* Process */}
            <div className="flex gap-5 p-7  md:flex-row flex-col w-full ">
                <div className="space-y-7  md:w-[50%]  m-3">
                    <div className="bg-yellow-800 rounded-full text-center font-bold p-2 md:w-[50%]">
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

                <div className="mt-20">
                    <img src="https://media.istockphoto.com/id/1394348691/photo/two-diverse-businesswomen-working-together-on-a-digital-tablet-and-laptop-in-an-office.jpg?s=612x612&w=0&k=20&c=f6su_CQgz_XQu9RjruT7xFzEBMTRmE1wj3UMxUTSbN4=" alt="" className="shadow-xl rounded-2xl" />
                </div>

            </div>

            {/* FAQ */}
            <div className="space-y-6 bg-gray-300 md:p-20 p-10">
                <p className="bg-green-800 rounded-full text-center font-bold p-2   ">FAQ</p>
                <p className="text-3xl font-bold text-center">Customer Quetions</p>
                <div className="md:ms-[450px] ">
                    <div className="flex gap-2 items-center">
                        <p>What will happen when I’ve sent my application?</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="h-5" onClick={toggleOpen} alt="" />
                    </div>

                    <Collapse open={open}>
                        <Card className=" md:w-8/12 mt-3">
                            <CardBody>
                                <Typography>                       Use our Tailwind CSS collapse for your website. You can use if for
                                    accordion, collapsible items and much more.
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

                <hr />
                <div className="md:ms-[450px] ">
                    <div className="flex gap-2 items-center">
                        <p>What will happen when I’ve sent my application?</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="h-5" onClick={toggleOpen2} alt="" />
                    </div>

                    <Collapse open={open2}>
                        <Card className="md:w-8/12 mt-3">
                            <CardBody>
                                <Typography>
                                    Use our Tailwind CSS collapse for your website. You can use if for
                                    accordion, collapsible items and much more.
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

                <hr />
                <div className="md:ms-[450px] ">
                    <div className="flex gap-2 items-center">
                        <p>What will happen when I’ve sent my application?</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="h-5" onClick={toggleOpen3} alt="" />
                    </div>

                    <Collapse open={open3}>
                        <Card className="md:w-8/12 mt-3">
                            <CardBody>
                                <Typography>
                                    Use our Taddilwind CSS collapse for your website. You can use if for
                                    accordion, collapsible items and much more.
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

                <hr />
                <div className="md:ms-[450px] ">
                    <div className="flex gap-2 items-center">
                        <p>What will happen when I’ve sent my application?</p>
                        <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="h-5" onClick={toggleOpen4} alt="" />
                    </div>

                    <Collapse open={open4}>
                        <Card className="md:w-8/12 mt-3">
                            <CardBody>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quaerat eius vitae possimus quia veniam eveniet dolores tempore exercitationem laboriosam!
                                    accordion, collapsible items and much more.
                                </Typography>
                            </CardBody>
                        </Card>
                    </Collapse>
                </div>

            </div>
        </div>
    </>)
}

export default ServicePage