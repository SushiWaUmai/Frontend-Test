import React from "react";

export default function FormSection() {
    return (
        <section className="container grid md:grid-cols-2 gap-4 mx-auto p-5">
          <div className="bg-primary text-white rounded-lg px-6 py-8 md:p-10">
            <p className="text-lg md:text-2xl leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore <b>et dolore magna aliquyam erat, sed diam voluptua.</b> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.
            </p>
          </div>
          <div className="bg-secondary rounded-lg px-6 py-8 space-y-8 md:px-10 md:px-8">
            <p className="text-2xl text-primary leading-relaxed">
              <b>Lorem ipsum dolor sit amet,</b> consetetur sadipscing elitr.
            </p>
            <form className="space-y-4 text-sm">
              <div className="space-y-2">
                <input className="w-full rounded-lg px-5 py-3" type="input" placeholder="Name" />
                <input className="w-full rounded-lg px-5 py-3" type="input" placeholder="E-Mail Addresse" />
                <textarea className="w-full rounded-lg p-5 h-48" placeholder="Nachricht" />
              </div>
              <span className="flex place-items-center gap-x-2 text-white text-xs">
                <input className="w-5 h-5 rounded" type="checkbox" />
                <label>Einwilligung zur Datenverarbeitung*</label>
              </span>
              <input className="w-full bg-select py-3 text-white rounded-lg font-bold" type="submit" value="Jetzt absenden!" />
            </form>
          </div>
        </section>
    )
}
