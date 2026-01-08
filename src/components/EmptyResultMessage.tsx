import Lottie from "lottie-react";
import emptyAnimation from "../assets/animations/no-orders-animation.json";

const EmptyResult = ({ title, message }: { title: string, message: string }) => {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center px-4">
            <Lottie animationData={emptyAnimation} loop className="w-40 sm:w-48 h-40 sm:h-48" />

            <h3 className="text-base sm:text-lg font-medium text-gray-900 mt-4">
                {title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-xs">
                {message}
            </p>
        </div>
    );
};

export default EmptyResult;