import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { WeatherAPIResponse } from "../WeatherAPI";

interface WeatherSectionProps {
    data: WeatherAPIResponse
}

export default function WeatherSection({data}: WeatherSectionProps) {
    return (
        <CardContainer>
            <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 text-white"
                >
                    Wetter in {data.location.name}
                </CardItem>

                <div className="flex justify-between place-items-center">
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white max-w-sm mt-2"
                    >
                        {data.current.condition.text}, {data.current.temp_c}℃
                    </CardItem>

                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-white"
                    >
                        <img alt="condition icon" src={`https:${data.current.condition.icon}`} />
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}
