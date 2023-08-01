export interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows: boolean;
  style?: React.CSSProperties;
}

export interface Link {
  name: string;
  link: string;
}


export interface AlertProps {
  type: "success" | "error" | "warning";
  message: string;
}