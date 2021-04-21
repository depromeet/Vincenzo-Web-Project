import styled from "styled-components";

type infoType = {
    isLike: boolean
}
const StudyTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const StudyTypeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StudyTypeTitle = styled.div`
  text-align: center;
  font-size: 12px
`;

const StudyTypeImg = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 20px;
  margin: 10px;
  background-color: #F4F4F4;
  text-align: center;
`;

const Hr = styled.hr`
  margin-bottom: 25px;
  width: 100%;
  color: #EEEEEE;
  border: thin solid #EEEEEE;
`;

const MainContainer = styled.div`
  padding: 40px 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

const TitleDiv = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const TotalView = styled.div`
  font-size: 14px;
  color: #999999;
  text-align: right;
`;

const BookBox = styled.div`
  background-color: #F1F1F3;
  border-radius: 10px;
  width: 335px;
  height: 226px;
  margin-top: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const BookImg = styled.img`
  width: 100px;
  height: 144px;
`;

const SmallBookImg = styled.img`
  width: 51px;
  height: 74px;
  border-radius: 2px 8px 8px 2px
`;

const IconWrapper = styled.div`
  position: relative;
  right: -94px;
  top: -83px;
`;

const IconWrapperContent = styled.div`
  width: 6%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const HeartIconBookBox = styled.img`
  width: 20px;
  height: 20px;
  margin-bottom: 2px;
`;

const HeartCnt = styled.div`
  color: #777777;
  font-size: 12px;
  font-family: "Nunito", sans-serif;
`;

const StudyInfoWrapper = styled.div`
  display: flex;
  padding-top: 20px;
`;

const NewBoxWrapper = styled.div`
  display: flex;
  padding: 32px 20px;
  background-color: #FFFFFF;
  border-radius: 10px;
`;

const StudyProfile = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 17px;
`;

const NewBookProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const StudyImg = styled.img`
  border-radius: 100px;
  width: 56px;
  height: 56px;
  margin: auto;
`;


const StudyHost = styled.div`
  text-align: center;
  color: #999999;
  font-size: 12px;
  padding-top: 5px;
`;

const StudyContentWrapper = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
`;

const StudyContent = styled.div<infoType>`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #777777;
  font-family: "Nunito", sans-serif;
  margin-bottom: ${(props) => (props.isLike ? '3px' : '5px')}
`;

const StudyIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 2px
`;

const StudyDiv = styled.div`
  margin-right: 15px;
`;

const LikeDiv = styled.div`
  margin-right: 5px;
`;

const StudyTitle = styled.div<infoType>`
  font-size: 16px;
  margin-bottom: ${(props) => (props.isLike ? '6px' : '13px')};
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  color: #222222;
`;

const StudyDate = styled.div`
  font-size: 12px;
  color: #777777;
  font-family: "Nunito", sans-serif;
`;

const LikeStudyWrapper = styled.div`
  padding: 0 20px;
  margin-bottom: 25px;
`;

const LikeStudyTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const RankBookWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 80px;
`;

const RankBookImg = styled.img`
  width: 120px;
  height: 173px;
  border-radius: 2px 8px 8px 2px;
`;

const LikeInfoWrapper = styled.div`
  margin: 10px 15px 0 0;
`;

const NewStudyBackground = styled.div`
  background-color: #F1F1F3;
  min-height: 300px;
`;

const NewStudyWrapper = styled.div`
  padding: 80px 20px;
`;

const MoreBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F1F1F3;
  border: 1px solid #DDDDDD;
  border-radius: 50px;
  padding: 14px 125px;
  margin-top: 20px;
  cursor: pointer;
  color: #777777;
`;

const DownImg = styled.img`
  padding-left: 5px;
`;

export {
    DownImg,
    MoreBtn,
    NewBookProfile,
    NewBoxWrapper,
    NewStudyBackground,
    NewStudyWrapper,
    LikeDiv,
    LikeInfoWrapper,
    RankBookWrapper,
    RankBookImg,
    LikeStudyWrapper,
    LikeStudyTitleWrapper,
    StudyDiv,
    IconWrapperContent,
    StudyDate,
    StudyIcon,
    StudyContent,
    StudyContentWrapper,
    StudyHost,
    StudyImg,
    StudyInfoWrapper,
    StudyProfile,
    IconWrapper,
    HeartIconBookBox,
    HeartCnt,
    BookImg,
    SmallBookImg,
    MainContainer,
    StudyTypeWrapper,
    StudyTypeDiv,
    StudyTypeImg,
    Hr,
    StudyTypeTitle,
    StudyTitle,
    TitleDiv,
    TotalView,
    TitleWrapper,
    BookBox
};
