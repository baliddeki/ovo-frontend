import {useForm} from "react-hook-form";
import {signupSchema} from "@/assets/types.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import z from 'zod'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '@/components/ui/form'
import {Input} from "@/components/ui/input.tsx";
import usePasswordToggle from "@/assets/utils.tsx";
import {LuEye, LuEyeOff} from "react-icons/lu";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
const SignUp = ()=>{
    const {showPassword, handleShowPassword} = usePasswordToggle();
    const form = useForm<z.infer <typeof signupSchema>>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })
    const submitForm = (data: z.infer<typeof signupSchema>)=>{
        console.log(data)
    }
    return (
        <>
            <div className={"max-w-[35rem] w-full p-8 vertical-spacing bg-white rounded-xl shadow-lg shadow-gray-200 mx-auto"}>
                <h3 className={"text-2xl font-bold"}>Create an account</h3>
                <p className={"text-gray-8 text-sm"}>Enter your personal details to create an account</p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(submitForm)} className={"w-full vertical-spacing mt-4 gap-6"}>
                        <div className={"grid md:grid-cols-2 gap-4"}>
                            <FormField
                                control={form.control}
                                name={"firstName"}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={"text-lg"}>First Name <span className={"text-sm text-orange-5"}>*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                                <Input
                                                    placeholder="enter first name" {...field}
                                                    type={"text"}
                                                    required={true}
                                                    className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>

                                )}
                            />

                            <FormField
                                control={form.control}
                                name={"lastName"}
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel className={"text-lg"}>Last Name</FormLabel>
                                        <FormControl>
                                            <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                                <Input
                                                    placeholder="enter last Name" {...field}
                                                    type={"text"}
                                                    className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>

                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name={"email"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-lg"}>Email Address <span className={"text-sm text-orange-5"}>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                            <Input
                                                placeholder="enter email" {...field}
                                                type={"email"}
                                                required={true}
                                                className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                            />
                                        </div>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>

                            )}
                        />

                        <FormField
                            control={form.control}
                            name={"password"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-lg"}>Password <span className={"text-sm text-orange-5"}>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div
                                            className={"md:ml-2 border-[1px] rounded-lg px-4 py-2 flex items-center gap-4 justify-between"}>
                                            <Input
                                                placeholder="enter password" {...field}
                                                type={`${showPassword ? "text" : "password"}`}
                                                required={true}
                                                className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                            />
                                            {
                                                showPassword ? <button type={"button"} onClick={handleShowPassword}><LuEyeOff
                                                        className={"text-2xl text-gray-3"}/></button> :
                                                    <button type={"button"} onClick={handleShowPassword}><LuEye className={"text-2xl text-gray-3"}/>
                                                    </button>
                                            }
                                        </div>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>

                            )}
                        />

                        <FormField
                            control={form.control}
                            name={"confirmPassword"}
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className={"text-lg"}>Confirm Password <span className={"text-sm text-orange-5"}>*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <div
                                            className={"md:ml-2 border-[1px] rounded-lg px-4 py-2 flex items-center gap-4 justify-between"}>
                                            <Input
                                                placeholder="confirm password" {...field}
                                                type={`${showPassword ? "text" : "password"}`}
                                                required={true}
                                                className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                            />
                                            {
                                                showPassword ? <button type={"button"} onClick={handleShowPassword}><LuEyeOff
                                                        className={"text-2xl text-gray-3"}/></button> :
                                                    <button type={"button"} onClick={handleShowPassword}><LuEye className={"text-2xl text-gray-3"}/>
                                                    </button>
                                            }
                                        </div>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>

                            )}
                        />

                    </form>

                    <Button className={"bg-blue-5 text-white mt-4 hover:bg-blue-400 duration-300"}>Signup</Button>
                </Form>
                <div className={"mt-4"}>
                    <p className={"text-sm"}>Already have an Account? <Link to={"/auth/signin"} className={"ml-1 text-blue-5"}>Signin</Link></p>
                </div>
            </div>
        </>
    )
}
export default SignUp