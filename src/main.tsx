import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from "react-bootstrap";
import {AlbumIndex} from "./pages/albums/AlbumIndex";
import {AlbumShow} from "./pages/albums/AlbumShow";

render(
    <Container>
        <BrowserRouter>
            <Routes>
                <Route path="/albums/:id" element={<AlbumShow />} />
                <Route path="/albums" element={<AlbumIndex />} />
            </Routes>
        </BrowserRouter>
    </Container>,
    document.getElementById("root")
);