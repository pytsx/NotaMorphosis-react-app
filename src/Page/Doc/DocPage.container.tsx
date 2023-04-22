import { useDoc, useTheme } from "../../Common/Context"
import { List, Stack, Typography } from "../../Components"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import vsDark from 'prism-react-renderer/themes/vsDark';
import vsLight from 'prism-react-renderer/themes/vsLight';

export const DocPage = () => {
    const { theme, mode } = useTheme()
    const { currentDoc, handleCurrentDoc, docs } = useDoc()


    return (
        <Stack height="100%" align="center" style={{}} >

            <Stack style={{ zIndex: 2000 }} position="fixed" width="fit-content" align="center" height="100%" padding='0rem .4rem'>
                <List handle={handleCurrentDoc} list={docs} />
            </Stack>
            <Stack
                width="100%"
                height="100%"
                style={{
                    background: `${theme?.palette.primary}`,
                }}>

                {
                    currentDoc
                        ? <LiveProvider scope={currentDoc?.scope} code={currentDoc?.code}>


                            <Stack height="200vh" direction="column" align="center" justify="start">

                                <Stack direction="column" height="64vh" width="100%" align="center" justify="center" style={{ background: `${theme?.palette.dark}64` }}>
                                    <LivePreview />
                                </Stack>
                                <Stack style={{ marginTop: '.8rem' }} justify="center" width="100%" >
                                    <LiveEditor theme={mode == 'dark' ? vsDark : vsLight} className="my-prism-code " language="typescript" />
                                </Stack>
                                <Stack direction="column" gap="1.6rem" width="600px">


                                    {
                                        currentDoc.description.split('\n').map(item => (
                                            <Typography
                                                color={`${theme?.palette.typography.secondary}`}
                                                weight={600}
                                                lineHeight="1.24rem"
                                                wrap="wrap"
                                                variant="h4"
                                            >
                                                {item}
                                            </Typography>

                                        ))
                                    }
                                </Stack>
                            </Stack>

                        </LiveProvider>
                        : ' '
                }

            </Stack>

        </Stack>
    )
}