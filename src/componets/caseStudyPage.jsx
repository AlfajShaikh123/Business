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



function CaseStudy() {

    const data = [
        {
            label: "All",
            value: "html",
            navLink: "casestudysingle",

            image: ["https://img.freepik.com/free-photo/close-up-woman-working-laptop_23-2149300650.jpg", "https://img.freepik.com/free-photo/young-dark-haired-man-is-working-table-office-he-wears-blue-shirt-with-black-jacket-he-is-typing-laptop-looks-busy_197531-518.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2CxjiclymP1wr6Dyerddr9Y6YHGwDT35Wg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSA1RdE-yyOYyrSiOBRo0NHtQfH6T33QoL5w&s", "https://as1.ftcdn.net/v2/jpg/05/44/05/68/1000_F_544056854_nEMhWcVpycc2UkWHT28FwsFYZszoEkeW.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uionY2mVFdq77QjBtgo7EIcdLRa1roWRuA&s", "https://thumbs.dreamstime.com/b/serious-indian-business-man-working-studying-laptop-computer-young-professional-focused-ethnic-male-student-wearing-glasses-214010622.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75LXJW32u5PbG7apThVIQWFVIP4U-vG1Chw&s", "https://www.tuv.com/content-media-files/master-content/services/systems/0319-tuv-rheinland-advanced-training-for-working-professionals/tuv-rheinland-advanced-training-for-working-professionals.jpg"]
        },
        {
            label: "Taxes & Efficiency",
            value: "react",
            image: ["https://img.freepik.com/free-photo/close-up-woman-working-laptop_23-2149300650.jpg", "https://img.freepik.com/free-photo/young-dark-haired-man-is-working-table-office-he-wears-blue-shirt-with-black-jacket-he-is-typing-laptop-looks-busy_197531-518.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2CxjiclymP1wr6Dyerddr9Y6YHGwDT35Wg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSA1RdE-yyOYyrSiOBRo0NHtQfH6T33QoL5w&s", "https://as1.ftcdn.net/v2/jpg/05/44/05/68/1000_F_544056854_nEMhWcVpycc2UkWHT28FwsFYZszoEkeW.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uionY2mVFdq77QjBtgo7EIcdLRa1roWRuA&s", "https://thumbs.dreamstime.com/b/serious-indian-business-man-working-studying-laptop-computer-young-professional-focused-ethnic-male-student-wearing-glasses-214010622.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75LXJW32u5PbG7apThVIQWFVIP4U-vG1Chw&s", "https://www.tuv.com/content-media-files/master-content/services/systems/0319-tuv-rheinland-advanced-training-for-working-professionals/tuv-rheinland-advanced-training-for-working-professionals.jpg"],
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Investment banking",
            value: "vue",
            image: ["https://img.freepik.com/free-photo/close-up-woman-working-laptop_23-2149300650.jpg", "https://img.freepik.com/free-photo/young-dark-haired-man-is-working-table-office-he-wears-blue-shirt-with-black-jacket-he-is-typing-laptop-looks-busy_197531-518.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ2CxjiclymP1wr6Dyerddr9Y6YHGwDT35Wg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSA1RdE-yyOYyrSiOBRo0NHtQfH6T33QoL5w&s", "https://as1.ftcdn.net/v2/jpg/05/44/05/68/1000_F_544056854_nEMhWcVpycc2UkWHT28FwsFYZszoEkeW.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uionY2mVFdq77QjBtgo7EIcdLRa1roWRuA&s", "https://thumbs.dreamstime.com/b/serious-indian-business-man-working-studying-laptop-computer-young-professional-focused-ethnic-male-student-wearing-glasses-214010622.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75LXJW32u5PbG7apThVIQWFVIP4U-vG1Chw&s", "https://www.tuv.com/content-media-files/master-content/services/systems/0319-tuv-rheinland-advanced-training-for-working-professionals/tuv-rheinland-advanced-training-for-working-professionals.jpg"],
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Financial Plan",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Audit & Evaluation",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
    ];
    return (<>
        <div className="">



            {/* Banner */}

            <div className="relative md:top-16 top-32">
                <img src="https://s3-alpha-sig.figma.com/img/6867/356d/27868ecc2732c68f14060fa86e4ccc66?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DvJ2Rss9ivec6kyECjBJzJoHpBEZPgqaijxVlGboUqQTH4PRX9zz56omuJivW8uUdn19SAYDCLJBxzOEGPoxsAWMfwMqhTKUzqS5ivjczK1fmHcEGXPv7YHcwZYg9yWO5dqN6frtv1h2IOSoX7D0hzkI~AjnTnqw3YitOMpx~vXw4Kam-QvwO6IZ88y~cmU5A~gC4KGZyiRFGh6BSJySE82voD8w6GOWEEIFhzfJZUTVGJkcoEtwueB2Sc8-k5EtYSnoRTnHgu~PS3WjNBpSV~VyNjQg2a733ZXyPiL7LjT4ctV6gNaYDCpQXIxRO8dgKzWNmyqaqrC3f~lNh1rR0A__" className="md:w-[1983.86px] md:h-[650px] h-[350px]" alt="" />

                <div className="absolute inset-0 md:mt-28 md:w-[25%]  mt-10 md:ms-28 ">
                    <div className="md:bg-white bg-opacity-80 p-8 rounded-lg shadow-lg  flex-wrap   overflow-hidden  bg-gray-400 ">
                        <p className="bg-yellow-800 rounded-full mb-2 text-center w-[50%]">Case Studies</p>
                        <h1 className="text-3xl font-bold md:text-gray-800 text-black   flex flex-grow">Case Studies</h1>

                    </div>

                </div>
            </div>

            {/* Tabs */}

            <div className="mt-20 md:m-20">
                <Tabs value="html" className="md:m-20 ">
                    <TabsHeader
                        className="bg-transparent md:m-14 pt-14"
                        indicatorProps={{
                            className: "bg-gray-900/10 shadow-none !text-gray-900 ",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className="p-2">
                                <p className="text-sm font-bold"> {label}</p>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className="">
                        {data.map(({ value, image, navLink }) => (
                            <TabPanel key={value} value={value} className="grid  md:grid-cols-3 grid-cols-2 gap-3 md:w-[80%] m-auto">
                                {image && image.map((item) => (
                                    <div className="">
                                        <NavLink to={navLink}>
                                            <div className="flex justify-center">
                                                <img src={item} alt="" srcset="" className="h-44  rounded-xl shadow-xl" />
                                            </div>
                                        </NavLink>
                                    </div>
                                ))}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>


            {/* Process */}
            <div className="flex gap-5 p-7  md:flex-row flex-col w-full justify-center ">
                <div className="space-y-7  md:w-[50%]  m-3 ">
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

export default CaseStudy