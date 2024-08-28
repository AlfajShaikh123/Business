function TeamSingle() {
    return (<>

        {/* Profile */}
        <div className="md:pt-[150px] pt-[170px]">
            <div className="flex md:flex-row flex-col justify-center  p-5 gap-10 ">
                <div>
                    <img src="https://tbcdn.talentbrew.com/company/430/v2_0_US/img/profile-andres.jpg" alt="" className="rounded-xl shadow-xl" />
                </div>

                <div className="space-y-4 md:w-[50%] p-3">
                    <div className="flex md:flex-row flex-col justify-between">
                        <div className="text-center md:text-left">
                            <p className="font-bold text-xl">Sarah Jasmin</p>
                            <p className="text-sm text-gray-500">CEO AT Company</p>
                        </div>
                        <div className="flex gap-5 justify-center">
                            <p>I</p>
                            <p>F</p>
                            <p>T</p>
                            <p>L</p>
                        </div>
                    </div>

                    <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, debitis! Sed autem consequuntur ab consequatur eveniet et architecto, veritatis assumenda. Aliquam provident animi perspiciatis reprehenderit molestias quia iusto ratione sit eos sequi!\</p>
                    <hr />
                    <p className="font-bold text-xl">Past Expriance</p>
                    <p className="text-sm text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, illum corporis enim veniam quaerat perspiciatis minima ullam dolores, molestias quibusdam dolorem nemo deserunt repellat ea amet maxime velit ut ipsam!</p>
                </div>
            </div>
        </div>
        <div>
            <img src="src\assets\images\singleteams.JPG" alt="" />
        </div>
    </>)
}

export default TeamSingle