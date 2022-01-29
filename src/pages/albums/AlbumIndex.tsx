import {useState, useEffect} from "react";
import {getAlbums} from "../../services/album-service";

import {Col, Row} from "react-bootstrap";
import {AlbumCard} from "../../components/albums/AlbumCard";

export function AlbumIndex() {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        getAlbums()
            .then(response => setAlbums(response.data))
            .catch(err => console.error('Error: ', err))
    })

    return (
        <Row className="py-5">
            {albums.map(({id, title, userId}, index) => {
                return (
                    <Col xs={12} md={3} style={{padding: '10px'}} key={index}>
                        <AlbumCard  id={id} title={title} redirect={`/albums/${id}`}/>
                    </Col>
                )
            })}
        </Row>
    );
}
