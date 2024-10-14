import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Contact = ()=>{
    return (
        <>
            <div>
                <div className={"inline-padding lg:mt-20 sm:mt-16 mt-6"}>
                    <h2 className={"text-5xl text-center md:text-left md:text-9xl text-[rgba(210,210,210,.7)] font-extrabold"}>
                        get in touch
                    </h2>
                    <h3 className={"text-gray-8 text-center md:text-left text-3xl md:text-7xl font-extrabold"}>
                        Contact Us
                    </h3>
                </div>

                <div className={"bg-[#F2F4F6] inline-padding mt-24 pb-24"}>
                    <h2 className={"text-5xl text-center py-20 font-extrabold"}>
                        Quick Assist
                    </h2>
                    <div className={"grid md:grid-cols-2 gap-4"}>
                      <div className={"md:max-w-[35rem] w-full md:ml-auto"}>
                          <Accordion type="single" collapsible className="w-full">
                              <AccordionItem value="item-1">
                                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                  <AccordionContent>
                                      Yes. It adheres to the WAI-ARIA design pattern.
                                  </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                                  <AccordionContent>
                                      Yes. It comes with default styles that matches the other
                                      components&apos; aesthetic.
                                  </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-3">
                                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                                  <AccordionContent>
                                      Yes. It&apos;s animated by default, but you can disable it if you
                                      prefer.
                                  </AccordionContent>
                              </AccordionItem>
                          </Accordion>

                      </div>
                        {/*Right Accordion*/}
                       <div className={"md:max-w-[35rem] w-full md:mr-auto"}>
                           <Accordion type="single" collapsible className="w-full">
                               <AccordionItem value="item-1">
                                   <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                   <AccordionContent>
                                       Yes. It adheres to the WAI-ARIA design pattern.
                                   </AccordionContent>
                               </AccordionItem>
                               <AccordionItem value="item-2">
                                   <AccordionTrigger>Is it styled?</AccordionTrigger>
                                   <AccordionContent>
                                       Yes. It comes with default styles that matches the other
                                       components&apos; aesthetic.
                                   </AccordionContent>
                               </AccordionItem>
                               <AccordionItem value="item-3">
                                   <AccordionTrigger>Is it animated?</AccordionTrigger>
                                   <AccordionContent>
                                       Yes. It&apos;s animated by default, but you can disable it if you
                                       prefer.
                                   </AccordionContent>
                               </AccordionItem>
                           </Accordion>
                       </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
