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
function Home() {

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

    return (<>
        <div className="">


            {/* Banner */}
            <div className="relative md:top-16 top-32">
                <img src="https://s3-alpha-sig.figma.com/img/3cbf/98f8/ce65bc598ffea1fa523885cb66ce578d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZkofpC1bjHnz0wopWdk0d2qhqxO7MqgeJIR8eDyw~OlGn9GxSD38yDeulsNJ17OHkNnMCYM-SNhGRKdh9KJyy949x5OH813cvTJrM8-A3TDGaPmFYB45rJ0SZlgnftTfBjFmdNwmmAp~w3CQC8zq92fqyDqSXc484WefvB71Ax2GEnnHo-SnJxogspwk1ICkGw-7~8MD~PcebBqUeaiu4QWXnfXBiXhuvxYhWNQcC4QXJSqc8WMGhSF67NtVc0H0qmRrS7t7V6E9Gxt3Vo9VZF6ImAJjeB5E-zXQ~q-dYYjuvivjYp2AmU1ryfeDs22Tt3PTLKNEHsSy9VrTRk1ag__" className="md:w-[1983.86px] md:h-[650px] h-[350px]" alt="" />

                <div className="absolute inset-0 md:mt-28 md:w-[25%]  mt-10 md:ms-28 ">
                    <div className="md:bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden bg-gray-400  ">
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
            {/* About us card */}
            <div className="flex p-5 md:flex-row flex-col place-items-center md:justify-center md:mt-5  mt-20   ">
                <div className="md:space-y-7 space-y-9  ">
                    <p className="bg-yellow-800 rounded-full p-2 font-bold text-center w-[50%] m-auto md:ml-0">ABOUT US</p>
                    <h1 className="font-bold text-3xl text-center md:text-left">About our Consuting <br /> Agency Team</h1>
                    <p className="font-light text-center md:text-left ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, amet.</p>
                    <div className="flex gap-5 justify-center md:justify-start  ">
                        <div className="bg-gray-200 flex flex-col justify-center items-center p-2 rounded-xl ">
                            <p className="font-bold text-xl">400 +</p>
                            <p className="text-sm">Business Services</p>
                        </div>
                        <div className="bg-gray-200 flex flex-col justify-center items-center p-2 rounded-xl ">
                            <p className="font-bold text-xl">100 +</p>
                            <p className="text-sm">Happy Customer</p>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center mt-5 mr-7 md:ms-20">
                    <img src="src\assets\images\imageCard.JPG" alt="" />
                </div>
            </div>

            {/* Services */}
            <div className="space-y-4 flex flex-col  justify-center items-center mt-5  bg-gray-300 p-10 ">
                <div className="">
                    <p className="bg-green-800 rounded-full p-2 font-bold text-center  m-auto md:ml-0  ">Service</p>
                </div>

                <div className="text-center font-bold text-2xl m-14">
                    <p>Get Control Over Your Business I take <br /> your finance to next level</p>
                </div>


                <div className="grid md:grid-flow-row-2 md:grid-cols-3 gap-5 ">
                    {serviceData.map((item) => (
                        <div className="bg-gray-400 p-10 rounded-xl hover:bg-black hover:text-white cursor-pointer space-y-3  ">
                            <img src={item.icon} alt="" className="h-14" />
                            <h1 className="font-bold text-lg">{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>


            </div>

            {/* process */}

            <div className="flex justify-center flex-col items-center md:flex-row mt-10 gap-7 p-5" >
                <div className="">
                    <img src="src\assets\images\imageCard2.JPG" className="" />
                </div>

                <div className=" flex flex-col items-center justify-center space-y-1  ">
                    <div className="bg-green-800 rounded-full p-2 font-bold text-center w-[50%] md:w-[10%] m-auto md:ml-0 md:m-auto ">
                        <p >PROCESS</p>
                    </div>

                    <div className=" justify-around ">
                        <div className="font-bold md:text-3xl text-xl text-center m-5">
                            <h1>Our Consulting Service Development</h1>
                        </div>

                        {
                            processData.map((item) => (
                                <div className="md:space-y-3 space-y-2 text-justify p-2">
                                    <div className="flex items-center gap-2 md:flex-row mt-5  ">
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

            <div className="space-y-7 bg-gray-300  p-5 md:h-[800px] ">
                <div className="bg-green-800 rounded-full p-2 font-bold text-center  m-auto md:ml-0 md:m-auto ">
                    <p >PRICING</p>
                </div>

                <h1 className="md:text-3xl text-2xl font-bold text-center">Our Pricing Plan</h1>
                <div className="md:grid md:grid-rows-2 md:grid-cols-3 gap-5 flex flex-col">
                    {
                        pricingData.map((item) => (
                            <div className="bg-white p-5 rounded-xl shadow-2xl ">
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
            <div className="flex gap-5 p-7  md:flex-row flex-col w-full ">
                <div className="space-y-7  md:w-[50%]  m-3">
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

                        <form className="mt-8 mb-2 w-80 max-w-screen-lg  grid ">
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

export default Home