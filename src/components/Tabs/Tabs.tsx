import React, { ReactElement, useCallback, useMemo, useState } from "react";
import "./Tabs.scss";
import classNames from "classnames";
import FimbIcons from "../FimbIcons";

//improving note
//settup package to accept import type from other files
export interface TabsProps {
  tabs: {
    text: string;
    svg: ReactElement;
    activeSvg: ReactElement;
    hasSearch: boolean;
    search?: string;
    setSearch?: (string: string) => void;
    onSearch?: (string: string) => void;
    searchPlaceholder?: string;
    hasFilter: boolean;
  }[];
  content: ReactElement[];
}

const Tabs: React.FC<TabsProps> = ({ tabs, content, ...props }) => {
  const [selectedTab, setSelectedTab] = useState<number>(1);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleTabClick = useCallback(
    (index: number) => {
      setSelectedTab(index);
    },
    [setSelectedTab]
  );

  const renderContent = useMemo(() => {
    return content[selectedTab - 1];
  }, [content, selectedTab]);

  const renderSearch = useMemo(() => {
    const containerClass = classNames({
      searchContainer: true,
      searchContainerActive: isSearchOpen,
    });

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          // @ts-ignore
          tabs[selectedTab - 1].onSearch();
        }
      },
      []
    );

    if (tabs[selectedTab - 1].hasSearch) {
      return (
        <div className={containerClass}>
          <div className="iconContainer" onClick={() => setIsSearchOpen(true)}>
            <FimbIcons
              hover
              hoverColor="purple"
              color="mediumGray70"
              icon="search"
            />
          </div>
          <input
            type="text"
            value={tabs[selectedTab - 1].search}
            // @ts-ignore
            onChange={(e) => tabs[selectedTab - 1].setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={
              tabs[selectedTab - 1].searchPlaceholder || "Faça sua busca..."
            }
            className="searchInput"
          />
          <div
            className="closeContainer"
            onClick={() => setIsSearchOpen(false)}
          >
            <FimbIcons
              hover
              hoverColor="purple"
              color="mediumGray70"
              icon="x-circle"
            />
          </div>
        </div>
      );
    }
  }, [selectedTab, tabs, isSearchOpen, setIsSearchOpen]);

  const renderFilter = useMemo(() => {
    if (tabs[selectedTab - 1].hasFilter) {
      return (
        <div className="searchContainer">
          <FimbIcons
            hover
            hoverColor="purple"
            color="mediumGray70"
            icon="config"
          />
        </div>
      );
    }
  }, [selectedTab, tabs]);

  return (
    <div className="tabsGeral">
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

        <div className={classNames({ controlWrapper: true })}>
          {renderSearch}
          {renderFilter}
        </div>
      </div>

      <div className="border"></div>

      <div className="content">{renderContent}</div>
    </div>
  );
};

export default Tabs;
