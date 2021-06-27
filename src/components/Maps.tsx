
import styled from 'styled-components';
const Maps = () => {

    const Map = styled.div`
        
        width: 250px;
        height: 250px;
    `;
    // position: fixed;
    const MapContainer = styled.div`
        display: flex;
        text-align: center;
        justify-content: center;
        margin: 100px 0;
        width: 100%;
    `


    return (
        <MapContainer>
            <Map id="map"></Map>
        </MapContainer>
    )
}

export default Maps;