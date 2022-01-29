import {useNavigate} from 'react-router-dom';
import {Card} from "react-bootstrap";
import {useEffect} from "react";

type AlbumCardProps = {
    id: number,
    title: string,
    img?: string,
    redirect?: string
}

export function AlbumCard(props: AlbumCardProps) {
    const navigate = useNavigate()

    const redirectToAlbum = () => {
        if (props.redirect)
            navigate(props.redirect)
    }

    return (
        <Card
            bg="dark"
            text="white"
            className="mb-2"
            style={{height: '100%', cursor: props.redirect ? 'pointer' : ''}}
            onClick={redirectToAlbum}
        >
            {!!props.img ? <Card.Img variant="top" src={props.img} style={{height: '150px'}}/> : ''}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}