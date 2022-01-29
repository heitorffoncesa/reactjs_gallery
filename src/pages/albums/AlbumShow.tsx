import {useEffect, useState} from "react";
import {AlbumCard} from "../../components/albums/AlbumCard";
import {Col, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {getAlbum, getPhotos} from "../../services/album-service";


export function AlbumShow() {
    const [album, setAlbum] = useState({title: ''})
    const [photos, setPhotos] = useState([])

    const params = useParams()

    // @ts-ignore
    useEffect(async () => {
        try {
            let id = params.id
            // @ts-ignore
            const responseAlbum = await getAlbum(parseInt(id))
            setAlbum(responseAlbum.data)

            // @ts-ignore
            const responsePhotos = await getPhotos(id)
            setPhotos(responsePhotos.data)
        } catch (err) {
            console.log(err)
        }
    }, [])

    return (
        <div>
            <h1>{album.title}</h1>

            <Row className="py-5">
                {photos.map(({id, title, thumbnailUrl}, index) => {
                    return (
                        <Col xs={12} md={3} style={{padding: '10px'}} key={index}>
                            <AlbumCard id={id} title={title} img={thumbnailUrl}/>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}