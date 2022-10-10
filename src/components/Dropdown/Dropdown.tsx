import React, { useMemo, useState, ReactElement } from "react";
import "./Dropdown.scss";

export interface DropdownProps {
  svg: ReactElement;
  activeSvg: ReactElement;
  content: ReactElement[];
  text?: ReactElement | string;
}

const Dropdown: React.FC<DropdownProps> = ({ svg, activeSvg, content, text, ...props }) => {
  const [isOpen, setIsOpen] = useState(false)

  const renderIcon = useMemo(() => {
    if(isOpen){
      return activeSvg 
    } else {
      return svg
    }
  }, [isOpen]);

  return (
    <div className="dropdownContainer" onBlur={() => setIsOpen(false)} tabIndex={0}>
      <div className="inputContainer" onClick={() => setIsOpen(e => !e)}>
        <div>{renderIcon}</div>
        <p>{text}</p>
      </div>

      {isOpen && 
        <div className="dropContainer" >
          {content}
        </div>
      }
    </div>
  );
};

export default Dropdown;
