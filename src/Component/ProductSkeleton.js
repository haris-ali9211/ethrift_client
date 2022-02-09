import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Col, Card, Container, Row, Button } from 'react-bootstrap';


export default function Variants() {
    return (
        <Card className="productdetail">
            <Stack spacing={1} className="p-3">

                <div className="d-flex justify-content-center">
                    {/* <Skeleton variant="text" width={290} /> */}
                    <Skeleton variant="rectangular" width={290} height={50} />
                </div>

                <div className="d-flex justify-content-around m-5">
                    <div className="d-flex ">
                        <Skeleton variant="rectangular" width={400} height={150} />
                    </div>
                    <div className="p-4">
                        <Skeleton variant="text" width={290} />
                        <Skeleton variant="text" width={540} />
                        <Skeleton variant="text" width={340} />
                    </div>
                </div>
            </Stack>
        </Card>
    );
}