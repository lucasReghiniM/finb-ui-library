import React, { ReactElement, useCallback, useMemo, useState } from "react";
import "./Tabs.scss";
import classNames from "classnames";

//improving note
//settup package to accept import type from other files
export interface TabsProps {
  tabs: {
    text: string;
    svg: ReactElement;
    activeSvg: ReactElement;
    hasSearch?: boolean;
    onSearch?: (string: string) => void;
    search?: string;
    setSearch?: (string: string) => void;
  }[];
  content: ReactElement[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, content, ...props }) => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const handleTabClick = useCallback(
    (index: number) => {
      setSelectedTab(index);
    },
    [setSelectedTab]
  );

  const renderContent = useMemo(() => {
    return content[selectedTab - 1];
  }, [content, selectedTab]);

  return (
    <div>
      <div className="topContainer">
        <div className="tabRow">
          {tabs?.map((tab, index) => {
            return (
              <div
                onClick={() => handleTabClick(index + 1)}
                className={classNames({
                  tabWrapper: true,
                  active: index + 1 === selectedTab,
                })}
              >
                <div
                  className={classNames({
                    tabContainer: true,
                    active: index + 1 === selectedTab,
                  })}
                >
                  <>
                    {index + 1 === selectedTab ? tab.activeSvg : tab.svg}
                    {tab.text}
                  </>
                </div>
                <div className="bottomBar" />
              </div>
            );
          })}
        </div>

        <div className={classNames({ controlWrapper: true })}></div>
      </div>

      <div className="border"></div>

      <div className="content">{renderContent}</div>
    </div>
  );
};

export default Tabs;
