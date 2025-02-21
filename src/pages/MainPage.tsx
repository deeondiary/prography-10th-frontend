import Button from "../components/Button.tsx";
import {COLORS} from "../global/constants.tsx";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/Heading.tsx";

function MainPage() {
    const navigate = useNavigate();
    const linkPage = (page: string) => {
        if (page === 'official') {
            window.open('https://prography.org/')
        } else {
            window.open('https://www.instagram.com/prography_official/');
        }
    }
    return (
        <div style={{textAlign: 'center'}}>
            <MainWrap>
                <Heading>
                    안녕하세요.<br/>새로운 가치를 만들어가는 IT커뮤니티, Prography입니다.
                </Heading>
                <div>드디어 Prography 10기 모집이 시작되었습니다.</div>
                <RolesButtonWrap>
                    <Button size='m' borderRound={true} color={COLORS.GR_BLUE} disabled={true}>Product Owner</Button>
                    <Button size='m' borderRound={true} color={COLORS.GR_BLUE} disabled={true}>Design</Button>
                    <Button size='m' borderRound={true} color={COLORS.GR_BLUE} disabled={true}>iOS</Button>
                    <Button size='m' borderRound={true} color={COLORS.GR_BLUE} disabled={true}>AOS</Button>
                    <Button size='m' borderRound={true} color={COLORS.GR_BLUE} disabled={true}>Frontend (React)</Button>
                    <Button size='m' borderRound={true} color={COLORS.GR_BLUE} disabled={true}>Backend (Spring)</Button>
                </RolesButtonWrap>
                <div>
                    총 6개의 파트를 모집합니다.
                </div>
                <AspectsText>
                    <div>✓ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,</div>
                    <div>✓ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,</div>
                    <div>✓ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,</div>
                </AspectsText>
                <ProFunText>"프로답게, 재미있게"</ProFunText>
                <div>재미있는 작당을 함께 만들어갈 10기에 합류하세요.</div>

                <DetailInfo>
                    <div>
                        📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요 👇🏻
                    </div>
                    <div>
                        <div>Prography 10기 모집 자세히 알아보기</div>
                        <div className="fx-all-center">
                            🏠 <DetailInfoLink onClick={() => linkPage('official')}>공식 홈페이지</DetailInfoLink>
                        </div>
                        <div className="fx-all-center">
                            🔗 <DetailInfoLink onClick={() => linkPage('instagram')}>인스타그램</DetailInfoLink>
                        </div>
                    </div>
                </DetailInfo>
                <Button size="l" borderRound={true} onClick={() => navigate('/form')}>지원하기</Button>
                <div style={{height: '24px'}}></div>
            </MainWrap>
        </div>
    );
}
const MainWrap = styled.div`
    min-height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 32px;
    font-size: 16px;
`
const RolesButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
    margin: 32px 0;
`
const AspectsText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin: 42px 0 28px 0;
`
const ProFunText = styled.div`
    font-weight: 700;
    color: ${COLORS.BLUE};
    font-size: 20px;
`
const DetailInfo = styled.div`
    margin: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`
const DetailInfoLink = styled.div`
    font-weight: 600;
    text-decoration: underline;
    margin-left: 4px;
    &:hover {
        cursor: pointer;
    }
`
export default MainPage;