import React from "react";

export default function ContentSection() {
    return (
        <section className="container mx-auto p-5 space-y-4 flex">
            <div className="justify-between md:w-1/2 mx-auto">
            <h2 className="text-3xl text-primary leading-relaxed">
                <b>Lorem ipsum dolor sit amet,</b> consetetur sadipscing elitr.
            </h2>
            <p className="text-sm leading-loose">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. <b>Stet clita kasd gubergren,</b> no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            </div>
        </section>
    )
}
