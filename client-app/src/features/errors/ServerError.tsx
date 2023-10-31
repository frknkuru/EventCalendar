import { Container, Header, Segment } from "semantic-ui-react";
import { useStore } from "../../app/stores/store";
import { CodeBlock, nord } from "react-code-blocks";


export default function ServerError() {
    const { commonStore } = useStore();

    return (
        <Container>
            <Header as='h1' content='Server Error' />
            <Header sub as='h5' color="red" content={commonStore.error?.message} />
            {commonStore.error?.details && (
                <Segment>
                    <Header as='h4' content='Stack Trace' color="teal" />
                    <CodeBlock
                        text={commonStore.error.details}
                        language='javascript'
                        showLineNumbers={true}
                        theme={nord}
                    />
                </Segment>
            )
            }
        </Container >
    )
}