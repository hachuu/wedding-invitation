
import styled from 'styled-components';
const Maps = () => {

    const Map = styled.div`
        overflow: auto;
        flex-basis: auto;
        margin-left: auto;
        width: 250px;
        height: 250px;
    `;
    const MapText = styled.div`
        overflow: auto;
        flex-basis: auto;
        margin-left: auto;
        padding: 15px 10px 0px;
        width: 250px;
        height: 250px;
    `;
    // position: fixed;
    const MapContainer = styled.div`
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
        margin: 150px 0;
        width: 100%;
    `

    const Address = styled.div`
        font-family: 'Nanum Pen Script', cursive;
        font-weight: normal;
        font-style: normal;
        font-size:15px;
    `;

    const Date = styled.div`
        font-family: 'Nanum Pen Script', cursive;
        font-weight: normal;
        font-style: normal;
        font-size:25px;
    `;


    return (
        <MapContainer>
            <Map id="map"></Map>
            <MapText>
                <Date>2022년 5월 28일 12시</Date><br/>
                <Address>
                <Date>더 케이 호텔</Date><br/>
                <br/>
                <br/>
                서울특별시 서초구 바우뫼로 12길 70<br/>
                (구 주소:서울특별시 서초구 양재동 202번지)
                </Address>
                <div onClick={()=>alert('hi')} >
                <svg aria-hidden="true" focusable="false" style={{height: '15px', width: '15px', marginTop: '10px'}} data-prefix="far" data-icon="copy" className="svg-inline--fa fa-copy fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>
                </div>
            </MapText>
        </MapContainer>
    )
}

export default Maps;