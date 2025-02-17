import React from 'react';
import Button from "../components/Button";
import {COLORS} from "../global/constants.tsx";
import {useNavigate} from "react-router-dom";

function MainPage(props) {
    const navigate = useNavigate();
    const submitFormHandler = () => {
        router.push('/form');
    }
    return (
        <div>
            <div>
                {/*Prography*/}
                {/*안녕하세요. 새로운가치를만들어가는IT커뮤니티, Prography입 니다.*/}
                {/*드디어 Prography 10기 모집이 시작되었습니다.*/}
                {/*Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring) 총 6개의 파트를 모집합니다.*/}
                {/*✓새로운 가치를만들어내는데 가슴이두근거리신다면,*/}
                {/*✓열정적인IT인들과함께사이드프로젝트를하고싶으시다면,*/}
                {/*✓탁월한동료들과짜릿한성취감을느껴보고싶으시다면,*/}
                {/*"프로답게, 재미있게" 재미있는작당을함께만들어갈 10기에합류하세요.*/}

                {/*※자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요*/}

                {/*Prography 10기 모집 자세히 알아보기*/}
                {/*공식홈페이지*/}
                {/*인스타그램*/}
            </div>
        </div>
    );
}

export default MainPage;