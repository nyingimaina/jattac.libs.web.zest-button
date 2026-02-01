import { FaSpinner } from "react-icons/fa6";
import { IconBaseProps } from "react-icons";

interface SpinnerIconProps extends IconBaseProps {
  className?: string;
}

const SpinnerIcon: React.FC<SpinnerIconProps> = ({ className, ...props }) => (
  <FaSpinner className={className} {...props} />
);

export default SpinnerIcon;
