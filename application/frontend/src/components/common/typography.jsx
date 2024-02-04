/* eslint-disable react/prop-types */

import clsx from "clsx";

const Typography = ({ children, tag, variant = "black" , customClasses , font}) => {
  const Component = tag || "p";
  //font = font != null ? "font-" + font : ""

  const className = clsx({
    //text color
    "text-primary": variant === "primary", 
    "text-accentuary": variant === "accentuary", // orange
    "text-secondary": variant === "secondary", //blue
    "text-white": variant === "white",
    "text-black": variant === "black",

    //font size
    "text-4xl font-Satoshi": tag === "h1",
    "text-3xl font-Satoshi": tag === "h2",
    "text-2xl font-Satoshi": tag === "h3",
    "text-xl font-Satoshi": tag === "h4",
    "text-large font-Satoshi": tag === "h5",
    "text-base font-Satoshi": tag === "h6",
    "text-sm font-Satoshi": tag === "p",


    [customClasses]: customClasses,
  });

  return <Component className={className}>{children}</Component>;
};

export default Typography;