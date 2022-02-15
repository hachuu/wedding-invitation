
import { useEffect } from 'react';
import styled from 'styled-components';
declare const window: any
const { kakao } = window;

const Maps = () => {

    const funCopy = () => {

        const valOfDIV = document.getElementById("address")?.innerText;
        const textArea = document.createElement('textarea');
        document.body.appendChild(textArea);
        textArea.value = valOfDIV!;
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('주소가 복사되었습니다')
    }

    const Map = styled.div`
        overflow: auto;
        flex-basis: auto;
        margin-left: auto;
        width: 60%;
        // height: 400px;
    `;
    
    const MapText = styled.div`
        overflow: auto;
        flex-basis: auto;
        margin-left: auto;
        margin: 50px 0px 0px 0px;
        width: 40%;
        height: 450px;
    `;
    // position: fixed;
    const MapContainer = styled.div`
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        margin: 5px 0;
        width: 100%;
        background-color: #FDFAF6;
    `;

    const Address = styled.div`
        
        font-weight: normal;
        font-style: normal;
    `;

    const AddressP = styled.p`
    font-family: 'Cafe24SsurroundAir', cursive;
        font-size:12px;
    `;

    const Title = styled.div`
        font-family: 'KOTRAHOPE', cursive;
        font-weight: normal;
        font-style: normal;
        font-size:25px;
    `;

    const SubTitle = styled.div`
        font-family: 'KOTRAHOPE', cursive;
        font-weight: normal;
        font-style: normal;
        font-size:21px;
    `;

    const MapCoverDiv = styled.div`
        // width: 100%; 
        height: 10px;

        background-color: #FDFAF6;
        margin: 10px 10px 10px 10px;
        border-radius: 5px;
    `;

    const CopyButtonDiv = styled.div`
        font-size:12px;
        font-family: 'Cafe24SsurroundAir', cursive;
        cursor: pointer;
        margin: 10px 10px 10px 10px;
        &:hover {
            box-shadow: 0 6px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.10);
        }
    `;

    const LinkMapDiv = styled.div`
        font-size:12px;
        font-family: 'Cafe24SsurroundAir', cursive;
        cursor: pointer;
        margin: 30px 10px 10px 10px;
        &:hover {
            box-shadow: 0 6px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.10);
        }
    `;

    useEffect(() => {
        const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(37.47015121972276, 127.03849169864645),
            level: 5
		};
        const map = new kakao.maps.Map(container, options);
                // 마커가 표시될 위치입니다 
        const markerPosition  = new kakao.maps.LatLng(37.46621315156307, 127.0326723986652); 

        // 마커를 생성합니다
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
        const moveTo  = new kakao.maps.LatLng(37.46621315156307, 127.0326723986652);
        map.panTo(moveTo);

        kakao.maps.event.addListener(map, 'rightclick', function(mouseEvent: { latLng: any; }) {
            funCopy();
        });
    }, []);
    

    return (
        <>
        <MapCoverDiv>
        </MapCoverDiv>
        <MapContainer>
            <Map id="map"></Map>
            <MapText>
                <Title>오시는 길</Title><br/>
                <Title>2022년 5월 28일 12시</Title><br/>
                <Address>
                    <Title>더 케이 호텔</Title><br/>
                    <SubTitle>컨벤션센터 3층</SubTitle>
                    <SubTitle>크리스탈볼룸 AB</SubTitle><br/>
                    <AddressP id="address">서울특별시 서초구 바우뫼로 12길 70</AddressP>
                    <AddressP>(구 주소:서울특별시 서초구 양재동 202번지)</AddressP>
                </Address>
                <CopyButtonDiv onClick={()=>funCopy()} >
                    복사하기<svg aria-hidden="true" focusable="false" style={{height: '15px', width: '15px', marginTop: '10px'}} data-prefix="far" data-icon="copy" className="svg-inline--fa fa-copy fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>
                </CopyButtonDiv>
                <LinkMapDiv onClick={()=> window.open('https://map.kakao.com/link/map/더 케이 호텔,37.466213,127.032672')}>지도앱으로 보기
                </LinkMapDiv>
            </MapText>
        </MapContainer>
        <MapCoverDiv>
        </MapCoverDiv>
        </>
    )
}

export default Maps;