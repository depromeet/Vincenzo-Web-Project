import styled from "styled-components";
import React from "react";

const TabBar = styled.div`
  width: 100%;
  height: 62px;
  background: #fff;
  display: flex;

`;

const TabButton = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  

  display: flex;
  justify-content: center;
  align-items: center;
  &.on {
    border-bottom: 2px solid #FFD262;
  }
`
const TabContentsArea = styled.div`
  //width: 375px;
  height: 723px;
  background: #F1F1F3;
`

interface tabInfo{
    name: string,
    index: number
}

export default function TabView(props):JSX.Element {

    let tabList: tabInfo[]= [];

    props.tabInfo.forEach(function (infoObj, index){
        tabList.push({name: infoObj.tabName, index: index})
    })

    const [tabState, setTabSTate] = React.useState(0);

    const clickHandler = (index) => {
        setTabSTate(index);
    };

    return (
        <div>
            <TabBar>
                {tabList.map((tab, index) => {
                    return (
                        <TabButton style={{width: (100/tabList.length)+'%'}}
                            key={tab.index} onClick={() => clickHandler(index)}
                                   className={tabState === index ? "on" : ""}>
                            <div>{tab.name}</div>
                        </TabButton>
                    );
                })}
            </TabBar>
            <TabContentsArea>
                {props.tabInfo[tabState].tabContents}
            </TabContentsArea>
        </div>
    );
}
