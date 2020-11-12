import React from "react";
import { Card, Container } from "react-bootstrap";
import { useUserState } from "../../Store";

export default function Home () {
    const state = useUserState();

    return (
        <Container>
            <Card className="text-center">
                <pre>
                    {JSON.stringify(state)}
                </pre>
            </Card>
        </Container>
    );
}