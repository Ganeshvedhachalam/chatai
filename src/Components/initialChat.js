import { Box, Typography, Stack, Grid } from '@mui/material'
import icon from '../assets/ai.png'
import Card from './Initialcard'

export default function InitialChat({ generateResponse }) {

    const initialData = [
        {
            heading: "What's the difference between GET and POST requests?",
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: "Can you explain RESTful APIs?",
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: "What is a Promise in JavaScript?",
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: "How do you handle errors in async/await?",
            subtext: 'Get immediate AI generated response'
        },
    ]


    return (
        <Stack height={1} justifyContent={'flex-end'} p={{ xs: 2, md: 3 }}>
            <Stack
                alignItems={'center'}
                spacing={2}
                my={5}
            >
                <Typography variant='h2'>
                    How Can I Help You Today?
                </Typography>
                <Box
                    component={'img'}
                    src={icon}
                    height={{ xs: 42, md: 70 }}
                    width={{ xs: 42, md: 70 }}
                    boxShadow={4}
                    borderRadius={'50%'}
                />
            </Stack>
            <Grid container spacing={{ xs: 1, md: 3 }}>
                {initialData.map(item => (
                    <Grid item key={item.heading} xs={12} md={6}>
                        <Card heading={item.heading} subtext={item.subtext} handleClick={generateResponse} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}