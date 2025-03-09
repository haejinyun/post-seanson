/* eslint-disable react/jsx-props-no-spreading */
import Lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';
// TODO: Lottie 애니메이션 컴포넌트 타입 수정필요
// eslint-disable-next-line react/prop-types
function LottieComponent({ animationData, ...restProps }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const animationContainer = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  const [animationInstance, setAnimationInstance] = useState<any>(null);

  useEffect(() => {
    const animationOptions = {
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any;

    const animation = Lottie.loadAnimation(animationOptions);
    setAnimationInstance(animation);

    return () => {
      animation.destroy();
    };
  }, [animationData]);

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
      ref={animationContainer}
      {...restProps}
    />
  );
}

export default LottieComponent;
// export default Lottie;

// const LottieComponent = ({
// animationdata, ...restProps
// ｝=>1
// // Lottie 애니메이션 컨테이너에 대한 ref
// const animationContainer = useRef<any>(null);
// const lanimationInstance, setAnimationInstancel = useState<any> (null);
// useffect (() => {
// const animationOptions = {
// container: animationContainer.current, renderer: "svg", loop: true, autoplay: true, animationData: animationData,
// rendererSettings: {
// preserveAspectRatio: "xMidYMid slice",
// ¿ as any;
// // Lottie 애니메이션 로드
// const animation = Lottie. loadAnimation(animationOptions);
// // Lottie 애니메이션 상태 업데이트
// setAnimationInstance (animation);
// // 컴포넌트 unmount 시 애니메이션 제거
// return () => {
// animation.destroy();
// }, lanimationDatal);
// return <div ref={animationContainery {...restProps} />;
// };
// export default LottieComponent;
