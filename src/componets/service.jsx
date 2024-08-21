import Header from "./header"
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
function Service() {

    const serviceData = [
        {
            icon: "https://cdn-icons-png.flaticon.com/512/12451/12451528.png",
            title: "Audit & Evalution",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reprehenderit, laudantium ad eligendi aliquid voluptatem voluptatum vitae asperiores dolore itaque.",
            navLink:"servicePage"
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
           


            <div className="relative md:top-16 top-32">
                <img src="https://s3-alpha-sig.figma.com/img/9c82/f7b3/93ed35f06ea01dc5653cd432d8a5502d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4BMsHdo~P09pgMzdUljnR4MRUZ5Bxb5OrE8MHnhEAGYiBULgtbFGXoK17~emfEFy4j2bPRxLjrdErsRd1xswFNk5IhAyBq4lnY4MYP5rTkBRswLlv-0v~ODWSf7j5wWT9YqTgPWdYUSHvxhkFw5LembZTTmflJ7EgyzOksihGnGnvgeyHuSVgPYazykw9~6dalPUJEPHir4DXQtLJeBCQ5m4E4uyEu-zIusG1L5rFVZgLqxk6nKJQU5ShrDwIo6xRJfz11tpseJynVHSR28feUf1Ftr4kiOfEuFcf9kExHsX7NWCpaO424P5WRY8Bt9MzjWY0JC3GEbyYJWDX6XUA__" className="w-[1983.86px] max-h-[550px]" alt="" />

                <div className="absolute inset-0 md:mt-28 md:w-[30%]  mt-10 md:ms-28 ">
                    <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden">
                    <p className="bg-yellow-800 font-bold text-center p-1 rounded-full">S E R V I C E S</p>
                        <h1 className="text-3xl font-bold text-gray-800 flex flex-grow mt-5">Creative Services For Boost Your Business Growth</h1>
                        
                    </div>

                </div>
            </div>

            <div className="flex justify-center">
                <img src="src\assets\images\image.JPG" className="h-24" alt="" />
            </div>
           

            {/* Services */}
            <div className="space-y-4 flex flex-col  justify-center items-center mt-5  bg-gray-300 p-10">
                <p className="bg-green-900 text-center p-2 rounded-xl w-[10%]">SERVICES</p>
                <p className="text-center font-bold text-2xl">Get Control Over Your Business I take <br /> your finance to next level</p>

                <div className="grid md:grid-flow-row-2 md:grid-cols-3 p-5 gap-5 m-42">
                    {serviceData.map((item) => (
                        <Link to={item.navLink}>
                        <div className="bg-gray-400 p-10 rounded-xl hover:bg-black hover:text-white cursor-pointer space-y-3">
                            <img src={item.icon} alt="" className="h-14" />
                            <h1 className="font-bold text-lg">{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                        </Link>
                    ))}
                </div>


            </div>

            {/* process */}

            <div className="flex justify-center flex-col items-center md:flex-row mt-10 gap-7" >
                <div>
                    <img src="src\assets\images\imageCard2.JPG" />
                </div>

                <div className="w-[30%]  flex flex-col items-center justify-center space-y-4">
                    <p className="bg-yellow-800 font-bold text-center p-3 rounded-full">P R O C E S S</p>
                    <div className=" justify-around ">
                    <h1 className="font-bold text-3xl">Our Consulting Service Development</h1>
                    {
                        processData.map((item) => (
                            <div className="">
                                <div className="flex items-center gap-2 md:flex-row ">
                                    <p><img src={item.icon} className="h-5" /></p>
                                    <p className="font-semibold">{item.title}</p>
                                </div>
                                <div>
                                    <p className="text-gray-600 ms-10">  {item.discription}</p>
                                </div>
                            </div>


                        ))
                    }
                    </div>
                    

                </div>

            </div>

            {/* Pricing */}

            <div className="space-y-7 bg-gray-300  p-10">
                <p className="bg-green-800 rounded-full text-center font-bold p-2    ">P R I C I N G</p>
                <h1 className="text-3xl font-bold text-center">Our Pricing Plan</h1>
                <div className="md:grid md:grid-rows-2 md:grid-cols-3 gap-5 flex flex-col   p-5   ">
                    {
                        pricingData.map((item) => (
                            <div className="bg-white p-5 rounded-xl shadow-2xl">
                                <div className="bg-card_color text-white rounded-xl p-5 space-y-3 ">
                                    <p className="font-bold text-xl">{item.plan}</p>
                                    <p>{item.description}</p>
                                    <hr />
                                    <div>
                                        <div className="flex gap-2 items-center">
                                            <h2 className="font-bold text-3xl ">${item.price}</h2>
                                            <p className="bg-black rounded-xl p-1 text-center text-sm">MONTHLY</p>
                                        </div>

                                    </div>

                                </div>
                                <div>
                                    <div className="flex items-center gap-11 m-4 ">
                                        <p className="bg-black p-1 text-white rounded-full text-center">{">"}</p>
                                        <p>24/7 system monitoring</p>
                                    </div>
                                    <div className="flex items-center gap-11 m-4 ">
                                        <p className="bg-black p-1 text-white rounded-full text-center">{">"}</p>
                                        <p>24/7 system monitoring</p>
                                    </div>
                                    <div className="flex items-center gap-11 m-4 ">
                                        <p className="bg-black p-1 text-white rounded-full text-center">{">"}</p>
                                        <p>24/7 system monitoring</p>
                                    </div>
                                    <div className="flex items-center gap-11 m-4 ">
                                        <p className="bg-black p-1 text-white rounded-full text-center">{">"}</p>
                                        <p>24/7 system monitoring</p>
                                    </div>
                                    <div className="flex items-center gap-11 m-4 ">
                                        <p className="bg-black p-1 text-white rounded-full text-center">{">"}</p>
                                        <p>24/7 system monitoring</p>
                                    </div>


                                    <Button variant="outlined" className="mt-10 flex justify-center hover:bg-yellow-700 hover:text-red-700">Get This Plan</Button>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>

            {/* Process */}
            <div className="flex gap-5 m-10 justify-center md:flex-row flex-col items-center">
                <div className="space-y-7 w-[50%]">
                    <p className="bg-yellow-800 rounded-full text-center font-bold p-2   ">P R O C E S S</p>
                    <h1 className="text-3xl font-bold ">Contact Us. It’s Easy.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nihil molestiae inventore blanditiis culpa harum magnam exercitationem. Ducimus, libero possimus.</p>

                    <div className="space-y-16">
                        <div className="flex items-center gap-2">
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
                    <Card color="transparent" shadow={false}>

                        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 grid">
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

export default Service