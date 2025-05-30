import Lottie from 'lottie-react';
import animationDevelopment from '../../src/images/lottie/desenvolvimento.json';
import loadingAnimation from '../../src/images/lottie/loading gold.json';

type AnimationType = 'development' | 'loading';

interface LottieAnimationsProps {
    type: AnimationType;
    className?: string;
}

export const LottieAnimations = ({ type, className }: LottieAnimationsProps) => {
    const animations: Record<AnimationType, object> = {
        development: animationDevelopment,
        loading: loadingAnimation,
    };

    return (
        <div className={className}>
            <Lottie animationData={animations[type]} />
        </div>
    );
};
