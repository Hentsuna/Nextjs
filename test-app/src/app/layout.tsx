'use client'

import AppHeader from '@/components/app.header';
import AppFooter from '@/components/app.footer';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AppHeader />
                <Container maxWidth="md" >
                    <Box style={{ margin: '20px 0px' }}>
                        {children}
                    </Box>
                </Container>
                <AppFooter />
            </body>
        </html>
    )
}