import React from "react";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Menu,
    Input,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import { Bars3Icon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";


function Header() {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
            <NavLink to={''}>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium text-white text-lg hover:text-green-300"
                >
                    <a href="#" className="flex items-center">
                        Home
                    </a>
                </Typography>
            </NavLink>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white text-lg hover:text-green-300"
            >
                <a href="#" className="flex items-center">
                    Page
                </a>
            </Typography>

            <NavLink to={"service"}>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium text-white text-lg hover:text-green-300"
                >

                    <a href="#" className="flex items-center">
                        Services
                    </a>
                </Typography>
            </NavLink>
            <NavLink to={"teams"}>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium text-white text-lg hover:text-green-300"
                >
                    <a href="#" className="flex items-center">
                        Work
                    </a>
                </Typography>
            </NavLink>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white text-lg hover:text-green-300"
            >
                <a href="#" className="flex items-center">
                    Pages
                </a>
            </Typography>
            <NavLink to={"about"}>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium text-white text-lg hover:text-green-300"
                >

                    <a href="#" className="flex items-center">
                        About us
                    </a>
                </Typography>
            </NavLink>

            <NavLink to={'contact'}>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-medium text-white text-lg hover:text-green-300"
            >
                <a href="#" className="flex items-center">
                    Contact
                </a>
            </Typography>
            </NavLink>
            <NavLink to={"blog"}>
                <Typography
                    as="li"
                    variant="small"
                    color="blue-gray"
                    className="p-1 font-medium text-white text-lg hover:text-green-300"
                >

                    <a href="#" className="flex items-center">
                        Blog
                    </a>
                </Typography>
            </NavLink>
        </ul>
    );


    return (<>
        <div className="w-full fixed z-20 ">
            <div className=" w-full z-40">
                <div className="bg-black p-3  flex justify-between flex-grow">
                    <div className="flex gap-5">
                        <i class="fa fa-clock-o text-yellow-400" aria-hidden="true"></i> <p className="text-white ms-5">Monday - Friday 8 AM - 9 PM </p>
                    </div>

                    <div className="flex gap-5">
                        <i class="fa fa-map-marker text-yellow-400" aria-hidden="true"></i>
                        <p className="text-white  me-5">725 Park Ave, New York</p>
                    </div>
                    <div className="text-white flex gap-5">
                        <p>I</p>
                        <p>F</p>
                        <p>L</p>
                        <p>T</p>
                    </div>
                </div>

            </div>
            <Navbar className="min-w-full bg-custom-dark rounded-none border-none">
                <div className="flex items-center justify-between text-blue-gray-900 w-full">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-white text-3xl"
                    >
                        AskExperts
                    </Typography>
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="hidden flex-wrap items-center gap-4 lg:flex ">
                        <div className="relative flex flex-row-reverse w-full gap-2 md:w-max ">
                            <Input
                                type="search"
                                color="white"
                                label="+ (888)4525478"
                                className="pr-20"
                                containerProps={{
                                    className: "min-w-[288px]",
                                }}
                            />
                            <Button
                                size="sm"
                                color="white"
                                className="!absolute right-1 top-1 rounded"
                            >
                                Search
                            </Button>
                        </div>
                        <Menu open={openMenu} handler={setOpenMenu} allowHover>


                        </Menu>
                    </div>
                    <IconButton
                        variant="text"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    {navList}
                    <div className="flex w-full flex-nowrap items-center gap-x-4 lg:hidden">
                        <Button variant="gradient" size="sm" fullWidth>
                            join
                        </Button>
                        <Menu open={openMenu} handler={setOpenMenu} allowHover>
                            <MenuHandler>
                                <Button
                                    fullWidth
                                    size="sm"
                                    variant="outlined"
                                    className="flex items-center justify-center gap-2"
                                >
                                    🇺🇸 English{" "}
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`w-3.h-3.5 h-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                                            }`}
                                    />
                                </Button>
                            </MenuHandler>

                        </Menu>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    </>)
}

export default Header