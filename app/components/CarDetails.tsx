import React from "react";


import { CarProps } from "@/types";
interface CarDetailsProps{
    isOpen:boolean;
    closeModal:()=>void;
    car:CarProps;
}
const CarDetails=({isOpen}:CarDetailsProps)=>{
return (
    <div>
        Car Details
    </div>
)
}
export default CarDetails;