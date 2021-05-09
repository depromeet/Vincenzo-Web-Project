import styled from "styled-components";
import DebateComponent from "./DebateComponent";
import AnnouncementComponent from "./AnnouncementComponent";
import WriteComponent from "./WriteComponent";
import PortfolioComponent from "./PortfolioComponent";
import EtcComponent from "./EtcComponent";
import EtcTypeComponent from "./EtcTypeComponent";
import { useRecoilState } from "recoil";
import { showEtcTypeState } from "../states";

const KindBookWrapper = styled.div`
  padding: 18px 0;
`;
const MainText = styled.div`
  margin: 0 0 10px 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 35px;
  color: #222222;
`;
const SubText = styled.div`
  font-size: 16px;
  line-height: 23px;
  color: #677ac7;
`;
const TitleText = styled.div`
  float: left;
  margin: 0 0 0 20px;
  font-weight: 500;
`;
const Divider = styled.div`
  float: left;
  margin: 6px 10px;
  width: 2px;
  height: 12px;
  background: #677ac7;
`;
const AuthorText = styled.div`
  font-weight: 300;
`;
const SvgWrapper = styled.div`
  position: relative;
  height: 577px;
`;

// 토론, 발표, 글쓰기, 포트폴리오, 기타
// "debate", "announcement", "writing", "portfolio", "etc"
export default function KindTypeComponent(): JSX.Element {
  const [showEtcType, setShowEtcType] = useRecoilState(showEtcTypeState);

  return (
    <KindBookWrapper>
      <MainText>
        어떤 유형으로
        <br />
        스터디를 하고 싶나요?
      </MainText>
      <SubText>
        <TitleText>책 제목입니다</TitleText>
        <Divider />
        <AuthorText>책 저자</AuthorText>
      </SubText>
      <SvgWrapper>
        <DebateComponent />
        <AnnouncementComponent />
        <WriteComponent />
        <PortfolioComponent />
        <EtcComponent />
      </SvgWrapper>
      {showEtcType && <EtcTypeComponent />}
    </KindBookWrapper>
  );
}
