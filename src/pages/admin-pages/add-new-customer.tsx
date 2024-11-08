import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {LuEye, LuEyeOff} from "react-icons/lu";
import {Button} from "@/components/ui/button.tsx";
import usePasswordToggle from "@/assets/utils.tsx";
import {useForm} from "react-hook-form";
import z from "zod";
import {createUserSchema} from "@/assets/types.ts";
import {zodResolver} from "@hookform/resolvers/zod";

const AddNewCustomer = ()=>{
    const {showPassword, handleShowPassword} = usePasswordToggle();
    const form = useForm<z.infer <typeof createUserSchema>>({
        resolver: zodResolver(createUserSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            addProduct: false,
            upDateProduct: false,
            deleteProduct: false,
        }
    })

    const submitForm = (data: z.infer<typeof createUserSchema>)=>{
        console.log(data)
    }
    return (
        <>
            <div className={"vertical-spacing"}>
                <div className={"flex items-center justify-between gap-4"}>
                    <h2 className={"text-2xl md:text-3xl font-bold"}>Add new User</h2>
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/admin/customers">Customers</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator/>
                                <BreadcrumbItem>
                                    <BreadcrumbPage>New User</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                    </div>
                </div>
            </div>

            <div className={""}>


                <Form {...form}>
                    {/*Add use form*/}

                    <div className={"bg-white mt-8 rounded-lg p-6 flex gap-8 flex-wrap"}>
                        <div>
                            <div className={"vertical-spacing"}>
                                <h2 className={"text-lg md:text-2xl font-extrabold"}>Account</h2>
                                <p>Fill in the information below to add new account </p>
                            </div>
                        </div>
                        <div className={"flex-1"}>
                            <form onSubmit={form.handleSubmit(submitForm)}
                                  className={"w-full vertical-spacing mt-4 gap-6"}>
                                <FormField
                                    control={form.control}
                                    name={"firstName"}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>First Name <span
                                                className={"text-sm text-orange-5"}>*</span>
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
                                                        autoComplete={"off"}
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


                                <FormField
                                    control={form.control}
                                    name={"email"}
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel className={"text-lg"}>Email Address <span
                                                className={"text-sm text-orange-5"}>*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div className={"md:ml-2 border-[1px] rounded-lg px-4 py-2"}>
                                                    <Input
                                                        autoComplete={"off"}
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
                                            <FormLabel className={"text-lg"}>Password <span
                                                className={"text-sm text-orange-5"}>*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div
                                                    className={"md:ml-2 border-[1px] rounded-lg px-4 py-2 flex items-center gap-4 justify-between"}>
                                                    <Input
                                                        autoComplete={"off"}
                                                        placeholder="enter password" {...field}
                                                        type={`${showPassword ? "text" : "password"}`}
                                                        required={true}
                                                        className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                                    />
                                                    {
                                                        showPassword ?
                                                            <button type={"button"} onClick={handleShowPassword}>
                                                                <LuEyeOff
                                                                    className={"text-2xl text-gray-3"}/></button> :
                                                            <button type={"button"} onClick={handleShowPassword}><LuEye
                                                                className={"text-2xl text-gray-3"}/>
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
                                            <FormLabel className={"text-lg"}>Confirm Password <span
                                                className={"text-sm text-orange-5"}>*</span>
                                            </FormLabel>
                                            <FormControl>
                                                <div
                                                    className={"md:ml-2 border-[1px] rounded-lg px-4 py-2 flex items-center gap-4 justify-between"}>
                                                    <Input
                                                        autoComplete={"off"}
                                                        placeholder="confirm password" {...field}
                                                        type={`${showPassword ? "text" : "password"}`}
                                                        required={true}
                                                        className={"outline-none border-none ring-0 shadow-none bg-none focus-visible:ring-0"}
                                                    />
                                                    {
                                                        showPassword ?
                                                            <button type={"button"} onClick={handleShowPassword}>
                                                                <LuEyeOff
                                                                    className={"text-2xl text-gray-3"}/></button> :
                                                            <button type={"button"} onClick={handleShowPassword}><LuEye
                                                                className={"text-2xl text-gray-3"}/>
                                                            </button>
                                                    }
                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>

                                    )}
                                />

                            </form>
                        </div>
                    </div>
                    {/*Permissions*/}
                    <div className={"bg-white mt-8 rounded-lg p-6 flex gap-8 flex-wrap"}>
                        <div>
                            <div className={"vertical-spacing"}>
                                <h2 className={"text-lg md:text-2xl font-extrabold"}>Permissions</h2>
                                <p>Items that the account is allowed to edit</p>
                            </div>
                        </div>
                        <div className={"flex-1"}>
                            <div>
                                <h2 className={"text-lg font-medium"}>Add product</h2>
                                <div className={"flex items-center gap-8"}>

                                </div>
                            </div>

                        </div>
                    </div>
                    <Button
                        className={"bg-primary px-8 max-w-[10rem] w-full py-5 text-white mt-4 hover:bg-primary-700 hover:text-text-50 duration-300"}>Signup</Button>
                </Form>
            </div>
        </>
)
}

export default AddNewCustomer