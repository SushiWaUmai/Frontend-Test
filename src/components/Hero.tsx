import React from "react";

export default function Hero() {
    return (
        <section className="bg-secondary md:h-96 md:mb-48 lg:mb-96">
            <div className="container mx-auto grid md:grid-cols-2">
                <h1 className="text-5xl lg:text-6xl p-5 text-primary">
                    <b>Lorem ipsum dolor sit amet,</b> consetetur sadipscing elitr.
                </h1>
                <div className="md:relative">
                    <div className="md:absolute m-5 rounded-lg overflow-hidden md:w-3/4">
                        <img alt="hero" src="https://picsum.photos/seed/picsum/750/750" />
                    </div>
                </div>
            </div>
        </section>
    )
}
