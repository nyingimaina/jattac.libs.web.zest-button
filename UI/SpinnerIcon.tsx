import React from "react";
import { FaSpinner } from "react-icons/fa"; // Using react-icons/fa as per original ZestButton.tsx

interface SpinnerIconProps {
  className?: string;
}

const SpinnerIcon: React.FC<SpinnerIconProps> = ({ className }) => (
  <FaSpinner className={className} />
);

export default SpinnerIcon;