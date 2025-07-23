"use client"

import { motion } from "motion/react";

export const LoadingCircleSpinner=()=> {
    return (
        <div className="circle-container">
            <motion.div
                className="spinner"
                animate={{ rotate: 360 }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <StyleSheet />
        </div>
    )
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>
            {`
            .circle-container {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                border-radius: 8px;
            }

            .spinner {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 4px solid #EEE;
                border-top-color: #ff0088;
                will-change: transform;
            }
            `}
        </style>
    )
}